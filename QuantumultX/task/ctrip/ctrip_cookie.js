const cookieName = '携程旅app签到'
const cookieKey = 'cookie_ctrip'
const bodyReqKey = 'body_head_ctrip'
const chen = init()
const cookieVal = JSON.stringify($request.headers)
const headBodyVal = JSON.stringify($request.body)

if (cookieVal) {
  if (chen.setdata(cookieVal, cookieKey)) {
    chen.msg(`${cookieName}`, '获取Cookie: 成功', '')
    chen.log(`[${cookieName}] 获取Cookie: 成功, cookie: ${cookieVal}`)
  }
}
if(headBodyVal){
    if (chen.setdata(headBodyVal, bodyReqKey)) {
        chen.msg(`${cookieName}`, '获取body: 成功', '')
        chen.log(`[${cookieName}] 获取body: 成功, body: ${headBodyVal}`)
    }
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
chen.done()
