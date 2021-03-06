exports.getToken = getToken;
exports.validateToken = validateToken;

var tokens = validTokens();

function getToken(user,key) {
	if(user == "KurtEricson" && key =="ClinicalKnowledge") {
		return "AgileMD";
	}  else if (user == "GISI" && key =="Indoors") {
        return "ServiceExcellence";
    } else if (user == "Kevin" && key =="Owocki") {
        return "SimpleEnergy";
    } else if (user == "Craftsman" && key =="Software") {
        return "kohactive";
    } else {
		return undefined;
	}
}

function validTokens() {
    return ["AgileMD","ServiceExcellence","SimpleEnergy", "kohactive"]
}

function validateToken(token) {
    var containsToken = false;
    tokens.forEach(function(value){
        if (value === token) {
            containsToken = true;
        }
    });
    return containsToken;
}