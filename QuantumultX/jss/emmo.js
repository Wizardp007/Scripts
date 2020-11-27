/*
EMMO 解锁VIP
^http://106.54.2.168/emmoDiary/user/getUser url script-response-body https://raw.githubusercontent.com/Wizardp007/Scripts/main/QuantumultX/jss/emmo.js
hostname = 106.54.2.168
*/

var body = $response.body;

let obj = JSON.parse(body);

	obj.data.user["isLifeVip"] = "1",
	obj.data.user["isVip"] = "1",
	obj.data.user["isApplePurchase"] = true,
	obj.data.user["vipEndTime"] = "2099-11-16",

body = JSON.stringify(obj);


$done({body});
