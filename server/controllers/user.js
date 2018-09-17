module.exports = {
    readLoggedInUser:(req, res) => {
        console.log('resetting session')
        res.status(201).send(req.session.user)
    },
    getAllUsers: (req, res) => {
        const db = req.app.get('db');
        db.read_users().then(usersList => {
            res.status(200).send(usersList);
        })
    },
    getAllInvitedUsers: (req, res) => {
        const db = req.app.get('db');
        db.read_invited_users().then(invitedUsersList => {
            res.status(200).send(invitedUsersList);
        })
    },
    inviteUser: (req, res) => {
        const db = req.app.get('db');
        const { position, email } = req.body;
        db.invite_user([position, email]).then(updatedList => {
            res.status(200).send(updatedList);
        })
    },
    getEditableAssignments:(req, res) => {
        const db = req.app.get('db');
        const { assignmentType } = req.params;

        console.log(assignmentType);

        switch(assignmentType){

            case 'assessments':
                db.get_all_assessments([assignmentType]).then(editableAssignments => {
                    res.status(200).send(editableAssignments)
                }).catch(err => console.log(err))
            break;

            case 'competencies':
                db.get_all_competencies([assignmentType]).then(editableAssignments => {
                    res.status(200).send(editableAssignments)
                }).catch(err => console.log(err))
            break;

            default:
                res.status(404).send('No Assignment by that type in the database')
            break;
        }
    },
    updateEditableAssignments: (req, res) => {
        const db = req.app.get('db');
        const { assignmentType } = req.params;
        const { id, active } = req.body;
        console.log(id, active);

        switch(assignmentType){

            case 'assessments':
                db.enable_disable_assessments([active, id]).then(editableAssignments => {
                    console.log(editableAssignments);
                    res.status(200).send(editableAssignments)
                }).catch(err => console.log(err))
            break;

            case 'competencies':
                db.enable_disable_competencies([active, id]).then(editableAssignments => {
                    console.log(editableAssignments);
                    res.status(200).send(editableAssignments)
                }).catch(err => console.log(err))
            break;

            default:
                res.status(404).send('No Assignment by that type in the database')
            break;
        }
    }
}