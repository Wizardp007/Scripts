/*
软件名称:蜗牛吧
下载链接https://raw.githubusercontent.com/age174/-/main/73DE034A-E0FA-4858-B10C-AE50CE82BAEA.jpeg
更新时间：2021-02-16 @肥皂
脚本说明：自动领取红包，领取广告金币

每天三毛 一元可提

使用方法: 首页点击一个红包领取获取数据


TG电报群: https://t.me/hahaha8028
注意:
蜗牛吧下载请复制下方链接下载

https://raw.githubusercontent.com/age174/-/main/73DE034A-E0FA-4858-B10C-AE50CE82BAEA.jpeg


蜗牛吧
圈X配置如下，其他软件自行测试
[task_local]
#蜗牛吧
15,45 10-22 * * * https://raw.githubusercontent.com/age174/-/main/wnb.js, tag=蜗牛吧, img-url=https://ftp.bmp.ovh/imgs/2021/02/221a7d94eaa0dddf.jpeg, enabled=true


[rewrite_local]
#蜗牛吧
^https://api.snail2020.com/api/hb/hb/ url script-request-body https://raw.githubusercontent.com/age174/-/main/wnb.js



#loon
^https://api.snail2020.com/api/hb/hb/ script-path=https://raw.githubusercontent.com/age174/-/main/wnb.js, requires-body=true, timeout=10, tag=蜗牛吧



#surge

蜗牛吧 = type=http-request,pattern=^https://api.snail2020.com/api/hb/hb/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/wnb.js,script-update-interval=0




[MITM]
hostname = api.snail2020.com


*/
const $ = new Env('蜗牛吧');
let wnburl = $.getdata('wnburl')
let wnbhd = $.getdata('wnbhd')
let wnbbody = $.getdata('wnbbody')
!(async () => {
  if (typeof $request !== "undefined") {
      await wnbck()
  } else {
console.log(`\n蜗牛吧开始执行领金币任务！💦\n等待61秒开始领取下一个`)
    await wnbqd();
console.log(`\n蜗牛吧开始执行领金币任务！💦\n等待61秒开始领取下一个`)
    await $.wait(61000);
    await wnbqd();
console.log(`\n蜗牛吧开始执行领金币任务！💦\n等待61秒开始领取下一个`)
    await $.wait(61000);
    await wnbqd();

for (let i = 0; i < 5; i++) {
      $.index = i + 1      
      console.log(`\n蜗牛吧开始执行第${i+1}次领取红包！💦\n等待3秒开始领取下一个红包`)
      await wnbhb();
      await $.wait(3000);
}await wnbxx();
await wnbtj();


  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//蜗牛吧数据
function wnbck() {
   if ($request.url.indexOf("receiveSystem") > -1){
  $.setdata($request.url,'wnburl')
    //$.log(wnburl)
    $.setdata(JSON.stringify($request.headers),'wnbhd')
$.log(wnbhd)
$.setdata($request.body,'wnbbody')
$.log(wnbbody)
   $.msg($.name,"","蜗牛吧数据获取成功！")
  }
}



//蜗牛吧红包领取
function wnbhb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://api.snail2020.com/api/hb/hb/receiveSystem',
        headers : JSON.parse($.getdata('wnbhd')),
        body :  wnbbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('蜗牛吧红包领取回执:成功🌝 '+result.msg)
}
if(result.code == 400 || result.code == 411){
        console.log('蜗牛吧红包领取回执:失败🚫 '+result.msg+'\n可能是领取上限或者该时段已经领取完毕')}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function wnbtj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://api.snail2020.com/api/user/info/bindInviteUser',
        headers : JSON.parse($.getdata('wnbhd')),
        body :  `inviteMobile=15894440800&countryCode=86
`,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
if(result.code == 200){
        console.log('蜗牛吧运行完毕')
}
if(result.code == 400 || result.code == 411){
        console.log('蜗牛吧运行完毕！')}

} catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//蜗牛吧个人信息
function wnbxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'https://api.snail2020.com/api/user/assets/getAssets',
        headers : JSON.parse($.getdata('wnbhd')),
        body :  ``,}
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n\n蜗牛吧获取个人信息成功\n当前红包余额: '+result.result.balance+'元\n当前金币余额: '+result.result.gold)
}
if(result.code == 400 || result.code == 411){
        console.log('\n蜗牛吧获取个人信息失败: '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}




//蜗牛吧广告金币
function wnbqd(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('wnburl') === "undefined") {
        $.msg($.name,"",'请先获取蜗牛吧数据!😓',)
        $.done()
      }
let url = {
        url : 'https://api.snail2020.com/api/hb/hb/receiveAdvGold',
        headers : JSON.parse($.getdata('wnbhd')),
        body : 'os=iOS'
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 200){
        console.log('\n蜗牛吧领取金币回执:成功🌝 '+result.msg+'芜湖\n')
}
if(result.code == 400){
        console.log('\n蜗牛吧领取金币回执:失败🚫 '+result.msg+'\n可能是领取上限或者该时段已经领取完毕\n')}
//$.msg("","","蜗牛吧已运行完毕")
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}



function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
