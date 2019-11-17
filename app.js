var express = require('express');
const people = require('./people.json'); // Copia il file people.json dentro la variabile people

var app = express();
app.set('view engine', 'pug');   // Dico a express di usare pug come motore di template e quindi andare 
                                 // nella cartella "views" e usarla come cartella principale 
                                 // per trovare le pagine con estensione "pug"

app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici come 
                                                // fogli di stile e immagini

app.get('/', function (req, res) {
  res.render('index', {
   title: 'Homepage',
   people: people.profiles // Leggo dalla variabile "people" il vettore "profiles" 
                           // e lo passo alla pagina "index.pug"
 });
});

app.get('/profile', (req, res) => {
  const person = people.profiles.find((p) => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});


app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
