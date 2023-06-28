var express = require('express')
    , bodyParser = require('body-parser')
    , chalk = require('chalk')
    , cors = require('cors')
    , app = express()
    , directoriesRouter = require('./routes/directories')
    , noticesRouter = require('./routes/notices')
    , loginRouter = require('./routes/login')

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: 'public'})
})

app.use('/directories', directoriesRouter)
app.use('/notices', noticesRouter)
app.use('/login', loginRouter);

var server = app.listen(3001, function () {
    var port = server.address().port
    console.log('Server for course started at %s port', chalk.green(port))
})
