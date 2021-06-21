const schema = require("../../models/customCommandSchema");
module.exports = (app) => {
  app.post(`/rmCmd`, async (req, res) => {
    const params = req.body;

    if (!params)
      return res.json({
        status: 200,
        message: "Provide the name for the command please (include guildID)",
      });

    await schema
      .findOneAndDelete({
        serverID: params.guildID,
        commandName: params.command
      })
      .then(() =>
        res.json({
          status: 200,
          message: "Successfully deleted the command.",
        })
      );
  });
};
