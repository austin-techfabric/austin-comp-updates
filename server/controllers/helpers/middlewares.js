module.exports = {
    checkForSession(req, res, next) {
        console.log(req, res, next)
        req.session.user ?
            next()
        :
            res.status(403).send('Unauthorized Request!')
    }
}