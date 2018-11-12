"use strict";
var express = require('express');
var app = express();

var songs = {"hai": {"fulltitle": "Sitzt ein Kuckuk auf dem baum", "type": "atonal round"}};

app.get('/', function(req, resp){
    console.log(req);
    const title = req.query.title;
    resp.send('Hello world ' + songs[title].fulltitle);
})

app.listen(8090);
