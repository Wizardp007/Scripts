const cookieName ='携程旅行app签到'
const cookieKey = 'cookie_ctrip'
const chen = init()
let cookieVal = chen.getdata(cookieKey)
sign()
function sign() {

 let bodys = {
        "head":{
                "cid":"12001072410256556930",
                "ctok":"",
                "cver":"838.002",
                "lang":"01",
                "sid":"8890",
                "syscode":"12",
                "auth":"DE89A79E6F23B474A39D2749D78DBF6FE22F49ADE28C96C37723399CDC4830B7",
                "extension":[
                    {
                    "name":"protocal",
                    "value":"https"
                    }
                ]
            },
        "contentType":"json"
    }
    let url = {url: 'https://m.ctrip.com/restapi/soa2/21778/json/findUserSignInfo',headers: { Cookie:cookieVal},body:JSON.stringify(bodys)}
    url.headers['Accept'] = 'application/json'
    url.headers['Accept-Encoding'] = 'gzip, deflate, br'
    url.headers['Accept-Language'] = 'zh-cn'
    url.headers['Connection'] = 'keep-alive'
    url.headers['Content-Length'] = '251'
    url.headers['Content-Type'] = 'application/json'
    url.headers['Host'] = 'm.ctrip.com'
    url.headers['Origin'] = 'https://m.ctrip.com'
    url.headers['Referer'] = 'https://m.ctrip.com/webapp/membercenter/task?isHideNavBar=YES&from_native_page=1'
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18F72_eb64__Ctrip_CtripWireless_8.38.2_cDevice=iPhone 8 Plus__cSize=w414*h736__cwk=1_'
    url.headers['X-Requested-With'] = 'XMLHttpRequest'

    url.body = bodys

    chen.post(url, (error, response, data) => {
        try{
         if(error){
             subTitle = '携程签到失败√'
             detail = '发生了异常'
          }else{
              const result = JSON.parse(data)
              const title = '${cookieName}'
              let subTitle = ``
              let detail = ``
               if (result.resultcode == 0){
                      subTitle = '携程签到成功√'
                      detail = '连续签到${result.signCount}天，当前积分${result.integrated}'
                } else {
                  subTitle = '携程签到失败×'
                  detail = `说明: ${result.resultmessage}`
                }
              chen.msg(title, subTitle, detail)
          }
        }catch((err) => {
            chen.log(err)
            chen.msg('${cookieName}', 'error: ',err)
        })finally{
            chen.done()
        }
    })
 }

  function init() {
    isSurge = () => {
      return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
      return undefined === this.$task ? false : true
    }
    getdata = (key) => {
      if (isSurge()) return $persistentStore.read(key)
      if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (key, val) => {
      if (isSurge()) return $persistentStore.write(key, val)
      if (isQuanX()) return $prefs.setValueForKey(key, val)
    }
    msg = (title, subtitle, body) => {
      if (isSurge()) $notification.post(title, subtitle, body)
      if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
      if (isSurge()) {
        $httpClient.get(url, cb)
      }
      if (isQuanX()) {
        url.method = 'GET'
        $task.fetch(url).then((resp) => cb(null, {}, resp.body))
      }
    }
    post = (url, cb) => {
      if (isSurge()) {
        $httpClient.post(url, cb)
      }
      if (isQuanX()) {
        url.method = 'POST'
        $task.fetch(url).then((resp) => cb(null, {}, resp.body))
      }
    }
    done = (value = {}) => {
      $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
  }