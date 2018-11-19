"use strict";
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'));

var songs = {"hai": {"fulltitle": "Sitzt ein Kuckuk auf dem baum", "type": "atonal round"}};

app.get('/songs', function(req, resp){
    const title = req.query.title;
    resp.send('Hello world ' + songs[title].fulltitle);
})

app.post('/newsong', function(req, resp){
    const t = req.body.title;
    songs[t] = {fulltitle:req.body.fulltitle,
			  type: req.body.type};
    
    resp.send("request for new song called " + req.body.title);
    
})


app.listen(8090);
