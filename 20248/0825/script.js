// 获取所有的选项卡按钮和内容区域元素
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');


    
 window.onload = function() {
      updateClock();
  var audio = new Audio('https://zjh-cms-transform.oss-cn-hangzhou.aliyuncs.com/gfs_mnt%2Fdata1%2F2024%2F8%2F15%2F14%2F32%2F129149%2Fb8e3f859a01e45309382eb952f4a445c%2F8da925f04704696e1f355fe160940dc7.mp3');
   audio.loop = true;
 audio.play(); 
    };


// 为每个选项卡按钮添加点击事件监听器
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 获取当前选项卡按钮对应的内容区域ID
    const contentId = tab.dataset.content;
    // 遍历所有的内容区域元素，根据ID显示或隐藏对应的内容区域
    contents.forEach(content => {
      if (content.id === contentId) {
        content.style.display = 'block'; // 显示对应的内容区域
      } else {
        content.style.display = 'none'; // 隐藏其他的内容区域
      }
    });
  });
});
