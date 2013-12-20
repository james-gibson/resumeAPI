exports.getToken = getToken;

function getToken(user,key) {
	if(user == "KurtEricson" && key =="ClinicalKnowledge") {
		return "AgileMD";
	}  else {
		return undefined;
	}

}