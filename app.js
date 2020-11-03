const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
});

app.post("/upload", jsonParser, (req, res) => {
    let base64Data = req.body.base64img.replace(/^data:image\/png;base64,/, "");

    fs.writeFile('public/images/custom/' + req.body.filename, base64Data, 'base64', function(err) {
      if (err)
        console.log(err);
    });
    res
    .status(200)
    .contentType("text/plain")
    .end("Success");

});

const handleError = (err, res) => {
    console.error(err)
    res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
