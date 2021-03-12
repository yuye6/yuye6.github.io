function remRefresh() {
  let clientWidth = document.documentElement.clientWidth;
  // 将屏幕等分 10 份
  let rem = clientWidth / 3.75;
  document.documentElement.style.fontSize = rem + 'px';
  document.body.style.fontSize = '12px';
  }
  window.addEventListener('pageshow', () => {
  remRefresh()
  })
  // 函数防抖
  let timeoutId;
  window.addEventListener('resize', () => {
  timeoutId && clearTimeout(timeoutId);
  timeoutId = setTimeout(() =>{
  remRefresh()
  }, 300)
  })
  