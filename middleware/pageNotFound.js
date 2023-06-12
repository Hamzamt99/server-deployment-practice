module.exports = (req, res) => {
    res.status(404).json({
        statusCode: 404,
        message: 'Page Not Found',
        route : req.originalUrl
    })
}