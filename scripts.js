document.addEventListener("DOMContentLoaded", function () {
    // ヘルパー関数：ローカルストレージからテーマを取得
    function getThemeFromLocalStorage() {
        return localStorage.getItem('theme') || 'light';
    }

    // プロフィール画像の切り替え
    function setupProfileImageToggle() {
        const profileImage = document.getElementById('profileImage');
        if (!profileImage) {
            console.error('プロフィール画像が見つかりません。');
            return;
        }

        const imagePaths = {
            default: '../myicon.png',
            alternate: '../myicon2.jpg'
        };

        let currentImage = imagePaths.default;

        profileImage.addEventListener('click', function () {
            currentImage = currentImage === imagePaths.default ? imagePaths.alternate : imagePaths.default;
            profileImage.src = currentImage;
            console.log(`プロフィール画像を切り替えました: ${currentImage}`); // ログ出力
        });
    }

    // ダークモードの切り替え
    function setupDarkModeToggle() {
        const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
        if (!toggleDarkModeButton) {
            console.error('ダークモードボタンが見つかりません。');
            return;
        }

        toggleDarkModeButton.addEventListener('click', function () {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            applyLoadingScreenStyles(isDarkMode);
            const theme = isDarkMode ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            console.log(`ダークモードを切り替えました: ${theme}`); // ログ出力
        });
    }

    // ローディング画面のセットアップ
    function setupLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (!loadingScreen) {
            console.error('ローディング画面が見つかりません。');
            return;
        }

        setTimeout(function () {
            loadingScreen.classList.add('fade-out');
            const transitionEndHandler = () => {
                loadingScreen.style.display = 'none';
                loadingScreen.removeEventListener('transitionend', transitionEndHandler);
                console.log('ローディング画面を非表示にしました。'); // ログ出力
            };
            loadingScreen.addEventListener('transitionend', transitionEndHandler);

            // タイムアウトを設定
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 3000); // 最大3秒後に強制的に非表示
        }, 2000);

        loadingScreen.style.display = 'flex';
        console.log('ローディング画面を表示しました。'); // ログ出力
    }

    // ローディング画面のスタイルを適用
    function applyLoadingScreenStyles(isDark) {
        const loadingScreen = document.getElementById('loading-screen');
        if (!loadingScreen) return;

        loadingScreen.classList.toggle('loading-screen-dark', isDark);
        loadingScreen.classList.toggle('loading-screen-light', !isDark);
        console.log(`ローディング画面のスタイルを適用しました: ${isDark ? 'ダークモード' : 'ライトモード'}`); // ログ出力
    }

    // 言語メニューの展開/折りたたみを制御
    function setupLanguageMenuToggle() {
        const languageToggleButton = document.getElementById("language-toggle-button");
        const languageMenu = document.getElementById("language-menu");

        if (languageToggleButton && languageMenu) {
            languageToggleButton.addEventListener("click", () => {
                const isOpen = languageMenu.classList.toggle("open");
                console.log(`言語メニューを${isOpen ? '展開' : '折りたたみ'}ました。`); // ログ出力
            });
        } else {
            console.error("言語切り替えボタンまたはメニューが見つかりません。");
        }
    }

    // 初期化処理
    const currentTheme = getThemeFromLocalStorage();
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        applyLoadingScreenStyles(true);
        console.log('初期化: ダークモードを有効にしました。'); // ログ出力
    } else {
        applyLoadingScreenStyles(false);
        console.log('初期化: ライトモードを有効にしました。'); // ログ出力
    }

    setupProfileImageToggle();
    setupDarkModeToggle();
    setupLoadingScreen();
    setupLanguageMenuToggle(); // 言語メニューの初期化を追加
});