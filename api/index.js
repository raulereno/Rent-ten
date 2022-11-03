
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const { House, Review, User } = require("./src/db.js");

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});

