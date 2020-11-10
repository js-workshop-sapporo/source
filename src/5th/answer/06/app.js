(function(window, document){
// ドラッグ&ドロップエリアの取得
  const fileArea = document.getElementById('dropArea');

// input[type=file]の取得
  const fileInput = document.getElementById('uploadFile');

  const filePrint = document.getElementById('printArea');

// ドラッグオーバー時の処理
  fileArea.addEventListener('dragover', function(e){
    e.preventDefault();
    fileArea.classList.add('dragover');
  });

// ドラッグアウト時の処理
  fileArea.addEventListener('dragleave', function(e){
    e.preventDefault();
    fileArea.classList.remove('dragover');
  });

// ドロップ時の処理
  fileArea.addEventListener('drop', function(e){
    e.preventDefault();
    fileArea.classList.remove('dragover');

    // ドロップしたファイルの取得
    const files = e.dataTransfer.files;

    // 取得したファイルをinput[type=file]へ
    fileInput.files = files;

    if(typeof files[0] !== 'undefined') {
      //ファイルが正常に受け取れた際の処理
      const img = document.createElement("img");
      img.src = files;
      filePrint.appendChild(img);
      console.log('aaaa')
    } else {
      //ファイルが受け取れなかった際の処理
    }
  });

// input[type=file]に変更があれば実行
// もちろんドロップ以外でも発火します
  fileInput.addEventListener('change', function(e){
    const file = e.target.files[0];

    console.log('チェンジ')
    if(typeof e.target.files[0] !== 'undefined') {
      // ファイルが正常に受け取れた際の処理
      const img = document.createElement("img");
      img.src = e.target.files[0];
      filePrint.appendChild(img);
    } else {
      // ファイルが受け取れなかった際の処理
    }
  }, false);
})(window,document);
