/**
*
*
* 浏览器下载文件重命名
*
*/

let requestURL = $request.url.toLowerCase();
if (requestURL.indexOf('/videos/') != -1 && requestURL.indexOf('&filename=') != -1) {
  if($response.status==200){
    let query = getQueryVariable($request.url);
    if (typeof(query.filename) == "undefined" || query.filename == "") {
      $done({});
    }else{
      $response.headers['Content-Disposition'] = 'attachment;filename=' + decodeURI(query.filename);
      $done({
        status: 200,
        headers: $response.headers
      })
    }
  }else{
    $done({});
  }
}

function getQueryVariable(url){
  let index=url.lastIndexOf('?');
  let query = url.substring(index+1, url.length);
  let vars = query.split("&");
  let querys = new Object();
  for (let i=0; i<vars.length; i++) {
    let pair = vars[i].split("=");
    querys[pair[0]] = pair[1]
  }
  if (Object.keys(querys).length == 0) {
    return null;
  }else{
    return querys;
  }
}