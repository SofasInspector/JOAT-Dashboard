//server setup -http
express = require('express')
const port = '443'
const app = express()
const cors = require('cors');
app.use(cors({
  origin: '*'
}));

//server code for root
console.log('server online')
app.get('/', async (req, res) => {
    res.send('JOAT Web Server Root Directory')
  })



//Feature Flags
var FFJOATWebServer = '0'
var FFTemplate = '0'


//Joat Web Server

//check
app.get('/ff/JOATWS', async (req, res) => {
  if (req.Authorization = 'supersecreatpassword') {
    //authed
    res.send(FFJOATWebServer)
  } else {
    res.send('ERROR 401 Authentication requiried')
  }})

//toggle
app.get('/ff/JOATWS/toggle', async (req, res) => {
  if (req.Authorization = 'supersecreatpassword') {
      if (FFJOATWebServer == '1') {
        FFJOATWebServer = '0'
        res.send('0')
      } else {
        FFJOATWebServer = '1'
        res.send('1')
      }
      console.log('JOATWS Toggled')
    } else {
    res.send('ERROR 401 Authentication requiried')
  }})


//Template

//check
app.get('/ff/template', async (req, res) => {
  if (FFJOATWebServer == 1) {
    if (req.Authorization = 'supersecreatpassword') {
      res.send(FFTemplate)
    } else {
      res.send('ERROR 401 Authentication requiried')
    }
  } else {
    res.send('FF for toggles disabled')
  }})


//toggle
app.get('/ff/template/toggle', async (req, res) => {
  if (FFJOATWebServer == 1) {
    if (req.Authorization = 'supersecreatpassword') {
      if (FFTemplate == '1') {
        FFTemplate = '0'
        res.send('0')
      } else {
        FFTemplate = '1'
        res.send('1')
      }
      console.log('template Toggled')
    } else {
      res.send('ERROR 401 Authentication requiried')
    }
  } else {
    res.send('FF for toggles disabled')
  }
})


app.listen(port)
console.log('SERVER ONLINE')