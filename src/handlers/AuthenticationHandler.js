var fs = require('fs');

exports.authenticate = authenticate;


function authenticate(req,res) {
	res.redirect(307,'/api?token=' + req.token)
	//res.send({token: req.token,expires:1418883247, stats:'/stats?token='+req.token});
}

