/*
SmartGym 解锁订阅
^https://www.smartgymapp.com/v1.1/user/info url script-response-body SmartGym.js
hostname = smartgymapp.com
*/

var body = $response.body;

let obj = JSON.parse(body);

	obj.subscription["latestExpiresDate"] = "2022-06-13 01:52:14",
	obj.subscription["cancellationDate"] = null,
	obj.subscription["isBillingRetry"] = "0",
	obj.subscription["autoRenewStatus"] = "1",
	obj.subscription["productID"] = "com.smartgymapp.smartgym.premiumuserworkoutsyearly",
	obj.subscription["isPersonalStudent"] = false,


body = JSON.stringify(obj);


$done({body});
