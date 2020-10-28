(function(window, document){
  // クリック要素のセレクターを取得する
  const accordionTrigger = document.querySelectorAll('.card-header');
  /**
   * init 初期値はターゲットは開いた状態にする
   * @param target
   */
  const init = (target) => {
    target.style.height = target.scrollHeight + 'px';
    target.classList.add('show');
  };
  [...accordionTrigger].forEach((value, index) => {
    // 初期値は一個目のターゲットは開く
    init(accordionTrigger[0].nextElementSibling);
    // クリックイベント
    accordionTrigger[index].addEventListener('click', (e) => {
      const currentElement = e.currentTarget;
      const accordionTarget = currentElement.nextElementSibling;
      const currentClass = accordionTarget.classList.contains('show');
      if (!currentClass) {
        accordionTarget.style.height = accordionTarget.scrollHeight + 'px';
        accordionTarget.classList.add('show');
      } else {
        accordionTarget.style.height = null;
        accordionTarget.classList.remove('show');
      }
    });
  });
})(window,document);
