const http = require("http");
const app = require("./app");
require("dotenv").config();

require("./dbConnection/dbConnection").connect();

const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`AsDot is running is on port: ${PORT}`));
