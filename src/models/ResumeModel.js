var fs = require('fs');
var resumeData = require('../resume.json');

exports.summary = summary;
exports.social = social;
exports.employment = employment;
exports.professional = professional;
exports.education = education;
exports.resume = resume;

function summary(callback) {
	return callback(undefined,resumeData.summary);
}

function employment(callback) {
	return callback(undefined,resumeData.employment);
}

function social(callback) {
	return callback(undefined,resumeData.social);
}

function professional(callback) {
	var professional = {
        "OSS":resumeData.professional,
        "Personal Projects":resumeData.personal,
        "Closed Source": resumeData.employment.GISi.projects
    };
	return callback(undefined,professional);
}

function education(callback) {
	return callback(undefined,resumeData.education);
}

function resume(callback) {
	return callback(undefined,resumeData);
}
