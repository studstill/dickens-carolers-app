var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var songList = require('./data/song-list');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/file/:name', function(req, res, next) {

  var options = {
    root: __dirname + '/public/lib/sounds',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name + '.mp3';
  res.sendFile(fileName, options, function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

});

app.get('/song-list', function(req, res) {
  res.json(songList);
});

app.listen(port, function() {
  console.log('Server is now listening on port ' + port);
});



