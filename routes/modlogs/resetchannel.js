const schema = require("../../models/modlogs");

module.exports = (app) => {
    app.get('/resetmodlogs', async(req, res) => {
        const params = req.body;

        const updateParams = {
            Guild: params.guildID
        }

        if(!params) return res.json({
            status: 200,
            message: "No data provided in the body"
        });

        await schema.findOneAndDelete(updateParams).then(() => res.json({
            status: 200,
            message: "Successfully reset the modlogs channel."
        }))
    })
}