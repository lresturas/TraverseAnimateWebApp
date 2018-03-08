const express = require('express')
const app = express()
const path = require('path')

const birds = require('./routes/birds')
const mw = require('./routes/my-middleware')

var cb0 = function(req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function(req, res, next) {
  console.log('CB1')
  next()
}

var myLogger = function(req, res, next) {
  console.log('LOGGED')
  next()
}

var requestTime = function(req, res, next) {
  req.requestTime = Date.now()
  next()
}

//app.use(express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

/*
app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
*/

app.use(myLogger)
app.use(requestTime)
app.use(mw({option:'1',option:'2'}))

app.use('/birds', birds)

app.use('/user/:id', function(req, res, next) {
  console.log('Request URL: ', req.originalUrl)
  next()
}, function(req, res, next) {
  console.log('Request Type:', req.method)
  next()
}, function(req, res){
  res.send(req.params)
})

app.get('/', function(req, res) {
  //res.send('GET request to the homepage')
  //let responseText = 'Hello World<br/'
  //responseText += '<small>Request at ' + req.requestTime + ' </small>'
  //res.send(responseText)
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get('/about', function(req, res) {
  res.send('About page response')
})

app.get('/example/d', cb0, cb1, function(req, res, next) {
  console.log('The repsonse will be sent by the next function ...')
  next()
}, function(req, res) {
  //res.redirect('/')
  res.send('Hello from D!')
})

app.route('/book')
  .get(function(req, res){
    res.send('Get a random book')
  })
  .post(function(req, res) {
    res.send('Add a book')
  })
  .put(function(req, res) {
    res.send('Update the book')
  })

app.get('/random.text', function(req, res) {
  res.send('Random.text page response')
})

app.get('/users/:userId-:membershipId/books/:bookId.:serialId', function(req, res) {
  res.send("The URL parameters are <br />" + "User Id: " + req.params.userId + "<br />" + "Book Id: " + req.params.bookId + "Membership Id: " + req.params.membershipId + "<br />" + "Serial Id: " + req.params.serialId)
})

app.post('/', function(req, res) {
  app.send('POST request to the homepage')
})

app.all('/secrets', function(req, res, next) {
  console.log('Accessing the secret section ...')
  next()
})

app.put('/user', function(req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function(req, res) {
  res.send('Got a DELETE request on /user')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
