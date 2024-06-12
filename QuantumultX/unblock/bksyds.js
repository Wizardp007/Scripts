var body = $response.body; 
var obj = JSON.parse(body); 

obj.result.isVip=1;

body = JSON.stringify(obj); 
$done(body); 
