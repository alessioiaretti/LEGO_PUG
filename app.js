var express = require('express');
const lego = require('./lego.json'); // Copia il file people.json dentro la variabile people

var app = express();
app.set('view engine', 'pug');   // Dico a express di usare pug come motore di template e quindi andare 
                                 // nella cartella "views" e usarla come cartella principale 
                                 // per trovare le pagine con estensione "pug"

app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici come 
                                                // fogli di stile e immagini

app.get('/', function (req, res) {
  res.render('index', {
   title: 'L E G O',
   testa: 'SCEGLI IL TUO CASTELLO',
   scatole: lego.confezioni // Leggo dalla variabile "lego" il vettore "scatole" 
                                  // e lo passo alla pagina "index.pug"
 });
});

app.get('/istruzioni', (req, res) => {
  const istruzione = lego.confezioni.find((p) => p.id === req.query.id);
  res.render('istruzioni', {
    title: `About ${istruzione.Name}`,
    istruzione,
  });
});


app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
