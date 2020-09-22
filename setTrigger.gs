// 9時トリガーを設定
function nineTrigger() {
    console.log('9時トリガー開始');
    myFunction(0);
  }
  
  // 15時トリガーを設定
  function fiftyTrigger() {
    console.log('15時トリガー開始');
    myFunction(1);
  }
  
  // トリガーを設定
  function setTrigger(func,h,m) {
    console.log(func);
    var triggerDay = new Date();
    triggerDay.setHours(h);
    triggerDay.setMinutes(m);
    ScriptApp.newTrigger(func).timeBased().at(triggerDay).create();
  }
  
  // トリガーを削除
  function deleteTrigger(func) {
    var triggers = ScriptApp.getProjectTriggers();
    for(var i=0; i < triggers.length; i++) {
      if (triggers[i].getHandlerFunction() == func) {
        ScriptApp.deleteTrigger(triggers[i]);
      }
    }
  }
  