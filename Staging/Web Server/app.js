//server setup -http
express = require('express')
const port = '443'
const app = express()


//server code for root
console.log('server online')
app.get('/', async (req, res) => {
        res.send('JOAT Web Server Root Directory')
      })



//Feature Flags
var FFJOATWebServer = '1'
var FFTemplate = '1'


//Joat Web Server

//check
app.get('/ff/JOATWS', async (req, res) => {
  if (req.Authorization = 'supersecreatpassword') {
      //authed
      res.send(FFJOATWebServer)
    } else {
      //auth incorrect
      res.status(401).send('ERROR 401 Authentication requiried')
    }})

//toggle
app.get('/ff/JOATWS/toggle', async (req, res) => {
  if (req.Authorization = 'supersecreatpassword') {
      //authed

      //toggle
       if (FFJOATWebServer = 1) {
          var FFJOATWebServer = '0'
          res.send(0)
       } else {
          var FFJOATWebServer = '1'
          res.send(1)
       }

     } else {
       //auth incorrect
      res.status(401).send('ERROR 401 Authentication requiried')
    }})


//Template

//check
app.get('/ff/template', async (req, res) => {
  if (FFJOATWebServer = '1') {
    if (req.Authorization = 'supersecreatpassword') {
      //authed
      res.send(FFTemplate)
    } else {
      //auth incorrect
      res.status(401).send('ERROR 401 Authentication requiried')
    }
  } else {
    res.status(503).send('Feature Flag for JOAT Web Server Disabled')
  }})

//toggle
app.get('/ff/template/toggle', async (req, res) => {
  if (FFJOATWebServer = '1') {
    if (req.Authorization = 'supersecreatpassword') {
      //authed

      //toggle
       if (FFTemplate = 1) {
          var FFTemplate = '0'
          res.send(0)
       } else {
          var FFTemplate = '1'
          res.send(1)
       }
       
     } else {
       //auth incorrect
      res.status(401).send('ERROR 401 Authentication requiried')
    }
  } else {
    res.status(503).send('Feature Flag for JOAT Web Server Disabled')
  }})


app.listen(port)
console.log('SERVER ONLINE')