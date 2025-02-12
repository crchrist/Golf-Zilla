require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash');
const session = require('express-session')
const passport = require('./config/ppConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const { default: axios } = require('axios');
const db = require('./models');

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const SECRET_SESSION = process.env.SECRET_SESSION;

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}))

app.use(flash());
app.use(passport.initialize());      // Initialize passport
app.use(passport.session());         // Add a session

app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
})

// app.use(passport.initialize());      // Initialize passport
// app.use(passport.session());         // Add a session


app.get('/', (req, res) => {
  res.render('index');
});

// app.get('/profile', (req, res) => {
//   res.render('profile');
// });

app.use('/auth', require('./controllers/auth'));


app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get();
  res.render('profile', { id, name, email });
});

app.get('/rickandmorty', (req, res) => {
axios.get('https://rickandmortyapi.com/api/character')
.then(function(response){
  console.log(response.data)
  const characters = response.data.results;
  console.log(typeof characters)
  res.render('characterList', {characters: characters}
  )
})
})

app.post('/characterSearch', (req, res) => {
  axios.get(`https://rickandmortyapi.com/api/character/?name=${req.body.characterName}`)
  .then(function(response){
  const characterSearch = response.data.results;
    res.render('characterSearch', {characterSearch})
  })

})

app.post('/favorite', (req, res) => {
console.log(req.body)
db.favoritesList.create({
  name: req.body.name,
  species:req.body.species,
  status: req.body.status,
  image: req.body.image
})
.then(results => {
  console.log(results)
  })

  .catch(error => {
    console.error(error);
})
res.redirect('/favorites')
})

app.get('/favorites', (req, res) => {
  db.favoritesList.findAll().then((results)=>{
    res.render('favoritesList', {favorite: results})
  })
})

app.delete('/favorites/:id', (req, res)=> {
  db.favoritesList.destroy({where: {
    id: req.params.id
  }})
  .then(deletedFav=>{
    console.log(deletedFav)
    res.redirect('/favorites')
  })
  console.log(req.params.id)
}) 

app.put('/favorites/:id', (req, res)=> {
  db.favoritesList.update ({
    status: 'Dead'
  },{
    where: {
      id: req.params.id
  }})
  .then(numRowsChanged=>{
    console.log(numRowsChanged)
    res.redirect('/favorites')
})
})

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;