const { Router } = require('express');
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express(); 


// set the view engine to ejs
app.set('view engine', 'ejs');
const url = "https://chipr.api.fdnd.nl/v1/project"
app.use(express.static(__dirname + '/public'));


app.get("/", (request, response) => {
     //1. Fetch projects from chippr API
     fetch(url)
     .then(response => response.json())
     .then(projects => {
          //2. Render results in Html
          console.log(projects)
          response.render('index', {projects: projects.data})
     })
     .catch(err => console.log(err))

});

app.get("/:id", (request, response) => {
     fetch(url)
     .then(response => response.json())
     .then(projects => {
          //2. Render results in Html
          console.log(projects)
          response.render('detail', {projects: projects.data[0],
          })
     })
     .catch(err => console.log(err))

});

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost:3000`)) 



