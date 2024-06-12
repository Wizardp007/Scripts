var body = $response.body; 
var obj = JSON.parse(body); 
let url = $request.url;
const cons1= "https://photoby.hasmash.com/app/browseEvent";
const cons2= "https://photoby.hasmash.com/auth/member";

if(url === cons1){
  obj.result.isVip=1;
}

if(url === cons2){
  obj.result.memberExpire = 1907465936000;
}



body = JSON.stringify(obj); 
$done(body); 
