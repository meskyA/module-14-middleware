const withAuth = (req, res, next) => {
  // TODO: If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    return res.redirect('/login');
  }
  // TODO: If the user is logged in, allow them to view the paintings(middleware)
  next();
};

module.exports = withAuth;
