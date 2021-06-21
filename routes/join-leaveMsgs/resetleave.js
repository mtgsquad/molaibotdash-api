const schema = require("../../models/leave");

module.exports = (app) => {
    app.get('/resetleave', async(req, res) => {
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
            message: "Successfully reset the leave channel."
        }))
    })
}