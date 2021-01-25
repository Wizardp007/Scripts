/*
CamScanner unlocks pro, Cloud scanning is not available.

QuanX 1.0.0:  [rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

QX & Q & Surge Mitm = ap*.intsig.net,
*/

let obj = JSON.parse($response.body);
		obj.data.psnl_vip_property.psnl_vip_property.auto_renewal = true
		obj.data.psnl_vip_property.psnl_vip_property.nxt_renew_tm = "1738425600"
		obj.data.psnl_vip_property.psnl_vip_property.expiry = "1738425600"
$done({body: JSON.stringify(obj)});