var express = require("express");
app = express();
PORT = 8080;

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`I am new express api and I am alive on http://localhost:${PORT}`);
});

app.get("/objectsData", (req, res) => {
  const object = { name: "ismaiel" };
  res.status(200).send(object);
});



app.get("/file", (req, res) => {
    const object = { name: "ismaiel" };
    res.status(200).send(object);
  });
  
