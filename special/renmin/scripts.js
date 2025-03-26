// ローディング画面の非表示
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300);
    }, 2000); // 2秒後にローディング画面を非表示
});

// 深色モード切り替え
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkModeButton.textContent = document.body.classList.contains('dark-mode') ? '切换浅色模式' : '切换深色模式';

    // ダークモードの状態をローカルストレージに保存
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// ページ読み込み時にダークモードの設定を復元
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleDarkModeButton.textContent = '切换浅色模式';
    }
});

// スクロール時のアニメーション
const sections = document.querySelectorAll('.animated-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// プロフィール画像のクリックイベント
const profileImage = document.getElementById('profileImage');
profileImage.addEventListener('click', () => {
    alert('欢迎来到我的个人空间！');
});