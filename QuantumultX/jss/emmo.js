/*
EMMO 解锁VIP
*/

var body = $response.body;

let obj = JSON.parse(body);

	obj.data.user["isLifeVip"] = "1",
	obj.data.user["isVip"] = "1",
	obj.data.user["isApplePurchase"] = true,
	obj.data.user["vipEndTime"] = "2099-11-16",

body = JSON.stringify(obj);


$done({body});
