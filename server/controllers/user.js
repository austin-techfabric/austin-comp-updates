module.exports = {
    readLoggedInUser:(req, res) => {
        console.log('resetting session')
        res.status(201).send(req.session.user)
    }
}