const cookieName ='携程旅行app签到'
const cookieKey = 'cookie_ctrip'
const bodyReqKey = 'body_head_ctrip'
const chen = init()
let cookieVal = chen.getdata(cookieKey)
let bodyVal   = chen.getdata(bodyReqKey)

const url = "https://m.ctrip.com/restapi/soa2/21778/json/findUserSignInfo";
const method = "POST";
const headers = JSON.parse(cookieVal);
const data = JSON.parse(bodyVal);

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: data // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
      console.log(response.body);
      const result = JSON.parse(response.body)
      const title = '${cookieName}'
      let subTitle = ``
      let detail = ``
       if (result.resultcode == 0){
          subTitle = '携程签到成功√'
          detail = '连续签到'+result.signCount+'天'+'，当前积分'+result.integrated
        } else {
          subTitle = '携程签到失败×'
          detail = '说明:'+result.resultmessage
        }
    $notify(title, subTitle, detail); // Success!
    $done();
}, reason => {
    // reason.error
    $notify('${cookieName}', "携程签到异常", reason.error); // Error!
    $done();
});

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
