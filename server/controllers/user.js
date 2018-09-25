module.exports = {
    readLoggedInUser:(req, res) => {
        res.status(201).send(req.session.user)
    },
    getTogglableAssignmentList: (req, res) => {
        const db = req.app.get('db')
        const { assignment } = req.params

        switch(assignment){

            case 'assessments':
                db.get_all_assessments().then(editableAssignments => {
                    res.status(200).send(editableAssignments)
                }).catch(err => console.log(err))
            break;

            case 'competencies':
                db.get_all_competencies().then(editableAssignments => {
                    res.status(200).send(editableAssignments)
                }).catch(err => console.log(err))
            break;

            default:
                res.status(404).send('No Assignment by that type in the database')
            break;
        }
    },
    updateTogglableAssignment: (req, res) => {
        const db = req.app.get('db');
        const { assignment } = req.params;
        const { id, active } = req.body;
        switch(assignment){

            case 'assessments':
                db.enable_disable_assessments([active, id]).then(editableAssignments => {
                    res.status(200).send(editableAssignments)
                }).catch(err => console.log(err))
            break;

            case 'competencies':
                db.enable_disable_competencies([active, id]).then(editableAssignments => {
                    res.status(200).send(editableAssignments)
                }).catch(err => console.log(err))
            break;

            default:
                res.status(404).send('No Assignment by that type in the database')
            break;
        }
    },
    getInvitedStaff: (req, res) => {
        const db = req.app.get('db')
        db.read_invited_users().then(invitedUsersList => {
            res.status(200).send(invitedUsersList)
        })
    },
    inviteStaff: (req, res) => {
        const db = req.app.get('db')
        const { position, email } = req.body;
        db.invite_user([position, email]).then(updatedInvitedStaffList => {
            res.status(200).send(updatedInvitedStaffList);
        })
    },
    getAllStaff: (req, res) => {
        const db = req.app.get('db')
        db.read_users().then(usersList => {
            res.status(200).send(usersList);
        })
    },
    getDownloadableListByCohort: (req, res) => {
        const db = req.app.get('db')
        const { cohort } = req.params
        const { assignment } = req.query
        switch(assignment){
            case 'competencies':
                db.get_downloadable_list_by_cohort_of_competencies([cohort]).then(downloadableListOFStudents => {
                    res.status(200).send(downloadableListOFStudents)
                })
            break
            case 'assessments':
                db.get_downloadable_list_by_cohort_of_assessments([cohort]).then(downloadableListOFStudents => {
                    res.status(200).send(downloadableListOFStudents)
                })
            break

            default:
                res.status(404).send('Cannot locate resource')
            break
        }
        
    }
}