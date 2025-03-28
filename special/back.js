(function () {
    // Font AwesomeのCDNを読み込む
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(fontAwesomeLink);

    // 戻るボタンのHTMLを生成
    const backButton = document.createElement('a');
    backButton.href = '../'; // 親ディレクトリに移動
    backButton.className = 'back-button-widget';
    backButton.innerHTML = '<i class="fas fa-home"></i> Home';

    // CSSを動的に追加
    const style = document.createElement('style');
    style.textContent = `
        .back-button-widget {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: #800080; /* 紫色 */
            color: white;
            font-size: 16px;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s ease;

            /* 左下に固定 */
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 1000; /* 他の要素の上に表示 */
        }
        .back-button-widget:hover {
            background-color: #6a0dad; /* より濃い紫色 */
        }
        .back-button-widget i {
            margin-right: 8px;
        }
    `;
    document.head.appendChild(style);

    // ボタンをbodyに追加
    document.body.appendChild(backButton);
})();