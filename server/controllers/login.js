const bcrypt = require('bcrypt');
module.exports = {
    register: (req, res) => {
        const db = req.app.get('db');
        const { password, name, position, email } = req.body;
        const saltRounds = 12;
        bcrypt.hash(password, saltRounds).then(hashedPassword => {
            db.create_user([name, hashedPassword, position, email]).then(user => {
                req.session.user = user[0]
                res.status(201).send(req.session.user)
            }).catch(err => {
                res.status(404).send(`SQL error ${err.detail} error code: ${err.code}`)
            })
        })
    },
    login: (req, res)=>{
        const db = req.app.get('db');
        const { email, password } = req.body;
        db.find_user([email]).then(user => {
            console.log(user);
            if(user.length) {
                bcrypt.compare(password, user[0].password).then(passwordsMatch => {
                    console.log(passwordsMatch);
                    if(passwordsMatch){
                        req.session.user = {
                            name: user[0].name,
                            position: user[0].position,
                            email: user[0].email,
                            assignedCohort: user[0].assigned_cohort
                        }
                        res.status(200).send(req.session.user)
                    }
                })
            }
        }).catch(err => {
            res.status(404).send(`SQL error ${err.detail} error code: ${err.code}`)
        })
    },
    logout: (req, res)=> {
        req.session.destroy();
        res.end();
    }
}
