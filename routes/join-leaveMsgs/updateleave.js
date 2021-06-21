const schema = require("../../models/leave");

module.exports = (app) => {
    app.get('/updateleave', async(req, res) => {
        const params = req.body;

        const updateParams = {
            Guild: params.guildID
        }

        if(!params) return res.json({
            status: 200,
            message: "No data provided in the body"
        });

        await schema.findOneAndUpdate(updateParams, {
            $set: {
                Channel: params.newChannelID
            }
        }).then(() => res.json({
            status: 200,
            message: "Successfully updated the leave channel."
        }))
    })
}