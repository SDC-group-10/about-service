const siege = require('siege');

const go = siege().on(3001);


for (let i = 11000000; i < 12000000; i += 500) {
  var hosts = go.get(`/api/about/hosts/${i}`).for(1).times;
  var reviews = go.get(`/api/about/reviews/${i}`).for(1).times;
  var hood = go.get(`/api/about/neighborhood/${i}`).for(1).times;
  var post = go.post('/api/about/post', { name: 'stresstest' }).for(1).times
}

hosts.concurrent(50).attack();
reviews.concurrent(50).attack();
hood.concurrent(50).attack();
post.concurrent(50).attack();
