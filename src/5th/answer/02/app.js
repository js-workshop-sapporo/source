(function(window, document){
  // クリック要素のセレクターを取得する
  const accordionTrigger = document.querySelectorAll('.card-header');
  // 表示用のクラス名
  const CLASS_SHOW = 'show';
  /**
   * init 初期値はターゲットは開いた状態にする
   * @param target
   */
  const init = (target) => {
    target.style.height = `${target.scrollHeight}px`;
    target.classList.add(CLASS_SHOW);
  };
  init(accordionTrigger[0].nextElementSibling);
  accordionTrigger.forEach((element, index) => {
    // クリックイベント
    accordionTrigger[index].addEventListener('click', (e) => {
      const currentElement = e.currentTarget;
      const accordionTarget = currentElement.nextElementSibling;
      const isClassShow = accordionTarget.classList.contains(CLASS_SHOW);
      // ターゲット要素のクラス有無
      if (!isClassShow) {
        accordionTarget.style.height = `${accordionTarget.scrollHeight}px`;
        accordionTarget.classList.add(CLASS_SHOW);
      } else {
        accordionTarget.style.height = null;
        accordionTarget.classList.remove(CLASS_SHOW);
      }
    });
  });
})(window,document);
