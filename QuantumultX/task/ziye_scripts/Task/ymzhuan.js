/* ziye 
github地址 https://github.com/ziye66666
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/ziye66666/JavaScript/main/Task/ziye.boxjs.json

转载请备注个名字，谢谢

⚠️羊毛赚
点击 http://share.xiaoniuaso.com/43?invitecode=10008933   下载APP  

邀请码 10008933  谢谢支持


2.26 制作
2.27 完成
2.28 调整运行时长

⚠️ 时间设置    0 8,12 * * *    每天1次以上就行   


⚠️一共3个位置 3个ck  👉 4条 Secrets 
多账号换行

第一步 添加  hostname=ymz.iphonezhuan.com,

第二步 ⚠️添加羊毛赚获取BODY重写  

登录羊毛赚  手动完成一次任务获取body  提现一次获取提现body
ymzhuanggbodyVal 👉YMZ_ymzhuanggBODY
ymzhuanspbodyVal 👉YMZ_ymzhuanspBODY
ymzhuantxbodyVal 👉YMZ_ymzhuantxBODY

BODY👉 ymzhuanUSERID   boxjs里填写4位数id即可模拟登陆(感谢蔡徐坤大佬提供模拟登录方法)

(勿打开重写注册，请提前注册，注册不了，请打开关闭 隐私跟踪)

CASH  👉  YMZ_CASH     可设置0 3 10 20 50 100  默认0关闭提现，设置888由上至下循环提现


⚠️主机名以及重写👇
hostname=ymz.iphonezhuan.com,

############## 圈x
#羊毛赚获取BODY
http:\/\/ymz\.iphonezhuan\.com\/* url script-request-body http://raw.githubusercontent.com/ziye66666/JavaScript/main/Task/ymzhuan.js

#羊毛赚模拟登录
http:\/\/ymz\.iphonezhuan\.com\/* url script-response-body http://raw.githubusercontent.com/ziye66666/JavaScript/main/Task/ymzhuan.js



############## loon
#羊毛赚获取BODY
http-request http:\/\/ymz\.iphonezhuan\.com\/* script-path=http://raw.githubusercontent.com/ziye66666/JavaScript/main/Task/ymzhuan.js, requires-body=1,max-size=0, tag=羊毛赚获取BODY

#羊毛赚模拟登录BODY
http-response http:\/\/ymz\.iphonezhuan\.com\/* script-path=http://raw.githubusercontent.com/ziye66666/JavaScript/main/Task/ymzhuan.js, requires-body=1,max-size=0, tag=羊毛赚获取BODY


############## surge
#羊毛赚获取BODY
羊毛赚获取BODY = type=http-request,pattern=https:\/\/ymz\.iphonezhuan\.com\/*,script-path=http://raw.githubusercontent.com/ziye66666/JavaScript/main/Task/ymzhuan.js

#羊毛赚获取BODY
羊毛赚模拟登录BODY = type=http-response,pattern=https:\/\/ymz\.iphonezhuan\.com\/*,script-path=http://raw.githubusercontent.com/ziye66666/JavaScript/main/Task/ymzhuan.js


*/

