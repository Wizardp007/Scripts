/**
Noto笔记VIP （未完成）
^https://api.revenuecat.com/v1/subscribers/$RCAnonymousID:5958c79bfcf04c55b0561eb7d608328e url script-response-body https://raw.githubusercontent.com/Wizardp007/Scripts/main/QuantumultX/jss/Notobiji.js
api.revenuecat.com
*/

var body = $response.body;
var url  = $request.url;
const path = "v1/subscribers/$RCAnonymousID:5958c79bfcf04c55b0561eb7d608328e";

console.log(body);
var obj = JSON.parse(body);

if(obj["subscriber"]!=null){
	obj.subscriber.entitlements.pro.expires_date = "2021-01-09T06:15:03Z";
	obj.subscriber.entitlements.pro.product_identifier = "com.lkzhao.editor.pro.ios.monthly";
	obj.subscriber.subscriptions.com.lkzhao.editor.pro.ios.monthly.expires_date = "2021-01-09T06:15:03Z";
	obj.subscriber.subscriptions.com.lkzhao.editor.pro.ios.monthly.period_type = "offer";

    console.log("修改后： "+body);
}



body = JSON.stringify(obj);
$done({body})	
