const express = require('express');
const game = require('./game.json');
const port = 3000;
const app = express();

app.get('/game', (req,res) =>{
    //res.send('requesting game..');
    res.json(game);
});

app.listen(port,() => {
    console.log(`listening to port: ${port}`);
})