'use strict';

(function(window, document){
  const buttons = document.querySelectorAll('.btn');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.modal-backdrop');
  const SHOW = 'show';

  /**
   * @param isOpen Boolean
   */
  const show = (isOpen)=> {
    isOpen ? modal.classList.add(SHOW) : modal.classList.remove(SHOW)
    isOpen ? overlay.classList.add(SHOW) : overlay.classList.remove(SHOW)
  }

  buttons.forEach((element) => {
    const toggle = element.getAttribute('data-toggle');
    const dismiss = element.getAttribute('data-dismiss');
    element.addEventListener('click', (event) => {
      event.preventDefault();
      (toggle === 'modal' || dismiss !== 'modal') ? show(true) : show(false)
    }, false);
  });
  overlay.addEventListener('click', (event)=> {
    event.preventDefault();
    show(false);
  }, false)
})(window,document);
