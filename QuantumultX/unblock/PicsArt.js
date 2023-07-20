/*
PicsArt 解锁高级功能

***************************
QuantumultX:

[rewrite_local]
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js

[mitm]
hostname = api.picsart.c*, api.meiease.c*

***************************
Surge4 or Loon:

[Script]
http-response https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js

[MITM]
hostname = api.picsart.c*, api.meiease.c*

**************************/

//let obj = JSON.parse($response.body);
//obj.subscription.granted = "true";
//$done({body: JSON.stringify(obj)});

var chxm1023={"warning":"仅供学习","tgchannel":"https://t.me/chxm1023","feedback":"chxm1023","status":"success","reason":"ok","response":{"purchase_date":1645263154000,"expire_date":4092599350000,"app":"com.picsart.editor","subscription_id":"com.picsart.editor.subscription_yearly","order_id":"300001048350229","original_order_id":"600001048350229","status":"SUBSCRIPTION_PURCHASED","is_trial":true,"winback_screen_id":1,"is_eligible_for_introductory":false,"plan_meta":{},"limitation":{"max_count":1000,"limits_exceeded":false},"is_eligible_for_grant":true}}

$done({body: JSON.stringify(chxm1023)});
