var fs = require('fs');
var apiModel = require('../models/ApiModel.js');
var resumeModel = require('../models/ResumeModel.js');

exports.getSummary = summary;
exports.getSocial = social;
exports.getEmployment = employment;
exports.getProfessional = professional;
exports.getResume = resume;
exports.getEducation = education;

apiModel.routes.push("api/summary");
function summary(req,res) {
	resumeModel.summary(function(err,data) {
		return res.json(data);
	})
}

apiModel.routes.push("api/employment");
function employment(req,res) {
	resumeModel.employment(function(err,data) {
		return res.json(data);
	})
}

apiModel.routes.push("api/education");
function education(req,res) {
	resumeModel.education(function(err,data) {
		return res.json(data);
	})
}

apiModel.routes.push("api/social");
function social(req,res) {
	resumeModel.social(function(err,data) {
		return res.json(data);
	})
}

apiModel.routes.push("api/professional");
function professional(req,res) {
	resumeModel.professional(function(err,data) {
		return res.json(data);
	})
}

apiModel.routes.push("api/resume");
function resume(req,res) {
	resumeModel.resume(function(err,data) {
		return res.json(data);
	})
}