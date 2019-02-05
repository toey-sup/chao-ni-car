module.exports = (req, res, next) => {
    if (req.user && !req.user.isAuthenticated) {
        var redir = { redirect: "/authentication" };
        return res.json(redir);
    }
    next();
}