//共通処理


//チャットワークにメッセージを送る
function sendMessage(body,room_id) {
    
    //設定読み込み
    var confData = getConf();

    //chatworkのトークン
    var token = confData.token;
    
    var params = {
      headers : {"X-ChatWorkToken" : token},
      method : "post",
      payload : {
        body : body
      }
    };
  
    var url = "https://api.chatwork.com/v2/rooms/" + room_id + "/messages";
    UrlFetchApp.fetch(url, params);
  }
  　
  
  //メッセージの有無確認。あればchatワークへ送信
  function IFcheck(tenpre,values,room_id){
    sendMessage(tenpre,room_id);
    for (var i in values) { // 順番にチェック
      var mes = values[i];
      var wordCheck = values[i].toString().includes('・'); // 配列のデータはオブジェクト型のため、文字判定する際はstring型に変換してから判定する
      if (wordCheck != false) {
        var retBody = whoFrom(i) + "\n" + values[i] + "[/info]";
        sendMessage(retBody,room_id);
      }
    }
  }
  
  function whoFrom(flag){
    //チャットワークメッセージ部
    var retBody = "";
    
    switch(flag){
        case '0':
          retBody = "[info][title]Asanからの依頼です！(リマインド)[/title]\n";
          return retBody;
          break;
        case '1':
          retBody = "[info][title]Bsanからの依頼です！(リマインド)[/title]\n";
          return retBody;
          break;
        case '2':
          retBody = "[info][title]Csanからの依頼です！(リマインド)[/title]\n";
          return retBody;
          break;
    }
  }
  
  
  //通知切り替え
  function changeSet(range){
    //設定読み込み
    var confData = getConf();
    //sheet指定
    var spreadsheet = SpreadsheetApp.openById(confData.key).getSheetByName('kanban');
    
    var values = spreadsheet.getRange(range).getValue();
    if (values == 'OFF'){
      spreadsheet.getRange(range).setValue('ON');
      okBox('通知をONにしました。');
    }
    if (values == 'ON'){
      spreadsheet.getRange(range).setValue('OFF');
      okBox('通知をOFFにしました。');
    }
    return 0;
  }
  
  function setCell(a) {
    
    //設定読み込み
    var confData = getConf();
    //sheet指定
    var spreadsheet = SpreadsheetApp.openById(confData.key).getSheetByName('kanban');
    
    spreadsheet.getRange('A22').setValue('e'); // メッセージリストを取得
    
    return 0; 
  }
  