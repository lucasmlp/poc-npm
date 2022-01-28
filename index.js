const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.use(express.static('public'))

app.get("/index.html", (req, res) => {

    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});

app.listen(3333);