/**
鲨鱼记账VIP
^https://api.shayujizhang.com/account/grant/detail/info url script_response_url shayujizhang.js
api.shayujizhang.com
*/

var body = $response.body;
var url = $request.url;

const path = "/account/grant/detail/info";

if(url.indexOf(path) != -1){
    
	let obj = JSON.parse(body);
	obj.data.vip.isvip = 1;
     obj.data.vip.days = 99999;
	body = JSON.stringify(obj);
}

$done({body});
