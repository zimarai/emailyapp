const express = require('express');
const app = express();
//import express from 'express;

app.get('/', (req, res) =>{
    res.send({'pet':'marmota'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);