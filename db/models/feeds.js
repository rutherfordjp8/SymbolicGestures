const db = require('../');

const Feed = db.Model.extend({
  tableName: 'feed_messages',
  hasTimestamps: true,
  feed: function() {
    return this.belongsTo('Feed');
  }
});

module.exports = db.model('Feed', Feed);