const $ = Env("羊毛赚");
$.idx = ($.idx = ($.getval('ymzhuanSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./ymzhuanCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
$.message = '', COOKIES_SPLIT = '', CASH = '', ddtime = '';
const ymzhuanggbodyArr = [];
let ymzhuanggbodyVal = ``;
let middleymzhuanggBODY = [];
const ymzhuanspbodyArr = [];
let ymzhuanspbodyVal = ``;
let middleymzhuanspBODY = [];
const ymzhuantxbodyArr = [];
let ymzhuantxbodyVal = ``;
let middleymzhuantxBODY = [];

if ($.isNode()) {
    // 没有设置 YMZ_CASH 则默认为 0 不兑换
    CASH = process.env.YMZ_CASH || 0;
}
if ($.isNode() && process.env.YMZ_ymzhuanggBODY) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
    if (
        process.env.YMZ_ymzhuanggBODY &&
        process.env.YMZ_ymzhuanggBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleymzhuanggBODY = process.env.YMZ_ymzhuanggBODY.split(COOKIES_SPLIT);
    } else {
        middleymzhuanggBODY = process.env.YMZ_ymzhuanggBODY.split();
    }
    if (
        process.env.YMZ_ymzhuanspBODY &&
        process.env.YMZ_ymzhuanspBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleymzhuanspBODY = process.env.YMZ_ymzhuanspBODY.split(COOKIES_SPLIT);
    } else {
        middleymzhuanspBODY = process.env.YMZ_ymzhuanspBODY.split();
    }
    if (
        process.env.YMZ_ymzhuantxBODY &&
        process.env.YMZ_ymzhuantxBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleymzhuantxBODY = process.env.YMZ_ymzhuantxBODY.split(COOKIES_SPLIT);
    } else {
        middleymzhuantxBODY = process.env.YMZ_ymzhuantxBODY.split();
    }
}

if (COOKIE.ymzhuanggbodyVal) {
    YMZ_COOKIES = {
        "ymzhuanggbodyVal": COOKIE.ymzhuanggbodyVal.split('\n'),
        "ymzhuanspbodyVal": COOKIE.ymzhuanspbodyVal.split('\n'),
        "ymzhuantxbodyVal": COOKIE.ymzhuantxbodyVal.split('\n'),
    }
    Length = YMZ_COOKIES.ymzhuanggbodyVal.length;



}
if (!COOKIE.ymzhuanggbodyVal) {
    if ($.isNode()) {
        Object.keys(middleymzhuanggBODY).forEach((item) => {
            if (middleymzhuanggBODY[item]) {
                ymzhuanggbodyArr.push(middleymzhuanggBODY[item]);
            }
        });
        Object.keys(middleymzhuanspBODY).forEach((item) => {
            if (middleymzhuanspBODY[item]) {
                ymzhuanspbodyArr.push(middleymzhuanspBODY[item]);
            }
        });
        Object.keys(middleymzhuantxBODY).forEach((item) => {
            if (middleymzhuantxBODY[item]) {
                ymzhuantxbodyArr.push(middleymzhuantxBODY[item]);
            }
        });
    } else {
        ymzhuanggbodyArr.push($.getdata("ymzhuanggbody"));
        ymzhuanspbodyArr.push($.getdata("ymzhuanspbody"));
        ymzhuantxbodyArr.push($.getdata("ymzhuantxbody"));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        if ("ymzhuanCASH") {
            CASH = $.getval("ymzhuanCASH") || '0';
        }
        let ymzCount = ($.getval('ymzhuanCount') || '1') - 0;
        for (let i = 2; i <= ymzCount; i++) {
            if ($.getdata(`ymzhuanggbody${i}`)) {
                ymzhuanggbodyArr.push($.getdata(`ymzhuanggbody${i}`));
                ymzhuanspbodyArr.push($.getdata(`ymzhuanspbody${i}`));
                ymzhuantxbodyArr.push($.getdata(`ymzhuantxbody${i}`));

            }
        }
    }
    if (ymzhuanggbodyArr == '') {
        Length = 0
    } else Length = ymzhuanggbodyArr.length

}

function GetCookie() {


    if ($response && $request.url.indexOf("verifyidentity") >= 0) {
        let BODY = {
            "msg": "ok",
            "statuscode": 200
        }

        $.log(
            `[${$.name + $.idx}] 设备验证✅: 通过`
        );
        $.msg($.name + $.idx, `设备验证: 通过🎉`, ``);

        $.done({
            body: JSON.stringify(BODY)
        });
    }


 if ($response && $request.url.indexOf("login") >= 0) {

        USERID = Number($.getval("ymzhuanUSERID"));

if (typeof USERID === 'undefined' || USERID == 0) { $.log(
            `[${$.name + $.idx}] 请设置USERID或者关闭重写，进入软件后开启`
        );
        $.msg($.name + $.idx, `请设置USERID或者关闭重写，进入软件后开启`, ``);
        $.done();
    }else {



        let BODY = {
            "timestamp": `${ddtime}`,
            "result": {
                "id": 0,
                "invitecode": "",
                "status": 1,
                "integral": 350,
                "pid": 0,
                "pinvitecode": "",
                "cellphone": "",
                "alipayaccount": "",
                "alipayname": "",
                "bannertime": 180,
                "bannerclkratio": "0##8",
                "cpvideo": 5,
                "cpratio": 10,
                "appinstallratio": "75##0##25",
                "appsigntime": 60,
                "leastbanner": 2,
                "qqgroup": "935826100",
                "shareurl": "",
                "appurl1": "",
                "appurl2": "",
                "nickname": "",
                "icon": ""
            },
            "msg": "ok",
            "statuscode": 200
        }
   
        BODY.result.id = USERID
        BODY.result.invitecode = `${USERID + 10000000}`

invitecode=BODY.result.invitecode

        $.log(
            `[${$.name + $.idx}] 模拟登陆✅: 成功,USERID: ${USERID}`
        );
        $.msg($.name + $.idx, `模拟登陆: 成功,USERID: ${USERID}🎉`, ``);



        $.done({
            body: JSON.stringify(BODY)
        });



   }

    }




    if ($request && $request.body.indexOf("taskid=1") >= 0&& $request.body.indexOf("sign=") >= 0) {
        const ymzhuanggbodyVal = $request.body;
        if (ymzhuanggbodyVal) $.setdata(ymzhuanggbodyVal, "ymzhuanggbody" + $.idx);
        $.log(
            `[${$.name + $.idx}] 获取ymzhuanggbodyVal✅: 成功,ymzhuanggbodyVal: ${ymzhuanggbodyVal}`
        );
        $.msg($.name + $.idx, `获取ymzhuanggbodyVal: 成功🎉`, ``);
    }


    if ($request && $request.body.indexOf("taskid=2") >= 0&& $request.body.indexOf("sign=") >= 0) {
        const ymzhuanspbodyVal = $request.body;
        if (ymzhuanspbodyVal) $.setdata(ymzhuanspbodyVal, "ymzhuanspbody" + $.idx);
        $.log(
            `[${$.name + $.idx}] 获取ymzhuanspbodyVal✅: 成功,ymzhuanspbodyVal: ${ymzhuanspbodyVal}`
        );
        $.msg($.name + $.idx, `获取ymzhuanspbodyVal: 成功🎉`, ``);
    }

    if ($request && $request.body.indexOf("account") >= 0 && $request.body.indexOf("money") >= 0) {
        const ymzhuantxbodyVal = $request.body;
        if (ymzhuantxbodyVal) $.setdata(ymzhuantxbodyVal, "ymzhuantxbody" + $.idx);
        $.log(
            `[${$.name + $.idx}] 获取ymzhuantxbodyVal✅: 成功,ymzhuantxbodyVal: ${ymzhuantxbodyVal}`
        );
        $.msg($.name + $.idx, `获取ymzhuantxbodyVal: 成功🎉`, ``);
    }


}
console.log(
    `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
  ).toLocaleString()} =====================\n`
);
console.log(
    `============ 共 ${Length} 个${$.name}账号=============\n`
);
//时间
nowTimes = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);
//今天
Y = nowTimes.getFullYear() + '-';
M = (nowTimes.getMonth() + 1 < 10 ? '0' + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + '-';
D = (nowTimes.getDate() < 10 ? '0' + (nowTimes.getDate()) : nowTimes.getDate());
ddtime = Y + M + D;
console.log(ddtime)
//当前时间戳
function tts(inputTime) {
    if ($.isNode()) {
        TTS = Math.round(new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000).toString();
    } else TTS = Math.round(new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toString();
    return TTS;
};
//当前10位时间戳
function ts(inputTime) {
    if ($.isNode()) {
        TS = Math.round((new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
    } else TS = Math.round((new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000) / 1000).toString();
    return TS;
};
//今天0点时间戳时间戳
function daytime(inputTime) {
    if ($.isNode()) {
        DAYTIME =
            new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
    } else DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
    return DAYTIME;
};
//时间戳格式化日期
function time(inputTime) {
    if ($.isNode()) {
        var date = new Date(inputTime + 8 * 60 * 60 * 1000);
    } else var date = new Date(inputTime);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
};
//随机udid 大写
function udid() {
    var s = [];
    var hexDigits = "0123456789ABCDEF";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
//随机udid 小写
function udid2() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
//unicode编码
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}
//unicode解码
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}

//将中文格式转换成utf8
function zhutf8(str) {
    strs = encodeURIComponent(str);
    return strs;
}

//将utf8格式转换成中文
function utf8zh(str) {
    strs = decodeURIComponent(str);
    return strs;
}


let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    GetCookie()
    $.done();
} else {
    !(async () => {

        await all();
        //await $.wait(1000)
        await msgShow();
    })()
    .catch((e) => {
            $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
        })
        .finally(() => {
            $.done();
        })
}
async function all() {
    if (!Length) {
        $.msg(
            $.name,
            '提示：⚠️请点击前往获取http://ymz.yichengw.cn/?id=529742\n',
            'http://ymz.yichengw.cn/?id=529742', {
                "open-url": "http://ymz.yichengw.cn/?id=529742"
            }
        );
        return;
    }
    for (let i = 0; i < Length; i++) {
        if (COOKIE.ymzhuanggbodyVal) {
            ymzhuanggbodyVal = YMZ_COOKIES.ymzhuanggbodyVal[i];
            ymzhuanspbodyVal = YMZ_COOKIES.ymzhuanspbodyVal[i];
            ymzhuantxbodyVal = YMZ_COOKIES.ymzhuantxbodyVal[i];
        }
        if (!COOKIE.ymzhuanggbodyVal) {
            ymzhuanggbodyVal = ymzhuanggbodyArr[i];
            ymzhuanspbodyVal = ymzhuanspbodyArr[i];
            ymzhuantxbodyVal = ymzhuantxbodyArr[i];
        }
        header = {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-cn",
            "Connection": "close",
            "Content-Length": "28",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "ymz.iphonezhuan.com",
            "User-Agent": "%E7%BE%8A%E6%AF%9B%E8%8B%B1%E6%B1%89%E8%AF%8D%E5%85%B8/1.03 CFNetwork/1206 Darwin/20.1.0",
        }

        

uid = decodeUnicode(ymzhuanggbodyVal.split('uid=')[1].split('&')[0])

        O = (`${$.name + (i + 1)}🔔`);


        await user(); //用户名
        await console.log(`-------------------------\n\n🔔开始运行【${$.name+(i+1)}】`)
        let cookie_is_live = await task(); //用户名
        if (!cookie_is_live) {
            continue;
        }


        if (gg.status == 0) {
            await ggrw() //广告任务
          await $.wait(4 * 33000)

        }


        

        if (sp.status == 0) {
            await sprw() //视频任务
await $.wait(5 * 33000)

        }
        await signinfo() //签到


        if (CASH > 0 && nowTimes.getHours() >= 8 && nowTimes.getHours() <= 20) {

            if (CASH <= 100 && $.task.integral / 100 >= CASH) {
                await tixian() //提现
            }


            if (CASH == 888) {
                if ($.task.integral / 100 >= 100) {
                    CASH = 100
                } else if ($.task.integral / 100 >= 50) {
                    CASH = 50
                } else if ($.task.integral / 100 >= 20) {
                    CASH = 20
                } else if ($.task.integral / 100 >= 10) {
                    CASH = 10
                } else if ($.task.integral / 100 >= 3) {
                    CASH = 3
                }
                if (CASH != 888) {
                    await tixian() //提现
                }
            }

        }




    }
}
//通知
function msgShow() {
    return new Promise(async resolve => {
        if (notifyInterval != 1) {
            console.log($.name + '\n' + $.message);
        }
        if (notifyInterval == 1) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10))
            await notify.sendNotify($.name, $.message);
        resolve()
    })
}
//用户名
function user() {

    console.log(`\n${O}\n========== ${uid} ==========\n`)
    $.message += `\n${O}\n========== 【${uid}】 ==========\n`;


}


//任务列表
function task(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://ymz.iphonezhuan.com/gettask`,
                headers: header,
                body: `channelID=2&uid=${uid}&ver=102`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 任务列表🚩: ${data}`);

                    $.task = JSON.parse(data);
                    if ($.task.statuscode == 200) {
                        gg = $.task.result.find(item => item.action === "banner://");
                        sp = $.task.result.find(item => item.action === "video://");
                        
                        console.log(`现金余额:${$.task.integral/100}元\n${sp.name}:${sp.nowcount}/${sp.count}\n${gg.name}:${gg.nowcount}/${gg.count}\n${sp.name}:${sp.nowcount}/${sp.count}\n`)
                        $.message += `【现金余额】:${$.task.integral/100}元\n【${gg.name}】:${gg.nowcount}/${gg.count}\n【${sp.name}】:${sp.nowcount}/${sp.count}\n`
                        resolve(true);
                    }
                    if ($.task.statuscode != 200) {
                        $.msg(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        if ($.isNode()) {
                            notify.sendNotify(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        }
                        resolve(false);
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//广告任务
function ggrw(timeout = 0) {
    return new Promise(async (resolve) => {
        setTimeout(() => {
                for (let i = 0; i < 4; i++) {
                    setTimeout(() => {
                        let url = {
                            url: `http://ymz.iphonezhuan.com/addaction?`,
                            headers: header,
                            body: ymzhuanggbodyVal,
                        }
                        $.post(url, async (err, resp, data) => {
                            try {
                                if (logs) $.log(`${O}, 广告任务🚩: ${data}`);
                                $.ggrw = JSON.parse(data);
                                if ($.ggrw.statuscode == 200) {
                                    console.log(`${gg.name+(i+1)}：执行成功\n`);
                                    $.message += `【${gg.name+(i+1)}】：执行成功\n`;

                                }
                            } catch (e) {
                                $.logErr(e, resp);
                            } finally {
                                resolve()
                            }
                        })
                    }, i * 33000);
                }
            },
            timeout)
    })
}

