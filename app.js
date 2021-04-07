const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, () => console.log('Server running'));
app.use(express.static('public'));

let indexPath = path.resolve('./views/index.html');
app.get('/' , (req,res) => res.sendFile(indexPath));

let babbagePath = path.resolve('./views/babbage.html');
app.get('/babbage' , (req,res) => res.sendFile(babbagePath));

let bernersLeePath = path.resolve('./views/berners-lee.html');
app.get('/berners-lee' , (req,res) => res.sendFile(bernersLeePath));

let clarkePath = path.resolve('./views/clarke.html');
app.get('/clarke' , (req,res) => res.sendFile(clarkePath));

let hamiltonPath = path.resolve('./views/hamilton.html');
app.get('/hamilton' , (req,res) => res.sendFile(hamiltonPath));

let hopperPath = path.resolve('./views/hopper.html');
app.get('/hopper' , (req,res) => res.sendFile(hopperPath));

let lovelacePath = path.resolve('./views/lovelace.html');
app.get('/lovelace' , (req,res) => res.sendFile(lovelacePath));

let turingPath = path.resolve('./views/turing.html');
app.get('/turing' , (req,res) => res.sendFile(turingPath));