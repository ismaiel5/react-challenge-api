var express = require("express");
const routes = require("./routes/Routes");
var cors = require('cors');
app = express();
PORT = 8080;

app.use(cors());
app.use("/api/", routes);

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`I am new express api and I am alive on http://localhost:${PORT}`);
});
