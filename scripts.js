document.addEventListener("DOMContentLoaded", function () {
    // テーマ管理機能
    const themeManager = {
        getCurrentTheme: function() {
            return localStorage.getItem('theme') || 'light';
        },
        applyTheme: function(theme) {
            document.body.classList.toggle('dark-mode', theme === 'dark');
            this.applyLoadingScreenTheme(theme === 'dark');
            localStorage.setItem('theme', theme);
            console.log(`テーマを適用: ${theme}`);
        },
        applyLoadingScreenTheme: function(isDark) {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.toggle('loading-screen-dark', isDark);
                loadingScreen.classList.toggle('loading-screen-light', !isDark);
            }
        }
    };

    // プロフィール画像トグル
    function setupProfileImageToggle() {
        const profileImage = document.getElementById('profileImage');
        if (!profileImage) return;

        const imagePaths = {
            default: '../myicon.png',
            alternate: '../myicon2.jpg'
        };

        let currentImage = imagePaths.default;

        // クリック/タップ処理
        const handleImageToggle = () => {
            currentImage = currentImage === imagePaths.default ? imagePaths.alternate : imagePaths.default;
            profileImage.src = currentImage;
            
            // リッチなアニメーション効果
            profileImage.style.transform = "scale(1.1)";
            setTimeout(() => {
                profileImage.style.transform = "scale(1)";
            }, 300);
        };

        // タッチデバイス用フィードバック
        const handleTouchStart = () => {
            profileImage.style.transition = "transform 0.2s ease";
            profileImage.style.transform = "scale(0.95)";
        };

        const handleTouchEnd = () => {
            profileImage.style.transform = "scale(1)";
        };

        // イベントリスナー登録
        profileImage.addEventListener('click', handleImageToggle);
        profileImage.addEventListener('touchstart', handleTouchStart, { passive: true });
        profileImage.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    // ダークモードトグル
    function setupDarkModeToggle() {
        const toggleButton = document.getElementById('toggle-dark-mode');
        if (!toggleButton) return;

        const handleToggle = () => {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            themeManager.applyTheme(isDarkMode ? 'dark' : 'light');
            
            // リッチなアニメーション
            toggleButton.style.transform = "rotate(360deg)";
            toggleButton.style.transition = "transform 0.5s ease";
            
            setTimeout(() => {
                toggleButton.style.transform = "rotate(0deg)";
                toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
            }, 500);
        };

        // タッチフィードバック
        const handleTouchStart = () => {
            toggleButton.style.transform = "scale(0.9)";
        };

        const handleTouchEnd = () => {
            toggleButton.style.transform = "scale(1)";
        };

        // イベントリスナー登録
        toggleButton.addEventListener('click', handleToggle);
        toggleButton.addEventListener('touchstart', handleTouchStart, { passive: true });
        toggleButton.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    // ローディング画面管理
    function setupLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (!loadingScreen) return;

        // アニメーション強化
        loadingScreen.style.opacity = "1";
        loadingScreen.style.transition = "opacity 0.5s ease";

        // スピナーアニメーション
        const spinner = loadingScreen.querySelector('.spinner');
        if (spinner) {
            spinner.style.animation = "spin 1s linear infinite, glow 2s ease-in-out infinite alternate";
        }

        // ローディング完了処理
        const handleLoadComplete = () => {
            loadingScreen.style.opacity = "0";
            
            const transitionEndHandler = () => {
                loadingScreen.style.display = 'none';
                loadingScreen.removeEventListener('transitionend', transitionEndHandler);
            };
            
            loadingScreen.addEventListener('transitionend', transitionEndHandler);
            
            // フォールバック
            setTimeout(() => {
                if (loadingScreen.style.display !== 'none') {
                    loadingScreen.style.display = 'none';
                }
            }, 1000);
        };

        // 最低2秒間表示
        setTimeout(handleLoadComplete, 2000);
    }

    // 言語メニュー管理
    function setupLanguageMenu() {
        const toggleButton = document.getElementById("language-toggle-button");
        const languageMenu = document.getElementById("language-menu");

        if (!toggleButton || !languageMenu) return;

        // メニュー開閉処理
        const toggleMenu = (e) => {
            e.stopPropagation();
            const isOpen = languageMenu.classList.toggle("open");
            
            // アニメーション効果
            if (isOpen) {
                languageMenu.style.display = "flex";
                setTimeout(() => {
                    languageMenu.style.opacity = "1";
                    languageMenu.style.transform = "translateY(0)";
                }, 10);
            } else {
                languageMenu.style.opacity = "0";
                languageMenu.style.transform = "translateY(10px)";
                setTimeout(() => {
                    languageMenu.style.display = "none";
                }, 300);
            }
        };

        // メニュー外をクリックで閉じる
        const closeMenuOnClickOutside = (e) => {
            if (!languageMenu.contains(e.target) && e.target !== toggleButton) {
                languageMenu.classList.remove("open");
                languageMenu.style.opacity = "0";
                languageMenu.style.transform = "translateY(10px)";
                setTimeout(() => {
                    languageMenu.style.display = "none";
                }, 300);
            }
        };

        // タッチホールド機能
        let touchTimer;
        const handleTouchStart = () => {
            touchTimer = setTimeout(() => {
                languageMenu.classList.add("open");
                languageMenu.style.display = "flex";
                setTimeout(() => {
                    languageMenu.style.opacity = "1";
                    languageMenu.style.transform = "translateY(0)";
                }, 10);
            }, 500);
        };

        const handleTouchEnd = () => {
            clearTimeout(touchTimer);
        };

        // イベントリスナー登録
        toggleButton.addEventListener("click", toggleMenu);
        document.addEventListener("click", closeMenuOnClickOutside);
        toggleButton.addEventListener("touchstart", handleTouchStart, { passive: true });
        toggleButton.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    // レスポンシブ調整
    function setupResponsiveHandlers() {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            const floatingButtons = document.getElementById("floating-buttons");

            if (floatingButtons) {
                floatingButtons.style.flexDirection = isMobile ? "row" : "column";
                floatingButtons.style.gap = isMobile ? "10px" : "15px";
            }
        };

        // 初期化とリサイズイベント登録
        handleResize();
        window.addEventListener("resize", handleResize);
    }

    // タッチデバイス検出と最適化
    function setupTouchOptimizations() {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchDevice) {
            // タッチフィードバックを追加
            const interactiveElements = document.querySelectorAll('button, a, .clickable-icon');
            
            interactiveElements.forEach(el => {
                el.style.transition = "transform 0.1s ease";
                
                el.addEventListener('touchstart', () => {
                    el.style.transform = "scale(0.95)";
                }, { passive: true });
                
                el.addEventListener('touchend', () => {
                    el.style.transform = "scale(1)";
                }, { passive: true });
            });
        }
    }

    // 初期化処理
    function initialize() {
        // テーマ適用
        const currentTheme = themeManager.getCurrentTheme();
        themeManager.applyTheme(currentTheme);

        // 各機能セットアップ
        setupProfileImageToggle();
        setupDarkModeToggle();
        setupLoadingScreen();
        setupLanguageMenu(); // 言語メニューを最初に初期化
        
        console.log("初期化完了 - モバイル対応版");
    }

    initialize();
});

// 言語切り替え関数（i18n.jsから呼び出される）
function changeLanguage(lang) {
    console.log(`言語を切り替え: ${lang}`);
    // 実際の言語切り替え処理はi18n.jsで実装
}