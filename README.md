# RICK AND MORTY FAVORITE CHARACTERS LIST

This application allows for a quick character search of 671 of the Rick and Morty Characters. Additionally, this application allows you to create a favorites list of the characters you selct so you can have all of your favorite characters in one place. 

### HOW TO CREATE A FAVORITES LIST

1. First you will need to sign up for an account using your email address, name, and password. To do so, click on the sign up button in the top right corner. 

2. Once you are signed up you can access the characters list. Scroll through the options available, or type in to the search bar to find a specific character you are looking for. 

3. Once you have located one of your favorite characters simply click on the 'Add to Favorites' button. Doing so will add this character to the favorites list for safe keeping. 

4. If your chracter dies throughout the show you can update their status by clicking the 'Change Status to Dead' button. 

### API USEAGE

To utilize the API used for this application go to:
 https://rickandmortyapi.com/documentation/#get-all-characters 
 Use the base URL provided, There is no API key needed. 

# HOMEPAGE:
<!-- Home page image go here  -->
![Startup-Image-1](https://github.com/crchrist/Rick-and-Morty/blob/main/Screen%20Shot%202021-05-23%20at%2010.43.42%20PM.png?raw=true)
<br>

# SIGNUP PAGE
<!-- Signup page image go here  -->

![Startup-Image-2](https://github.com/crchrist/Rick-and-Morty/blob/main/Screen%20Shot%202021-05-24%20at%206.28.49%20AM.png?raw=true)
<br>

# LOGIN PAGE
<!-- Login page image go here  -->

![Startup-Image-3](https://github.com/crchrist/Rick-and-Morty/blob/main/Screen%20Shot%202021-05-23%20at%2010.59.59%20PM.png?raw=true)
<br>

# CHARACTER SEARCH PAGE
<!-- Character search page image go here  -->
![Startup-Image-4](https://github.com/crchrist/Rick-and-Morty/blob/main/Screen%20Shot%202021-05-23%20at%2011.01.01%20PM.png?raw=true)


# TECHNOLOGIES USED
* Node
* Express 
* EJS 
* Passport and Bcrypt
* Sequelize
* CSS Bootstrap

# TO USE
1. Fork and Clone this respository to your local machine
2. Open the directory in your text editor of choice
3. Install dependencies and set up your database to work in your local port

## RETRIEVING THE API 

```js
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
```

## CREATING A FAVORITE

```js
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
```

## REMOVING A FAVORITE

```js
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
```

## UPDATING CHARACTER STATUS

```js
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
```


# ACCESS ONLINE
https://rmcharacters.herokuapp.com/



# Future Considerations
<br>
* Page layout with more characters available to scroll through. 
<br>
* Add page option, in order to scroll through characters by page. 
<br>
* Have search option available by list to have easier access to scroll through character names.  

