const app = require('./server/config/express'),
    http = require('http').Server(app),
    db = require('./server/config/database')();

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
