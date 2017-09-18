const models = require('../../db/models');
const bookshelf = require('../../db');

const stream = require('getstream');
const config = require('config')['stream']
let client = stream.connect(config.streamKey, config.streamSecret , config.streamId);
// newFeed = client.feed('user', '1', config.streamSecret);

// client = stream.connect('5rmr68hvwwfx', null, '28988');
module.exports.feedAdd = (req, res) => {
  let feedInfo = req.body;
  let user = req.user;
  let newFeed = client.feed('profile', user.id);
  bookshelf.transaction((t) => {
    return models.Feed.forge().save({
      message_type: feedInfo.message_type,
      message: feedInfo.message,
      message_id: feedInfo.message_id,
      organization_id: user.organization_id,
      profile_id: user.id
    })
    .then(feedMessage => {
      console.log(feedMessage.attributes)
      return newFeed.addActivity({
        actor: user.display,
        verb: feedMessage.attributes.message_type,
        object: `message:${feedMessage.attributes.id}`,
        foreign_id: `message:${feedMessage.attributes.id}`,
        time: feedMessage.attributes.created_at,
        image_link: user.image_link,
        message_type: feedMessage.attributes.message_type,
        message: feedMessage.attributes.message,
        to: [`organization_feed:${user.organization_id}`],
      })
    })
  })
  .then(data => {
    res.status(200).send(data)
  }).catch(err=>{
    res.status(503).send(err)})
}

module.exports.feedGet = (req, res) => {
  let newFeed = client.feed('organization_feed', req.user.organization_id);
  // newFeed.follow('organization_feed', req.user.organization_id);
  newFeed.get({limit:10})
    .then(results => {
      console.log(results.results[0].activities)
      res.status(200).send(results)
    })
    .catch(err=> {
      res.status(503).send(err)
    })
}
