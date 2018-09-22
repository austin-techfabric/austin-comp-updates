const bcrypt = require('bcrypt');
const axios = require('axios');
module.exports = {
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

                db.find_user([email]).then(user => {
                    if(user.length){
                        req.session.user = {
                            id: user[0].id,
                            sub: user[0].sub, 
                            name: user[0].name,
                            position: user[0].position,
                            email: user[0].email,
                            assignedCohort: user[0].assigned_cohort, 
                            picture: picture,
                        }

                        res.redirect('/dashboard')
                    }else {
                        db.read_invited_users().then((invited_user_list) => {
                            //use filter to filter over invited_user_list and see if the registrants email matched any of the invited users
                            const invited_user = invited_user_list.filter(invited => invited.email === email);

                            if(invited_user.length){

                                const userName = name || nickname;
                                
                                db.create_user([sub, userName, invited_user[0].position, invited_user[0].email, invited_user[0].assigned_cohort]).then(user => {
                                    req.session.user = {
                                        id: user[0].id,
                                        sub: user[0].sub, 
                                        name: user[0].name,
                                        position: user[0].position,
                                        email: user[0].email,
                                        assignedCohort: user[0].assigned_cohort, 
                                        picture: picture,
                                    }
                                    console.log(req.session.user)
                                    res.redirect('/dashboard')
                                }).catch(err => {
                                    console.log(err)
                                    res.status(404).send(`SQL error ${err.detail} error code: ${err.code}`)
                                })
                

                            }else{
                                console.log('this is probably the real test')
                            }

                        })
                    }
                })
            }

            exchangeCodeForAccessToken()
            .then(accessTokenResponse => exchangeAccessTokenForUserInfo(accessTokenResponse))
            .then(userInfoResponse => setUserToSession(userInfoResponse))
            .catch(err =>  console.log(err))      
          }

}
