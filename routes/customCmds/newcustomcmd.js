const schema = require("../../models/customCommandSchema");
module.exports = (app) => {
  app.post(`/newCmd`, async (req, res) => {
    const params = req.body;

    if (!params)
      return res.json({
        status: 200,
        message:
          "Provide the name and response for the command please (include guildID)",
      });

    await schema
      .create({
        serverID: params.guildID,
        commandName: params.name,
        commandResponse: params.response,
      })
      .then(() =>
        res.json({
          status: 200,
          message: "Successfully created the command.",
        })
      );
  });
};
