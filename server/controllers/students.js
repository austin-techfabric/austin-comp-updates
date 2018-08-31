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
    },
    readStudentIdAndStatus: (req, res)=> {
        const db = req.app.get('db');
        const {passed} = req.query;
        const {id} = req.params;
        console.log(id, passed);
        db.get_all_passed([id, passed]).then(passedStudentsArray => {
            console.log(passedStudentsArray);
            res.status(200).send(passedStudentsArray)
        })
    },
    readStudentsByCohort: (req, res)=> {
        const db = req.app.get('db');
        const {active} = req.query;
        const {cohort} = req.params;
        console.log(cohort, active);
        db.get_students_by_cohort([cohort, active]).then(cohortStudentsArray => {
            console.log(cohortStudentsArray)
            res.status(200).send(cohortStudentsArray)
        }).catch(err => {
            res.status(404).send(err)
        })
    }
}