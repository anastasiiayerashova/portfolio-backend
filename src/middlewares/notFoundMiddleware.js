export const notFoundMiddleware = async (req, res) => {
    res.status(404).json({
        message: 'Route not found'
    })
}
