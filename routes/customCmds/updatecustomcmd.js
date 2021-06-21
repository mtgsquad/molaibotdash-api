const schema = require("../../models/customCommandSchema");

module.exports = (app) => {
  app.post(`/updateCmd`, async (req, res) => {
    const params = req.body;

    if (!params)
      return res.json({
        status: 200,
        message:
          "Provide the name and response for the command please (include guildID)",
      });

    await schema
      .findOneAndUpdate(
        {
          serverID: params.guildID,
          commandName: params.name,
        },
        {
          $set: {
            commandResponse: params.newResponse,
          },
        }
      )
      .then(() =>
        res.json({
          status: 200,
          message: "Successfully updated the command.",
        })
      );
  });
};
