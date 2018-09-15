module.exports = {
    readLoggedInUser:(req, res) => {
        console.log('resetting session')
        res.status(201).send(req.session.user)
    },
    getAllUsers: (req, res) => {
        const db = req.app.get('db');
        db.read_users().then(usersList => {
            res.status(200).send(usersList);
        })
    },
    getAllInvitedUsers: (req, res) => {
        const db = req.app.get('db');
        db.read_invited_users().then(invitedUsersList => {
            res.status(200).send(invitedUsersList);
        })
    },
    inviteUser: (req, res) => {
        const db = req.app.get('db');
        const { position, email } = req.body;
        db.invite_user([position, email]).then(updatedList => {
            res.status(200).send(updatedList);
        })
    }
}