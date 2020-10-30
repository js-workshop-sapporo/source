(function(window, document){
  const div = document.createElement('div');
  div.setAttribute('class', 'modal-backdrop fade show');
  const buttons = document.querySelectorAll('.btn');
  const closeButton = document.querySelector('.close');
  // const overlay = document.querySelector('.modal-backdrop');
  const modal = document.querySelector('.modal');
  const closeOverlay = ()=> {
    console.dir('a');
  };
  const event = ()=> {
    const button = document.querySelector('.btn');
    const toggle = button.getAttribute('data-toggle');
    const objBody = document.getElementsByTagName('body').item(0);
    if (toggle === 'modal') {
      modal.setAttribute('style', 'display: block; padding-right: 15px;');
      objBody.appendChild(div);
    } else {
      modal.removeAttribute('style');
    }
  };
  buttons.forEach((element, index) => {
    element.addEventListener('click', event, false);
  });
  div.addEventListener('click', closeOverlay, false);

  // const backdrop = document.querySelector('.modal-backdrop');
  // backdrop.addEventListener('click', (e) => {
  //   modal.removeAttribute('style');
  // });
  // if (isOverlay) {
  //   overlayButton.addEventListener('click', (e) => {
  //     const backdrop = document.querySelector('.modal-backdrop');
  //     modal.removeAttribute('style');
  //     backdrop.remove();
  //   });
  // }
})(window,document);
