const levenshtein = require('talisman/metrics/levenshtein');

module.exports = {
  name: 'talisman',
  callback: (req, res) => {
    const { a, b } = req.query;

    const distance = levenshtein(a, b);
    res.body = distance.toString();
    res.send(res.body);
  },
};
