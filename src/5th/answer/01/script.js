(function(){

  const tabWrapperClassName = '.js-tab';
  const tabBtnClassName = '.js-tab-btn';
  const tabBodyClassName = '.js-tab-body';
  const activeClassName = 'active';

  /**
   * タブclass
   * @param {Element} tab
   */
  function Tab(tab) {
    this.tabBtnGroup = tab.querySelectorAll(tabBtnClassName);
    this.tabBodyGroup = tab.querySelectorAll(tabBodyClassName);
    this.initialize();
  }

  Tab.prototype = {
    /**
     * 初期化処理
     */
    initialize: function () {
      this.tabBtnGroup.item(0).classList.add(activeClassName);
      this.tabBodyGroup.item(0).classList.add(activeClassName);
      this.addClickEvent();
    },
    /**
     * タブ本文を表示する
     * @param {string} tabId
     */
    toggleActiveBody: function (tabId) {
      this.tabBodyGroup.forEach(tabBody => {
        if (tabBody.id === this.replaceHeadHash(tabId)) {
          tabBody.classList.add(activeClassName);
        } else {
          tabBody.classList.remove(activeClassName);
        }
      });
    },
    /**
     * 対象がアクティブ状態かを調べる
     * @param {HTMLElement} target
     */
    isActive: function(target) {
      return target.classList.contains(activeClassName);
    },
    /**
     * 対象をアクテイブ状態にする
     * @param {HTMLElement}} target
     */
    toggleActiveButton: function(target) {
      this.tabBtnGroup.forEach(tabBtn => {
        tabBtn.classList.remove(activeClassName);
      });
      if (!this.isActive(target)) {
        target.classList.add(activeClassName);
      }
    },
    /**
     * 文字列から戦闘のハッシュ（#）を削除した文字列を返す
     * @param {string} hash
     */
    replaceHeadHash: function(string) {
      return string.replace('#', '');
    },
    /**
     * 全てのボタン要素にクリックイベントを追加する
     */
    addClickEvent: function() {
      this.tabBtnGroup.forEach(tabBtn => {
        // イベントリスナー内でthisをインスタンスに向けたいので this を bind する
        tabBtn.addEventListener('click', this.onClickTabBtn.bind(this), false);
      });
    },
    /**
     * クリックイベントリスナー
     * @param {Event} event
     */
    onClickTabBtn: function(event) {
      event.preventDefault();
      const tabId = event.target.hash;
      this.toggleActiveBody(tabId);
      this.toggleActiveButton(event.target);
    }
  };

  const main = () => {
    const tabGroup = document.querySelectorAll(tabWrapperClassName);
    tabGroup.forEach(tab => {
      const myTab = new Tab(tab);
    });
  };
  main();

})();