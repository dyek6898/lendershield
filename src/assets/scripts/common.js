etUI.utils.ready(function () {
  console.log('document ready');
  etUI.initUI();

  // [공통] 클릭 이벤트
  etUI.pages.clickEvent = function () {
    const alarm = document.querySelector('.btn-alarm');
    const userSelect = document.querySelector('.btn-select');

    alarm.addEventListener('click', function (e) {
      const target = e.target.closest('.btn-area').querySelector('.alarm-info');
      this.classList.toggle('on');

      if(this.classList.contains('on')){
        target.style.display = "block";
      } else target.style.display = "none";
    });

    userSelect.addEventListener('click', function (e) {
      const target = e.target.closest('.info-area').querySelector('.select-list');
      this.classList.toggle('on');

      if(this.classList.contains('on')){
        target.style.display = "block";
      } else target.style.display = "none";
    });
  };

  document.fonts.ready.then(() => {
    etUI.pages.clickEvent();
  });
});
