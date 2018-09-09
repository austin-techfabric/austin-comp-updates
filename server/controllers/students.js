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
            db.build_comp_list([addedStudentId[0].id, cohort]).then(studentsArray => {
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
        console.log('hit')
        const db = req.app.get('db');
        const {active} = req.query;
        const {cohort} = req.params;
        db.get_students_by_cohort(cohort).then(cohortStudentsArray => {

            console.log('cohortStudentsArray', cohortStudentsArray)
            res.status(200).send(cohortStudentsArray)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
    },
    readStudentById: (req, res) => {
       const db = req.app.get('db');
       const {id} = req.params;
       console.log(id)
       db.get_student_by_id(id).then(student => {
           console.log(student)
           res.status(200).send(student);
       })
    },
    markCompComplete: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {competencyName, passed} = req.query;
        db.markCompComplete(id, passed, competencyName).then(updatedCompList => {
            console.log(updatedCompList)
            res.status(200).send(updatedCompList);
        }).catch(err => console.log(err));
    }
}