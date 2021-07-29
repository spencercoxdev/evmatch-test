const { CHARGERS } = require('../mock/chargers');

const getChargers = (req, res) => {
  return res.status(200).json(CHARGERS);
};

module.exports = {
  getChargers
};
