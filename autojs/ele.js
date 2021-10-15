//初始化
var dev_hight = device.height;
var dev_width = device.width;
if(dev_hight && dev_width == 0) {toastLog('BUG啦，请重启手机');exit();}
console.show();
//子线程 音量键关闭
threads.start(function(){
  events.observeKey();
events.onKeyDown("volume_up", function(event){toastLog("\n音量+被按下，即将结束脚本！");sleep(3000);console.hide();exit();});
});
//检测并点击
function check_click() {
  text('下单任务').waitFor();
  sleep(2000);
  outer: 
  while(1){
    let list_15sec = textContains('15秒').find();
    let list_0sec = textContains('浏览').find();
    for(i = 0; i < list_15sec.length; i++){
      if(list_15sec[i] && list_15sec[i].parent().child(2).text() != '奖励已到账') {
        sleep(1000);
        list_15sec[i].parent().child(2).click();
        console.log(list_15sec[i].parent().child(0).getText())
        console.log('等待...');
        textMatches("任务完成|点击返回").waitFor();
        back();sleep(500);
        if(text('晚点再来').findOne(2000)) text('晚点再来').click();
        sleep(1000);
        text('逛逛任务').waitFor();
        sleep(1000);
        continue outer;
      }
    }  
    for(i = 0; i < list_0sec.length; i++){
      if(list_0sec[i] && list_0sec[i].parent().child(2).text() != '奖励已到账') {
          list_0sec[i].parent().child(2).click();
          sleep(3000);
          back();
          if(text('晚点再来').findOne(2000)) text('晚点再来').click();
          sleep(1000);
            text('逛逛任务').waitFor();
            sleep(1000);
            continue outer;
      }
    } 
    break;
  }
  toastLog('任务1 基本完成');
}
function video() {
  textContains('说两句').waitFor();
  toastLog('\n已进入视频页\n刷完 自动退回桌面');
  text('明日再领').waitFor();  
  home();
  toastLog('已经刷完 自动结束')
}
//启动并跳转
toastLog('启动饿了么\n按下音量+ 脚本停止');
home();sleep(2000);
app.startActivity({
  packageName: "me.ele",
  data: 'eleme://web?&url=https://h5.ele.me/svip/task-list'
  });
//主程序
check_click();
// log('请双击点进视频页中...\n 它在"订单"左边 \n等待中...')
// video();
exit();