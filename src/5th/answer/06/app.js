(function(window, document){
  const fileArea = document.getElementById('dragDropArea');
  const fileInput = document.getElementById('fileInput');

  /**
   * onChangePreview
   * ドラッグ / input選択した画像の出力
   */
  const onChangePreview = (event, f = null) => {
    let file = f;
    let reader = new FileReader();
    const preview = document.getElementById('previewArea');
    const previewImage = document.getElementById('previewImage');
    if(file === null){
      file = event.target.files[0];
    }
    if(previewImage != null) {
      preview.removeChild(previewImage);
    }

    reader.onload = () => {
      const img = document.createElement('img');
      img.setAttribute('src', reader.result);
      img.setAttribute('id', 'previewImage');
      preview.appendChild(img);
    };

    reader.readAsDataURL(file);
  };

  fileArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    fileArea.classList.add('dragover');
  }, false);
  fileArea.addEventListener('dragleave', (event) => {
    event.preventDefault();
    console.log(event);
    fileArea.classList.remove('dragover');
  }, false);
  fileArea.addEventListener('drop', (event) => {
    event.preventDefault();
    fileArea.classList.remove('dragenter');
    fileArea.classList.remove('dragover');
    const files = event.dataTransfer.files;
    // 確認用のデバッグコード
    console.table(files);
    fileInput.files = files;
    onChangePreview('onChange', files[0]);
  }, false);
  fileInput.addEventListener('change', (event) => {
    event.preventDefault();
    const files = event.target.files[0]
    // 確認用のデバッグコード
    console.table(files)
    onChangePreview('onChange', files)
  }, false)

})(window,document);
