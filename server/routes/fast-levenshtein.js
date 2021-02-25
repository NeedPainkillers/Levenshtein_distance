const levenshtein = require('fast-levenshtein');

module.exports = {
  name: 'fast-levenshtein',
  callback: (req, res) => {
    const { a, b } = req.query;
    
    const distance = levenshtein.get(a, b);
    res.body = distance.toString();
    res.send(res.body);
  },
};
