(function(){
  // TODO: メソッドとプロパティにコメント
  class ScrollShowItem {
    constructor (target) {
      /** 表示させる要素 */
      this.target = target ? target : '.js-scroll-item';
      this.nodeList = undefined;
      this.scrollValue = 0;
      this.callbackId = false;
      this.initialize();
    }
    /**
     * 初期化処理
     */
    initialize() {
      this.nodeList = document.querySelectorAll(this.target);
      window.addEventListener('scroll', this.scrollAnimation.bind(this), { passive: true });
    }
    scrollAnimation() {
      if (!this.callbackId) {
        /**
         * 間引き処理
         * 参考: https://qiita.com/kikuchi_hiroyuki/items/7ac41f58891d96951fa1
         */
        window.requestAnimationFrame(() => {
          this.callbackId = false;
          this.nodeList.forEach(element => {
            this.scrollValue = window.pageYOffset;
            this.show(element);
          });
        });
        this.callbackId = true;
      }
    }
    /**
     * 引数の要素を表示する
     * @param {Element} element
     */
    show(element) {
      const dataset = element.dataset;
      /** マークアップ側で data-show-scroll-value に値がセットされていれば実行する */
      if (dataset.hasOwnProperty('showScrollValue')) {
        const showScrollValue = Number(dataset.showScrollValue);
        if (this.scrollValue >= showScrollValue) {
          element.classList.add('is-show');
        } else {
          element.classList.remove('is-show');
        }
      }
    }
  }

  const scrollShowItem = new ScrollShowItem();

})();