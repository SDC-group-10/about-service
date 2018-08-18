const siege = require('siege');

const go = siege().on(3001);


for (let i = 10000000; i < 12000000; i += 50) {
  var hosts = go.get(`/api/about/hosts/${i}`).for(1).times;
  var reviews = go.get(`/api/about/reviews/${i}`).for(1).times;
  var hood = go.get(`/api/about/neighborhood/${i}`).for(1).times;
  var post = go.post('/api/about/post', { name: 'stresstest' }).for(1).times
}

hosts.attack();
reviews.attack();
hood.attack();
post.attack();
