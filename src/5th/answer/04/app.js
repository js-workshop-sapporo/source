(function(){
  class ScrollShowItem {

    constructor (target) {
      /** 表示させる要素 */
      this.target = target ? target : '.js-scroll-item';
      /** 表示させる要素で querySelectorAll した NodeList */
      this.nodeList = undefined;
      /** 現在のスクロール量 */
      this.scrollValue = window.pageYOffset;
      /** スクロール状況 */
      this.isScrolling = false;
      /** 初期化処理 */
      this.initialize();
    }

    /** htmlで表示に使うクラス名 */
    get SHOW_CLASS_NAME () {
      return 'is-show';
    }

    /**
     * 初期化処理
     */
    initialize () {
      this.nodeList = document.querySelectorAll(this.target);
      /**
       * スクロールイベントに scrollAnimation を追加する。
       * イベントリスナーは bind させて this の値をインスタンス自身に向ける（bindしないとWindowを見ちゃう）
       */
      window.addEventListener('scroll', this.scrollAnimation.bind(this), false);
    }
    /**
     * スクロール処理
     */
    scrollAnimation () {
      /**
       * 間引き処理
       * 参考: https://qiita.com/kikuchi_hiroyuki/items/7ac41f58891d96951fa1
       */
      if (!this.isScrolling) {
        window.requestAnimationFrame(() => {
          this.isScrolling = false;
          this.scrollValue = window.pageYOffset;
          this.nodeList.forEach(element => {
            this.show(element);
          });
        });
        this.isScrolling = true;
      }
    }
    /**
     * 引数の要素を表示する
     * @param {Element} element
     */
    show (element) {
      const dataset = element.dataset;
      /** マークアップ側で data-show-scroll-value に値がセットされていれば実行する */
      if (dataset.hasOwnProperty('showScrollValue')) {
        /** datasetに入れた値は文字列になるので数値へ変換する */
        const showScrollValue = Number(dataset.showScrollValue);
        if (this.scrollValue >= showScrollValue) {
          element.classList.add(this.SHOW_CLASS_NAME);
        } else {
          element.classList.remove(this.SHOW_CLASS_NAME);
        }
      }
    }
  }

  const scrollShowItem = new ScrollShowItem();

})();