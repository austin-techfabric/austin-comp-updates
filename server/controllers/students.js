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
            db.get_assess_titles().then(assessment_titles => {
                assessment_titles.map((title, index) => {
                    db.query('INSERT INTO assessments_status (assess_id, student_id, passed) VALUES ($1, $2, FALSE)', [index + 1, addedStudentId[0].id])
                })
            })
                db.get_comp_titles().then(comp_titles => {
                    comp_titles.map((title, index) => {
                        db.query('INSERT INTO status (comp_id, student_id, passed) VALUES ($1, $2, FALSE)', [index + 1, addedStudentId[0].id, cohort])
                    })
                }).catch(err => console.log(err))

                db.grab_all_students_after_creation(cohort).then(studentsArray => {
                    console.log(studentsArray);
                    res.status(200).send(studentsArray);
                }).catch(err => console.log(err))
       

            
            
        }).catch(err => {
            res.status(404).send(`SQL error ${err.detail} error code: ${err.code}`)
        })
    },
    readStudentIdAndStatus: (req, res)=> {
        const db = req.app.get('db');
        const {passed} = req.query;
        const {id} = req.params;
        db.get_all_passed([id, passed]).then(passedStudentsArray => {
            console.log(passedStudentsArray);
            res.status(200).send(passedStudentsArray)
        })
    },
    readStudentsByCohort: (req, res)=> {
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
    },
    getStudentsAssessments: (req, res)=> {
        const db = req.app.get('db');
        const {active} = req.query;
        const {cohort} = req.params;
        db.get_passed_assessments([cohort, false]).then(cohortStudentsArray => {

            res.status(200).send(cohortStudentsArray)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
    },
    getStudentAssessmentsById: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.get_passed_assessment_by_id(id).then((studentAssessments) => {
            res.status(200).send(studentAssessments)
        })
    },
    markAssessmentComplete: (req, res) => { 
        const db = req.app.get('db');
        const {id} = req.params;
        const  {assessmentName, passed} = req.query;
        db.mark_assessment_complete(id, passed, assessmentName).then((updatedAssessmentList) => {
            res.status(200).send(updatedAssessmentList);
        }).catch(err => console.log(err));
    },
    getFullCohortStats: (req, res) => {
        const db = req.app.get('db');
        const {assignment, cohort} = req.params;
        if(assignment === 'assessments'){
            db.get_assess_titles().then(assessTitles => {
                let assessArray = assessTitles.map((title) => {
                    return {title: title.assessment_name, count: 0}
                });

                db.full_class_stats_asses([true, cohort]).then(assessments => {
                    let assessResponse = assessArray.map((title) => {
                            let index = assessments.findIndex(actual => actual.assessment_name == title.title)
                            if(index !== -1){
                                return {name: assessments[index].assessment_name, count: +assessments[index].count}
                            }else{
                                return {name: title.title, count: +title.count}
                            }
                        })

                    res.status(200).send(assessResponse)
                })
            })
            
        }else if (assignment === 'competencies'){
            db.get_comp_titles().then(compTitles => {
                let compArray = compTitles.map((title) => {
                        return {title: title.competency_name, count: 0}
                    });
                db.full_class_stats_comps([true, cohort]).then(competencies => {
                    let compResponse = compArray.map((title) => {
                            let index = competencies.findIndex(actual => actual.competency_name == title.title)
                            if(index !== -1){
                                return {name: competencies[index].competency_name, count: +competencies[index].count}
                            }else{
                                return {name: title.title, count: +title.count}
                            }
                        })

                    res.status(200).send(compResponse)
                })
            })
        }
    }
}


