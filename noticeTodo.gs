
//Asanの実行関数
function Asan() {
    deleteTrigger('Asan');
     //設定読み込み
    var confData = getConf();
    
    //sheet指定
    var spreadsheet = SpreadsheetApp.openById(confData.key).getSheetByName('kanban');
    var values = spreadsheet.getRange('C7:C16').getValues(); // メッセージリストを取得
    var room_id = "******";
    var tempre = "[To:******]Asan";
    IFcheck(tempre,values,room_id);
  }
  
  
  //Bsanの実行関数
  function futo() {
    deleteTrigger('Bsan');
     //設定読み込み
    var confData = getConf();
    
    //sheet指定
    var spreadsheet = SpreadsheetApp.openById(confData.key).getSheetByName('kanban');
    var values = spreadsheet.getRange('H7:H16').getValues(); // メッセージリストを取得
    var room_id = "******";
    var tempre = "[To:******]Bsan";
    IFcheck(tempre,values,room_id);
  }
  
  //Csanの実行関数
  function tera() {
    deleteTrigger('tera');
     //設定読み込み
    var confData = getConf();
    
    //sheet指定
    var spreadsheet = SpreadsheetApp.openById(confData.key).getSheetByName('kanban');
    var values = spreadsheet.getRange('B7:B16').getValues(); // メッセージリストを取得
    var room_id = "******";
    var tempre = "[To:******]Csan";
    IFcheck(tempre,values,room_id);
  }
