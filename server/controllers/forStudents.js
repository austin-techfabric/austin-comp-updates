module.exports = {
    getStudentData(req, res){
        const db = req.app.get('db')
        const studentDataObject = {
            
        }
        db.get_passed_comp_by_id(req.session.student.id).then((studentPassedComps) => {
            
            db.get_passed_assessment_by_id(req.session.student.id).then((studentPassedAssessments) => {

                db.get_passed_html_css_by_id(req.session.student.id).then((studentPassedHtmlCss)=>{
                    
                    studentDataObject.competencies = studentPassedComps;
                    studentDataObject.assessments = studentPassedAssessments;
                    studentDataObject.htmlcss = studentPassedHtmlCss;
    
                    res.status(200).send(studentDataObject)
                })
            })
        })
    }
}