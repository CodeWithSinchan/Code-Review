const aiService = require('../services/ai.service')
module.exports.getReview = async (req, res) => {
    const code = req.body.code

    if (!code) {
        res.status(400).send({ error: "code is required" })
    }

    const response = await aiService(code)

    res.send(response)
}