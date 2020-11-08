(function() {
  /**
   * スライドショーclass
   * @param {string} wrapper
   */
  function SlideShow(wrapper) {
    this.wrapper = wrapper ? wrapper : '.js-carousel';
    this.item = '';
    this.prevBtn = '';
    this.nextBtn = '';
    this.initialize();
  }
  SlideShow.prototype = {
    initialize: function() {
      if (!this.item) {
        this.item = `${this.wrapper}-item`;
      }
      if (!this.prevBtn) {
        this.prevBtn = `${this.wrapper}-control-prev`;
      }
      if (!this.nextBtn) {
        this.nextBtn = `${this.wrapper}-control-next`;
      }
      const wrapper = document.querySelectorAll(this.wrapper);
      wrapper.forEach(element => {
        const items = new SlideShowItem(element.querySelectorAll(this.item));
        const prevBtn = element.querySelector(this.prevBtn);
        const nextBtn = element.querySelector(this.nextBtn);

        if (prevBtn) {
          prevBtn.addEventListener('click', {
            items,
            handleEvent: this.onClikcPrevBtn
          }, false);
        }
        if (nextBtn) {
          nextBtn.addEventListener('click', {
            items,
            handleEvent: this.onClikcNextBtn
          }, false);
        }
      });
    },
    onClikcPrevBtn: function(event) {
      event.preventDefault();
      this.items.decrement();
      this.items.showItem();
    },
    onClikcNextBtn: function(event) {
      event.preventDefault();
      this.items.increment();
      this.items.showItem();
    },
  };

  /**
   * スライドショーアイテムclass
   */
  function SlideShowItem(nodeList) {
    this.list = nodeList ? nodeList : [];
    this.currentIndex = 0;
  }
  SlideShowItem.prototype = {
    getMaxIndex: function() {
      return this.list.length - 1;
    },
    increment: function() {
      if (this.currentIndex < this.getMaxIndex()) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    decrement: function() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.getMaxIndex();
      }
    },
    showItem: function() {
      this.list.forEach((element, index) => {
        if (this.currentIndex === index) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    }
  };

  // TODO: 各メソッドにJSDoc書く
  const slideShow = new SlideShow('.js-carousel');
})();