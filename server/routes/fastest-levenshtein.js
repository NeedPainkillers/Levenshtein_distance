const levenshtein = require('fastest-levenshtein');

module.exports = {
  name: 'fastest-levenshtein',
  callback: (req, res) => {
    const { a, b } = req.query;

    const distance = levenshtein.distance(a, b);
    res.body = distance.toString();
    res.send(res.body);
  },
};
