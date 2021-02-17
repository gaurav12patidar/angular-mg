const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/mg'));
app.get('/*',(req,res)=>
    res.sendFile('index.html', {root: 'dist/mg/'}),
);
app.listen(process.env.PORT || 8080);
