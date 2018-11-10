"use strict";

let express = require('express');

const PORT =process.env.PORT || 9999

let app = express();
app.get('/', function (req, res , next) {
  console.log('User-Agent: ' + req.headers['user-agent']);
  next();
});

app.use(express.static(__dirname + '/dist'));


app.listen(PORT, function () {
  console.log(`Hello from KURRO driver-tracking  server ! App listening on port ${PORT}!`)
});
