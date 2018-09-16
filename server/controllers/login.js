const bcrypt = require('bcrypt');
const axios = require('axios');
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
    },
    auth0_login: (req, res) => {

            let payload = {
              client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
              code: req.query.code,
              client_secret: process.env.AUTH0_CLIENT_SECRET,
              grant_type: 'authorization_code',
              redirect_uri: `http://${req.headers.host}/callback`
            }
            
            const exchangeCodeForAccessToken = () =>{
              return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload)
            }
          
            const exchangeAccessTokenForUserInfo = (accessTokenResponse) => {
              const accessToken = accessTokenResponse.data.access_token;
              return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessToken}`) 
            }
          
            const setUserToSession = (userInfoResponse) => {
                const db = req.app.get('db');
                const {sub, nickname, name, picture, email} = userInfoResponse.data;

                db.read_invited_users().then((invited_user_list) => {
                    console.log(invited_user_list)
                    //use filter to filter over invited_user_list and see if the persons email matched any of the invited users
                    // if(user[0].length){
                    //     console.log(user[0])
                    // }

                })

                // db.create_user([sub, nickname, name, picture, email]).then(user => {
                //     req.session.user = user[0]
                //     res.status(201).send(req.session.user)
                // }).catch(err => {
                //     res.status(404).send(`SQL error ${err.detail} error code: ${err.code}`)
                // })


            //   req.session.user = userInfoResponse.data
            //   console.log(req.session.user);
              res.redirect('/')
            }

            exchangeCodeForAccessToken()
            .then(accessTokenResponse => exchangeAccessTokenForUserInfo(accessTokenResponse))
            .then(userInfoResponse => setUserToSession(userInfoResponse))
            .catch(err =>  console.log(err))      
          }

}
