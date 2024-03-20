const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: "You do not have permission to perform this action" });
    }
  };
  
  module.exports = isAdmin;
  