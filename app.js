const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve('./public');
app.use(express.static(publicPath));

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

app.get('/product/:idProduct', (req,res) => res.send('This is deatil of product nº ' + req.params.idProduct));

app.get('/product/:idProduct/comment/:idComment?', function (req,res){
    let idProduct = req.params.idProduct;
    let idComment = req.params.idComment;
    if (idComment == undefined) {
        res.send('This is the comment section of product nº ' + idProduct);
    } else {
        res.send('This is the comment section of product nº ' + idProduct + ' and you are currently looking at comment nº ' + idComment);
    };
});

app.listen(3001, () => console.log('Server running'));