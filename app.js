const listRoutes = require("./list-routes"),
      express    = require("express"),
      bodyParser = require("body-parser"),
      app        = express();
//
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", listRoutes);

const server = app.listen(3001, function(){
  const port = server.address().port;
  console.log("App's server listening at http://localhost:%s", port);
});
