const levenshtein = require('levenshtein-sse');

module.exports = {
  name: 'levenshtein-sse',
  callback: (req, res) => {
    const { a, b } = req.query;

    const distance = levenshtein(a, b);
    res.body = distance.toString();
    res.send(res.body);
  },
};
