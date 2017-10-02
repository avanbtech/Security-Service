

exports.request_post = function(req, res, next) {
  console.log(req.body);
  
  res.redirect('/');
};
