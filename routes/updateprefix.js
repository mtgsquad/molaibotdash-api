const prefixSchema = require("../models/prefix");
module.exports = (app) => {
  app.post(`/updateprefix`, async (req, res) => {
    const params = req.body;

    if (!params)
      return res.json({
        status: 200,
        message: "Provide the prefix and guildID: Internal Error",
      });

    if (!params.guildID)
      return res.json({
        status: 200,
        message: "Provide the prefix and guildID: Internal Error",
      });

    if (!params.newPrefix)
      return res.json({
        status: 200,
        message: "Provide the prefix and guildID: Internal Error",
      });

    await prefixSchema
      .findOneAndUpdate(
        { guildID: params.guildID },
        {
          $set: {
            prefix: params.newPrefix,
          },
        }
      )
      .then(() =>
        res.json({
          status: 200,
          message: `Successfully changed the prefix to: ${params.newPrefix}!`,
        })
      );
  });
};
