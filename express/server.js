const { request } = require('express');
const express = require('express'); 
const app = express();   //Estas Dos lineas sirven para crear el servidor


app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));
app.engine('ejs',require('ejs').renderFile);  // 11.2k (gzipped: 4.2k)
app.set('view engine', 'ejs');

// A partir de aqui configuramos el servidor
app.get('/',(req, res) =>{
    //res.sendFile(__dirname + '/public/html/index.html');
    res.render('home');
});  //This is the BASIC for creating new n-points
app.get('/students',(req, res) =>{
    var name = req.query.name;
    // res.send('Hello '+ name);
    res.render('test', {name:name});
});
app.post('/students',(req, res) =>{
    var name = req.body.name;       // Depending on where i'm getting the info it is where
    res.send('Hello secure '+ name); // you ask for it in " req.'where you get the info'.'the name of the variable' "
});
app.get('/teachers/:name',(req, res) =>{
    res.send('Hello Prof. '+ req.params.name);
});
app.listen(3000,(err)=>{
    console.log('Listening on port 3000');
});

// !ADVICE: Whenever you want to add something online, add it to the code
// ! then kill the server with 'control + C' twice and then run up the server
// ! again. :) (To start the server just put on the console 'node server.js')
