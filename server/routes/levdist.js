const levdist = require('levdist');

module.exports = {
  name: 'levdist',
  callback: (req, res) => {
    const { a, b } = req.query;

    const distance = levdist(a, b);
    res.body = distance.toString();
    res.send(res.body);
  },
};
