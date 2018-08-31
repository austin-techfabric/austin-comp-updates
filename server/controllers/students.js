module.exports = {
    readStudents: (req, res) => {
        const db = req.app.get('db');
        db.read_students().then(studentsArray => {
            res.status(200).send(studentsArray);
        })
    },
    createStudent: (req, res) => {
        const db = req.app.get('db');
        const {name, cohort, email} = req.body;
        const newStudent = {
            name,
            cohort,
            email
        }
        db.create_student(newStudent).then(addedStudentId => {
            db.build_comp_list(addedStudentId[0].id).then(studentsArray => {
                res.status(200).send(studentsArray);
        })
            
        }).catch(err => {
            res.status(404).send(`SQL error ${err.detail} error code: ${err.code}`)
        })
    }
}