
    function updateClock() {
      var now = new Date(); 
      var hours = now.getHours();  
      var minutes = now.getMinutes(); 
      var seconds = now.getSeconds();  
 
      
      hours = checkTime(hours);
      minutes = checkTime(minutes);
      seconds = checkTime(seconds);
      
     
      if(hours > 12 ) {
          var timeString = hours + ":" + minutes + ":" + seconds;
      } else {
          var timeString = hours + ":" + minutes + ":" + seconds;
      }
      
     
      document.getElementById('xkxs').innerText = timeString;
      
     
      setTimeout(updateClock, 1000);
    }
    
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    
    
    window.onload = function() {
      updateClock();
  var audio = new Audio('https://zjh-cms-transform.oss-cn-hangzhou.aliyuncs.com/gfs_mnt%2Fdata1%2F2024%2F8%2F15%2F14%2F16%2F129149%2F6a7374d534e04d7e82f761ab6ba3385a%2F3c339b45122c69328f52e650abe48403.mp3');
   audio.loop = true;
 audio.play(); 
    };
    
    
    function getCurrentDate() {
      var today = new Date();
      var date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
      var xkxs = today.getDay()
      var weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']; // 星期几名称的数组
      var date1 = weekdays[xkxs]
      document.getElementById('xkxs-date').textContent = date;
      document.getElementById('xkxs-xq').textContent = date1;
    }
    getCurrentDate()
