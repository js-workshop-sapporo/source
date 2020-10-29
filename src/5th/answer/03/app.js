(function(window, document){
  const buttons = document.querySelectorAll('.btn');
  const closeButton = document.querySelector('.close');
  const modal = document.querySelector('.modal');
  const innerOverlay = '<div class="modal-backdrop fade show"></div>';
  buttons.forEach((element, index) => {
    const toggle = element.getAttribute('data-toggle');
    element.addEventListener('click', (e) => {
      if (toggle === 'modal') {
        modal.setAttribute('style', 'display: block; padding-right: 15px;');
        document.body.insertAdjacentHTML('beforeend', innerOverlay);
      } else {
        const backdrop = document.querySelector('.modal-backdrop');
        modal.removeAttribute('style');
        backdrop.remove();
      }
    });
  });
  closeButton.addEventListener('click', (e) => {
    const backdrop = document.querySelector('.modal-backdrop');
    modal.removeAttribute('style');
    backdrop.remove();
  });
})(window,document);
