module.exports = {
    checkpoint(req, res, next) {
        if(req.session.user || req.session.student) {
            return next()
        }
        res.status(403).send('Unauthorized Request!')
    },
    adminCheckpoint(req, res, next) {
        if(req.session.user) {
            next ()
        } else {
            res.status(403).send('Unauthorized Request!') 
        }
    },
    personalInfoCheckpoint(req, res, next) {
        const db = req.app.get('db')
        db.find_student([req.session.student.email]).then(response => {
            const isStudentSame = response[0].id == req.params.id
            req.session.user || isStudentSame ?
                next()
            :
                res.status(403).send('Unauthorized Request!')
        })
    }
}