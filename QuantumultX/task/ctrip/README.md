携程旅行签到
该脚本理论上该脚本兼QuanSurge，使用一份即可

配置
quanx

[MIMT]

m.ctrp.com

[rewrie_local]

^https:\/\/m\.ctrip\.com\/restapi\/soa2\/21778\/json\/findUserSignInfo url script-request-header https://raw.githubusercontent.com/barrym-chen/Script/master/ctrip/ctrip_cookie.js

[task_local]

0 0 * * * https://raw.githubusercontent.com/barrym-chen/Script/master/ctrip/ctrip.js

####surge

ctripcookie.js=type=http-request, requires-body=1,pattern=^https:\/\/m\.ctrip\.com\/restapi\/soa2\/14946\/json\/userBaseInfo,script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/ctrip/ctrip_cookie.js
ctripsign.js=cron,cronexp=12 0 * * *,script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/ctrip/ctrip.js
Loon
http-request ^https:\/\/m\.ctrip\.com\/restapi\/soa2\/14946\/json\/userBaseInfo script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/ctrip/ctrip_cookie.js,requires-body=true
cron "12 0 * * *" script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/ctrip/ctrip.js

获取cookie说明
1、登录携程旅行，然后点击我的，我的积分进入即可即可获取cookie

2、为什么签到异常？

可能你没有进行实名认证

也可能账户异常

3、解决办法：进行实名认证重新获取cookie，多次尝试