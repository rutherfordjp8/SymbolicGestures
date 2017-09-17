const stream = require('getstream');
const config = require('config')['stream']
let client = stream.connect(config.streamKey, config.streamSecret , config.streamId);
let newFeed = client.feed('connect_stream', 'jykim16');
// newFeed = client.feed('user', '1', config.streamSecret);
newFeed.follow('connect_stream', 'jykim16');

// client = stream.connect('5rmr68hvwwfx', null, '28988');
module.exports.feedAdd = (req, res) => {
  newFeed.addActivity({
  actor: 'jykim16',
  verb: 'got',
  object: 'job',
  foreign_id: 'picture:10',
  message: 'Jonathan Got a job.'
  }).then(data => {
    console.log('config', config)
    res.status(200).send(data)
  }).catch(err=>{
    res.status(500).send(err)})
}

module.exports.feedGet = (req, res) => {
  newFeed.get({limit:10})
    .then(results => {
      console.log(results.results[0].activities)
      res.status(200).send(results)
    })
    .catch(err=> {
      res.status(500).send(err)
    })
}
