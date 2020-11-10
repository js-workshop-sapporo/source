(function(window, document){
  const fileArea = document.getElementById('dragDropArea');
  const fileInput = document.getElementById('fileInput');

  /**
   * onChangePreview
   */
  const onChangePreview = (event, f = null) => {
    let file = f;
    if(file === null){
      file = event.target.files[0];
    }
    let reader = new FileReader();
    const preview = document.getElementById('previewArea');
    const previewImage = document.getElementById('previewImage');

    if(previewImage != null) {
      preview.removeChild(previewImage);
    }

    reader.onload = function(event) {
      const img = document.createElement('img');
      img.setAttribute('src', reader.result);
      img.setAttribute('id', 'previewImage');
      preview.appendChild(img);
    };

    reader.readAsDataURL(file);
  };

  fileArea.addEventListener('dragover', function(evt){
    evt.preventDefault();
    fileArea.classList.add('dragover');
  });
  fileArea.addEventListener('dragleave', function(evt){
    evt.preventDefault();
    fileArea.classList.remove('dragover');
  });
  fileArea.addEventListener('drop', function(evt){
    evt.preventDefault();
    fileArea.classList.remove('dragenter');
    const files = evt.dataTransfer.files;
    console.log("DRAG & DROP");
    console.table(files);
    fileInput.files = files;
    onChangePreview('onChange',files[0]);
  });

})(window,document);
