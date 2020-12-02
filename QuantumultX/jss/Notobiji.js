/**
Noto笔记VIP
^https://api.revenuecat.com/v1/subscribers/$RCAnonymousID:5958c79bfcf04c55b0561eb7d608328e url script-response-body https://raw.githubusercontent.com/Wizardp007/Scripts/main/QuantumultX/jss/Notobiji.js
api.revenuecat.com
*/

var body = $response.body;
var url  = $request.url;
const path = "v1/subscribers/$RCAnonymousID:5958c79bfcf04c55b0561eb7d608328e";

if (url.indexOf(path) != -1) {
	var obj = JSON.parse(body);
	obj.subscriber.entitlements.pro.expires_date = "2021-12-05T06:15:03Z";
	obj.subscriber.entitlements.pro.product_identifier = "com.lkzhao.editor.pro.ios.yearly";
	obj.subscriber.subscriptions.com.lkzhao.editor.pro.ios.yearly.expires_date = "2021-12-05T06:15:03Z";
//	obj.subscriber.subscriptions.com.lkzhao.editor.pro.ios.yearly.period_type = "trial";
}

body = JSON.stringify(obj);
$done({body})	
