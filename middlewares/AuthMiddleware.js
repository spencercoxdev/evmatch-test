const authenticate = (req, res, next) => {
  if (req.headers.authorization === process.env.SECRET) {
    return next();
  }
  return res.status(401).json('Unauthorized');
};

module.exports = {
  authenticate
};
