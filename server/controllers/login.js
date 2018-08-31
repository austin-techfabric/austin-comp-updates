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
        //setting db name variable
        const db = req.app.get('db');
        //deconstructing username and password
        const { email, password } = req.body;

        db.find_user([email]).then(user => {
            if(user.length) {
                //compare password with known password
                bcrypt.compare(password, user[0].password).then(passwordsMatch => {
                    if(passwordsMatch){
                        req.session.user = {
                            name: user[0].name,
                            position: user[0].position,
                            email: user[0].email
                        }
                        res.status(200).send(req.session.user)
                    }
                })
            }
        }).catch(err => {
            res.status(404).send(`SQL error ${err.detail} error code: ${err.code}`)
        })
    }
}