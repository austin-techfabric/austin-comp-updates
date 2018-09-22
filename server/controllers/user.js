module.exports = {
    readLoggedInUser:(req, res) => {
        console.log('resetting session')
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
        console.log(id, active);
        switch(assignment){

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