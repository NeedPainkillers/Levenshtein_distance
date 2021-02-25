const natural = require('natural');

module.exports = {
  name: 'natural',
  callback: (req, res) => {
    const { a, b } = req.query;

    const distance = natural.LevenshteinDistance(a, b);
    res.body = distance.toString();
    res.send(res.body);
  },
};