//视频任务
function sprw(timeout = 0) {
    return new Promise(async (resolve) => {
        setTimeout(() => {
                for (let i = 0; i < 5; i++) {
                    setTimeout(() => {
                        let url = {
                            url: `http://ymz.iphonezhuan.com/addaction?`,
                            headers: header,
                            body: ymzhuanspbodyVal,
                        }
                        $.post(url, async (err, resp, data) => {
                            try {
                                if (logs) $.log(`${O}, 视频任务🚩: ${data}`);
                                $.sprw = JSON.parse(data);
                                if ($.sprw.statuscode == 200) {
                                    console.log(`${sp.name+(i+1)}：执行成功\n`);
                                    $.message += `【${sp.name+(i+1)}】：执行成功\n`;

                                }
                            } catch (e) {
                                $.logErr(e, resp);
                            } finally {
                                resolve()
                            }
                        })
                    }, i * 33000);
                }
            },
            timeout)
    })
}
//每日签到
function sign(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://ymz.iphonezhuan.com/submitsign?`,
                headers: header,
            body: `channelID=2&uid=${uid}&ver=102`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 每日签到🚩: ${data}`);
                    $.sign = JSON.parse(data);
                    if ($.sign.statuscode == 200) {
                        console.log(`每日签到：${$.sign.msg},获得${$.sign.result.nowintegrals/100}元\n`);
                        $.message += `【每日签到】：${$.sign.msg},获得${$.sign.result.nowintegrals/100}元\n`;

                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//签到列表
function signinfo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://ymz.iphonezhuan.com/getsignlist`,
                headers: header,
                body: `channelID=2&uid=${uid}&ver=102`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 签到列表🚩: ${data}`);
                    $.signinfo = JSON.parse(data);
                    if ($.signinfo.statuscode == 200) {

                        daysign = $.signinfo.result.days[$.signinfo.result.days.length - 1]
                        if ($.signinfo.result.days.length) {
                            console.log(`签到列表：已签到${$.signinfo.result.days.length}天\n`);
                            $.message += `【签到列表】：已签到${$.signinfo.result.days.length}天\n`;
                        }


                        if (!daysign || daysign < nowTimes.getDate()) {
                            await sign() //签到
                        }
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//现金提现
function tixian(timeout = 0) {
    return new Promise((resolve) => {

money = ymzhuantxbodyVal.split('money=')[1].split('&')[0]

        setTimeout(() => {
            ymzhuantxbody = ymzhuantxbodyVal.replace(`money=${money}`, `money=${CASH}`)
            let url = {
                url: `http://ymz.iphonezhuan.com/submitwithdraw`,
                headers: header,
                body: ymzhuantxbody,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 现金提现🚩: ${data}`);
                    $.tixian = JSON.parse(data);
                    if ($.tixian.statuscode == 200) {
                        console.log(`现金提现：${$.tixian.msg}\n`);
                        $.message += `【现金提现】：${$.tixian.msg}\n`;
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log(``, `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, ``).trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ``;
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, ``) : e
                } catch (t) {
                    e = ``
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + ``).substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr((`` + e[s]).length)));
            return t
        }
        msg(e = t, s = ``, i = ``, r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = [``, "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log(``, `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
