const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express(); 
// set the view engine to ejs
app.set('view engine', 'ejs');
const url = "https://chipr.api.fdnd.nl/v1/project"

app.get("/projects", (request, response) => {
     //1. Fetch projects from chippr API
     fetch(url)
     .then(response => response.json())
     .then(projects => {
          //2. Render results in Html
          console.log(projects)
          response.render('projects', {projects: projects.data})
     })
     .catch(err => console.log(err))

});

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost:3000`)) 





