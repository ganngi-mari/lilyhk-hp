$(document).ready(function() {
    // 現在のページパスを取得
    const currentPath = window.location.pathname;

    let currentImage = '/myicon.png'; // ルートディレクトリにある繁体字版用画像
    let alternateImage = '/myicon2.jpg';

    // 初期画像設定
    $('#profileImage').attr('src', currentImage);

    // プロフィール画像をクリック時に画像を切り替える
    $('#profileImage').click(function() {
        if ($(this).attr('src') === currentImage) {
            $(this).attr('src', alternateImage);
        } else {
            $(this).attr('src', currentImage);
        }
    });

    // ページ読み込み時にローカルストレージからテーマを復元
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        $('body').addClass('dark-mode');
        applyLoadingScreenStyles(true); // ダークモード用のスタイルを適用
    } else {
        applyLoadingScreenStyles(false); // ライトモード用のスタイルを適用
    }

    // ダークモードの切り替えイベントリスナーを追加
    $('#toggle-dark-mode').click(function() {
        const isDarkMode = $('body').toggleClass('dark-mode').hasClass('dark-mode');
        applyLoadingScreenStyles(isDarkMode); // ダークモード/ライトモードに応じたスタイルを適用
        const theme = isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    // 2秒後にローディング画面をフェードアウト
    setTimeout(function() {
        $('#loading-screen').addClass('fade-out');
        $('#loading-screen').on('transitionend', function() {
            $(this).css('display', 'none');
        });
    }, 2000); // 2秒間表示

    // ローディング画面の初期状態設定
    $('#loading-screen').css('display', 'flex');

    // ダークモード/ライトモードに応じたローディング画面のスタイルを適用する関数
    function applyLoadingScreenStyles(isDark) {
        if (isDark) {
            $('#loading-screen').css({
                'background-color': '#333',
                'color': '#e0e0e0'
            });
            $('#loading-screen .spinner').css('border-top-color', '#ff6666');
            $('#loading-screen p').css('color', '#e0e0e0');
        } else {
            $('#loading-screen').css({
                'background-color': '#fffdd0',
                'color': '#333'
            });
            $('#loading-screen .spinner').css('border-top-color', '#cc0000');
            $('#loading-screen p').css('color', '#333');
        }
    }
});