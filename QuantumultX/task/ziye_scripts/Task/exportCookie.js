/* ziye  导出ck专用    务必下载或者复制到本地使用

github地址 https://github.com/ziye66666
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/ziye66666/JavaScript/main/Task/ziye.boxjs.json


转载请备注个名字，谢谢



*/

//填写账号数，
const Count=5

let K = 1;//从哪个账号开始

let Z = 5;//到哪个账号结束

const GG=''//默认为换行，也可以将需要隔开的符号填写在''内


//填写你要打印的ck名字，去js里获取ck处看 如$.setdata(refreshtokenVal, "refreshtoken" + $.idx);   则在''中填写refreshtoken

const jsA='refreshtoken'
const jsB=''
const jsC=''
const jsD=''
const jsE=''
const jsF=''
const jsG=''
const jsH=''
const jsI=''
const jsJ=''
const jsK=''
const jsL=''

//开启打印则设置为1

const jsAA=1  
const jsBB=0  
const jsCC=0  
const jsDD=0  
const jsEE=0  
const jsFF=0  
const jsGG=0  
const jsHH=0  
const jsII=0  
const jsJJ=0  
const jsKK=0  
const jsLL=0 















//⚠️⚠️⚠️下面内容不要随意改动



const $ = Env("Cookie导出");
let R=K
const jsAArr = [];
let jsAVal = ``;
const jsBArr = [];
let jsBVal = ``;
const jsCArr = [];
let jsCVal = ``;
const jsDArr = [];
let jsDVal = ``;
const jsEArr = [];
let jsEVal = ``;
const jsFArr = [];
let jsFVal = ``;
const jsGArr = [];
let jsGVal = ``;
const jsHArr = [];
let jsHVal = ``;
const jsIArr = [];
let jsIVal = ``;
const jsJArr = [];
let jsJVal = ``;
const jsKArr = [];
let jsKVal = ``;
const jsLArr = [];
let jsLVal = ``;
		jsAArr.push($.getdata(`${jsA}`));
		jsBArr.push($.getdata(`${jsB}`));
		jsCArr.push($.getdata(`${jsC}`));
		jsDArr.push($.getdata(`${jsD}`));
		jsEArr.push($.getdata(`${jsE}`));
		jsFArr.push($.getdata(`${jsF}`));
		jsGArr.push($.getdata(`${jsG}`));
		jsHArr.push($.getdata(`${jsH}`));
		jsIArr.push($.getdata(`${jsI}`));
		jsJArr.push($.getdata(`${jsJ}`));
		jsKArr.push($.getdata(`${jsK}`));
		jsLArr.push($.getdata(`${jsL}`));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        for (let i = 2; i <= Count; i++) {
            if ($.getdata(`${jsA+i}`)) {
				jsAArr.push($.getdata(`${jsA+i}`));
				jsBArr.push($.getdata(`${jsB+i}`));
				jsCArr.push($.getdata(`${jsC+i}`));
				jsDArr.push($.getdata(`${jsD+i}`));
				jsEArr.push($.getdata(`${jsE+i}`));
				jsFArr.push($.getdata(`${jsF+i}`));
				jsGArr.push($.getdata(`${jsG+i}`));
				jsHArr.push($.getdata(`${jsH+i}`));
				jsIArr.push($.getdata(`${jsI+i}`));
				jsJArr.push($.getdata(`${jsJ+i}`));
				jsKArr.push($.getdata(`${jsK+i}`));
				jsLArr.push($.getdata(`${jsL+i}`));
    }
  }
  console.log(
    `============ 脚本执行-北京时间(UTC+8)：${new Date(
      new Date().getTime() + 8 * 60 * 60 * 1000
    ).toLocaleString()}  =============\n`
  );
if (Z<K){
    $.msg('⚠️提示：请不要调皮🐶')
   $.done();
}
all();
function all() {
if (!jsAArr[K-1]) {
if (K>R)
    $.msg($.name+R+'到'+(K-1)+'打印成功'+K+'到'+Z+'打印失败', '⚠️提示：请先获取'+K+'到'+Z+'的ck','并设置好账号数')
if (K==R&&Z>R)
    $.msg($.name+K+'到'+Z+'打印失败', '⚠️提示：请先获取'+K+'到'+Z+'的ck','并设置好账号数')
if (Z==R)
    $.msg($.name+K+'打印失败', '⚠️提示：请先获取'+K+'的ck','并设置好账号数')
   $.done();
  }
  jsAVal = jsAArr[K-1];  
  jsBVal = jsBArr[K-1];  
  jsCVal = jsCArr[K-1];  
  jsDVal = jsDArr[K-1];  
  jsEVal = jsEArr[K-1];  
  jsFVal = jsFArr[K-1];  
  jsGVal = jsGArr[K-1];  
  jsHVal = jsHArr[K-1];  
  jsIVal = jsIArr[K-1];  
  jsJVal = jsJArr[K-1];  
  jsKVal = jsKArr[K-1];  
  jsLVal = jsLArr[K-1]; 
if(jsAA==1)console.log(jsAVal+GG)
if(jsBB==1)console.log(jsBVal+GG)
if(jsCC==1)console.log(jsCVal+GG)
if(jsDD==1)console.log(jsDVal+GG)
if(jsEE==1)console.log(jsEVal+GG)
if(jsFF==1)console.log(jsFVal+GG)
if(jsGG==1)console.log(jsGVal+GG)
if(jsHH==1)console.log(jsHVal+GG)
if(jsII==1)console.log(jsIVal+GG)
if(jsJJ==1)console.log(jsJVal+GG)
if(jsKK==1)console.log(jsKVal+GG)
if(jsLL==1)console.log(jsLVal+GG)
  for (let i = 0; i < 1; i++) {
    (function (i) {
      setTimeout(
        function () {
      if (i == 0){  
       if ( K < Z ) {
              K += 1;
              all();
}    else if (K == Z ) {
          let F=Z-R+1
              $.msg($.name+R+'到'+Z+',ck打印成功','✅已打印'+F+'个ck',)
              $.done();
  }
 }
},
        (i + 1) * 10
      );
    })(i);
  }
}
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
