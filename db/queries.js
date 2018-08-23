const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '54.67.98.84',
  port: '5432',
  database: 'rental_hosts',
  password: 'asdf1234',
});

pool.connect();

const selectHostInfo = (id, callback) => {
  const theQuery = 'select * from hosts where id = $1';
  pool.query(theQuery, [id], (err, res) => {
    if (err) {
      throw err;
    }
    callback(null, res.rows[0]);
  });
};

const reviewsForHost = (id, callback) => {
  const theQuery = 'select * from reviews where user_id = $1';
  pool.query(theQuery, [id], (err, res) => {
    if (err) {
      throw err;
    }
    callback(null, res.rows.length);
  });
};

const neighborhoodInfo = (id, callback) => {
  const theQuery = 'select * from listings where id = $1';
  pool.query(theQuery, [id], (err, res) => {
    if (err) {
      throw err;
    }
    callback(null, res.rows[0]);
  });
};

const postList = (name, callback) => {
  const theQuery = 'insert into listings(name) values($1)';
  pool.query(theQuery, [name], (err, res) => {
    if (err) {
      throw err;
    }
    callback(null, res.rows[0]);
  });
};

module.exports = {
  selectHostInfo, reviewsForHost, neighborhoodInfo, postList
};

// selectHostInfo();
// reviewsForHost((err, result) => {
//   console.log(result.length);
// });

// neighborhoodInfo(56, (err, result)=> {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });
