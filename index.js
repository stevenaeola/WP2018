"use strict";
var express = require('express');
var app = express();

app.use(express.static('public'));

var songs = {"hai": {"fulltitle": "Sitzt ein Kuckuk auf dem baum", "type": "atonal round"}};

app.get('/songs', function(req, resp){
    const title = req.query.title;
    resp.send('Hello world ' + songs[title].fulltitle);
})

app.listen(8090);
