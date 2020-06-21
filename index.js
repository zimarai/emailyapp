const express = require('express');
const app = express();
//import express from 'express;

app.get('/', (req, res) =>{
    res.send({'pet':'marmota'})
});

app.listen(5000);