(function(){

  const tabWrapperClassName = '.js-tab';
  const tabBtnClassName = '.js-tab-btn';
  const tabBodyClassName = '.js-tab-body';
  const activeClassName = 'active';
  const hiddenClassName = 'd-none';

  /**
   * タブclass
   * @param {Element} tab 
   */
  function Tab(tab) {
    this.tabBtnGroup = tab.querySelectorAll(tabBtnClassName);
    this.tabBodyGroup = tab.querySelectorAll(tabBodyClassName);
    this.addClickEvent();
  }

  Tab.prototype = {
    /**
     * タブ本文を表示する
     * @param {string} tabId
     */
    showBody: function (tabId) {
      const target = document.querySelector(tabId);
      if (!target) {return;}
      this.removeHideenClass(target);
    },
    /**
     * 非表示クラスを取り除く
     * @param {string}} target 
     */
    removeHideenClass: function(target) {
      if (this.isHidden(target)) {
        target.classList.remove(hiddenClassName);
      }
    },
    /**
     * 対象が非表示かを調べる
     * @param {HTMLElement} target
     */
    isHidden: function(target) {
      return target.classList.contains(hiddenClassName);
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
     * 対象を非表示にする
     * @param {HTMLElement} target 
     */
    hideTarget: function(target) {
      if (!this.isHidden(target)) {
        target.classList.add(hiddenClassName);
      }
    },
    /**
     * 全てのタブ本文を非表示にする
     */
    hideAllTabBody: function() {
      this.tabBodyGroup.forEach(tabBody => {
        this.hideTarget(tabBody);
      });
    },
    /**
     * 全てのボタン要素にクリックイベントを追加する
     */
    addClickEvent: function() {
      this.tabBtnGroup.forEach(tabBtn => {
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
      this.hideAllTabBody(this.tabBodyGroup);
      this.showBody(tabId);
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