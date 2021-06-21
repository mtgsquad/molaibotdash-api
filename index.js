const { port, mongouri } = require("./config.json"),
  express = require("express"),
  app = express(),
  glob = require("glob").sync;

require("./dbConnect")(mongouri);

app.use(express.json());
glob(`${__dirname}/routes/**/*.js`, { nodir: true }).map((route) =>
  require(route)(app)
);

console.log(glob(`${__dirname}/routes/**/*.js`, { nodir: true }), "Routes loaded.")

app.listen(port, () => console.log(`Running On http://localhost:${port}`));
