require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const redis = require('redis');
// need to create a file to select data
const db = require('../db/queries.js');

const app = express();
const client = redis.createClient();

// to parse our data and use req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/about/hosts/:id', (req, res) => {
  client.get(+req.params.id, (err1, result1) => {
    if (result1) {
      res.send(result1);
    } else {
      db.selectHostInfo(+req.params.id, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          client.setex(+req.params.id, 6379, JSON.stringify(result));
          res.send(JSON.stringify(result));
        }
      });
    }
  });
});

app.get('/api/about/reviews/:listingId', (req, res) => {
  client.get(+req.params.id, (err1, result1) => {
    if (result1) {
      res.send(result1);
    } else {
      db.reviewsForHost(+req.params.listingId, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          client.setex(+req.params.id, 6379, JSON.stringify(result));
          res.send(JSON.stringify(result));
        }
      });
    }
  });
});

app.get('/api/about/neighborhood/:listingId', (req, res) => {
  client.get(+req.params.id, (err1, result1) => {
    if (result1) {
      res.send(result1);
    } else {
      db.neighborhoodInfo(+req.params.listingId, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          client.setex(+req.params.id, 6379, JSON.stringify(result));
          res.send(JSON.stringify(result));
        }
      });
    }
  });
});

app.post('/api/about/post', (req, res) => {
  const data = req.body.name;
  db.postList(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log('Server started on 3001');
});


// const express = require('express');
// const morgan = require('morgan');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 3002;
//
// app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, '../public')));
//
// app.listen(port, () => {
//   console.log(`server running at: http://localhost:${port}`);
// });
