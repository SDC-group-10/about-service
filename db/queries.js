const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
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
    // console.log('HOSTINFO', res.rows[0]);
    callback(null, res.rows[0]);
  });
};

const reviewsForHost = (id, callback) => {
  const theQuery = 'select * from reviews where user_id = $1';
  pool.query(theQuery, [id], (err, res) => {
    if (err) {
      throw err;
    }
    // console.log('REVIEWSFORHOST', res.rows[0]);
    callback(null, res.rows.length);
  });
};

const neighborhoodInfo = (id, callback) => {
  const theQuery = 'select * from listings where id = $1';
  pool.query(theQuery, [id], (err, res) => {
    if (err) {
      throw err;
    }
    // console.log('NEIGHBORHOOD', res.rows[0]);
    callback(null, res.rows[0]);
  });
};

module.exports = {
  selectHostInfo, reviewsForHost, neighborhoodInfo,
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
