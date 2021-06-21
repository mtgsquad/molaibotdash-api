const schema = require("../../models/support");

module.exports = (app) => {
    app.get('/updatesupport', async(req, res) => {
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
                Message: params.newMsg
            }
        }).then(() => res.json({
            status: 200,
            message: "Successfully updated the support command."
        }))
    })
}