var fs = require('fs');
var config = require('../config.json');
var apiModel = require('../models/ApiModel.js');

var apiRoutes = apiModel.routes;

exports.currentVersion = currentVersion;
exports.getRoutes = getRoutes;


function currentVersion(req,res) {
	var obj = {
		version:"0.1",
		about:"This API exists as a description of James Gibson and his skills",
		why:"PDF's are so 2001",
		authentication: {URL:config.host +"api/authenticate",queryParameters:["user","key"]}
	};
	res.json(obj);
}

function getRoutes(req,res) {
	var urls = [];
	function convertRouteToUrl(index) {
		 if(index == apiRoutes.length) {
			 res.json(urls);
			 return;
		 }
		 urls.push(config.host+apiRoutes[index]+"?token="+req.token);
		index++
		convertRouteToUrl(index);
	}

	convertRouteToUrl(0);

}