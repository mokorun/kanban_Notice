//時間になったら、通知ステータスを確認し、通知がオンになっている人に対してトリガーを設定する

function myFunction(gj) {
  
    //通知flag 0->9時 1->15時
    var setFlag = gj;
    
    // 土日休フラグの検証
    var currentTime = new Date();
    var holidayFlg = isHoliday(currentTime);
    if (holidayFlg) {
      return false;
    }
    
    //設定読み込み
    var confData = getConf();
    
    //sheet指定
    var spreadsheet = SpreadsheetApp.openById(confData.key).getSheetByName('kanban');
    
    for (var i=2; i < 5; i++) { // 順番にチェック
      
      var changeR = 0;
      if (setFlag == 0){
        changeR = 17;
      }else{
        changeR = 18;
      }
      
      var checkValues = spreadsheet.getRange(changeR,i).getValues(); // ON OFF 確認
      var wordCheck = checkValues.toString().includes('ON'); // 通知がONなのかを確認    
      
      if (wordCheck != false) {
        switch(i){
        case 2:
            if (setFlag == 0){
              console.log('Asan'+ '9:00');
              setTrigger('Asan',9,00);
            }
            if (setFlag == 1) {
              console.log('Asan'+ '15:00')
              setTrigger('Asan',15,00);
            }
          break;
        case 3:
            if (setFlag == 0){
              console.log('Bsan'+ '9:00');
              setTrigger('Bsan',9,00);
            }
            if (setFlag == 1) {
              console.log('Bsan'+ '15:00')
              setTrigger('Bsan',15,00);
            }
          break;
        case 4:
          if (setFlag == 0){
            console.log('Csan'+ '9:00');
            setTrigger('Csan',9,00);
          }
          if (setFlag == 1) {
            console.log('Csan'+ '15:00')
            setTrigger('Csan',15,00);
          }
          break;
        }
      }
    } 
    return 0;
  }
  
  // 祝日か判定
  function isHoliday(today) {
    var week = Utilities.formatDate(today, 'Asia/Tipei', 'u');
    if (week == 6 || week == 7) { // 土日判定
      return true;
    }
  
    var calendarId = "zh.taiwan#holiday@group.v.calendar.google.com";
    var holidays = CalendarApp.getCalendarById(calendarId).getEventsForDay(today); // 休日の場合、台灣の祝日カレンダーにイベントが登録されているはず
    return holidays.length > 0;
  }