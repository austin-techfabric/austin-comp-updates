const bcrypt = require('bcrypt');
const axios = require('axios');
const jwt = require('jsonwebtoken');

module.exports = {
    logout: (req, res)=> {
        req.session.destroy();
        res.end();
    },
    authCallback: (req, res) => {
        // Get JWT with student ID in it.
        // Be sure to check the signature of the JWT!
        const token = req.query.token;
        const userInfo = jwt.verify(token, process.env.DEVMTN_AUTH_JWT_SECRET);
        const db = req.app.get('db');
        const {id, first_name, last_name, email, roles} = userInfo;
        const name = first_name + ' ' + last_name;

        let student = userInfo.roles.filter(role => {
            return role.role === 'student'
        })

        console.log(student)

// dont leave hardcoded 
        if(student.length){
            db.find_student([email]).then(student => {
                if(student.length){
                    req.session.student = {
                        id: student[0].id,
                        name: student[0].name,
                        email: student[0].email,
                        cohort: student[0].cohort
                    }
                    res.redirect('/student_profile')
                }
            })
        }else {

        db.find_user([email]).then(user => {
            if(user.length){
                req.session.user = {
                    id: user[0].id,
                    sub: user[0].sub, 
                    name: user[0].name,
                    position: user[0].position,
                    email: user[0].email,
                    assignedCohort: user[0].assigned_cohort, 
                }

                res.redirect('/competencies')
            }else {
                return db.read_invited_users().then((invited_user_list) => {
                    //use filter to filter over invited_user_list and see if the registrants email matched any of the invited users
                    const invited_user = invited_user_list.filter(invited => invited.email === email);

                    if(invited_user.length){

                        return db.create_user([id, name, invited_user[0].position, invited_user[0].email, invited_user[0].assigned_cohort]).then(user => {
                            req.session.user = {
                                id: user[0].id,
                                sub: user[0].sub, 
                                name: user[0].name,
                                position: user[0].position,
                                email: user[0].email,
                                assignedCohort: user[0].assigned_cohort, 
                            }
                            res.redirect('/competencies')
                        }).catch(err => {
                            console.log(err)
                            res.status(404).send(`SQL error ${err.detail} error code: ${err.code}`)
                        })
        

                    } else {
                        res.status(400).send('You are not an invited user');
                    }

                })
            }
        }).catch(error => {
            console.error('error with find_user', error);
            res.status(500).send('Something went wrong on the server');
        })
        }
    },
    loginForward: (req, res) => {
        const redirectUri = encodeURIComponent(`http://${req.headers.host}/auth/devmtn/callback`);
        const url = `https://devmountain.com/v2/auth/api/login?redirect_uri=${redirectUri}&client_id=${process.env.DEVMTN_AUTH_CLIENT_ID}`
        res.redirect(url);
    }
}
