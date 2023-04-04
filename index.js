const express = require('express');
const app = express();

app.get('/main', function(req, res) {
  // Renvoyer le fichier choix.html
  res.sendFile(__dirname + '/public/choix.html');
});

app.get('/main/log', function(req, res) {
    // Renvoyer le fichier identification.html
    res.sendFile(__dirname + '/public/identification.html');
});
app.get('/main/log/welcome', function(req, res) {
    // Renvoyer le fichier identification.html
    res.sendFile(__dirname + '/public/welcome.html');
});

app.get('/main/log/sign', function(req, res) {
    // Renvoyer le fichier add.html
    res.sendFile(__dirname + '/Addclient/add.html');
});

app.listen(3004, function() {
  console.log('Le serveur écoute sur le port 3004...');
});
