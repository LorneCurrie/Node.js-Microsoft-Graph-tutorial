module.exports = (req, res, next) => {
  res.locals.error = req.flash('error_msg');

  const errs = req.flash('error');
  for (const i in errs) {
    res.local.error.push({message: 'An error occurred', debug: errs[i]});
  }

  next();
};
