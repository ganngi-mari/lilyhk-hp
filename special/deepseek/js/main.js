/**
 * DeepSeek メインアプリケーション
 * バージョン: 2.1 (上海・深圳テーマ対応)
 * 変更点:
 * - 言語スイッチャーをドロップダウン式に強化
 * - 深圳パーティクルエフェクトの統合
 * - 上海ネオンエフェクトの制御
 */

class DeepSeekApp {
  constructor() {
    this.isMobile = false;
    this.isTablet = false;
    this.isDesktop = false;
    this.isTouchDevice = false;
    this.preferredColorScheme = 'light';
    this.components = {};
    this.currentTheme = 'default';
    
    this.init();
  }

  init() {
    this.detectEnvironment();
    this.setupEventListeners();
    this.initComponents();
    this.monitorPerformance();
    this.checkAccessibility();
    this.setupThemeEffects(); // 新規追加
  }

  // 環境検出（変更なし）
  detectEnvironment() {
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const viewportWidth = window.innerWidth;
    this.isMobile = viewportWidth <= 768;
    this.isTablet = viewportWidth > 768 && viewportWidth <= 1024;
    this.isDesktop = viewportWidth > 1024;
    this.preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    document.body.classList.add(
      this.isTouchDevice ? 'touch-device' : 'pointer-device',
      this.isMobile ? 'mobile' : this.isTablet ? 'tablet' : 'desktop',
      `${this.preferredColorScheme}-mode`
    );
  }

  // イベントリスナー設定（新規追加あり）
  setupEventListeners() {
    // カラースキーマ変更検出（変更なし）
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.preferredColorScheme = e.matches ? 'dark' : 'light';
      document.body.classList.remove('dark-mode', 'light-mode');
      document.body.classList.add(`${this.preferredColorScheme}-mode`);
      this.dispatchEvent('colorSchemeChanged', { scheme: this.preferredColorScheme });
    });

    // ビューポート変更検出（変更なし）
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newViewportWidth = window.innerWidth;
        const prevDeviceType = this.isMobile ? 'mobile' : this.isTablet ? 'tablet' : 'desktop';
        
        this.isMobile = newViewportWidth <= 768;
        this.isTablet = newViewportWidth > 768 && newViewportWidth <= 1024;
        this.isDesktop = newViewportWidth > 1024;
        
        const newDeviceType = this.isMobile ? 'mobile' : this.isTablet ? 'tablet' : 'desktop';
        
        if (prevDeviceType !== newDeviceType) {
          document.body.classList.remove(prevDeviceType);
          document.body.classList.add(newDeviceType);
          this.dispatchEvent('deviceTypeChanged', { type: newDeviceType });
        }
      }, 200);
    });

    // 新規追加: 言語変更イベント（ドロップダウン対応）
    document.addEventListener('languageChanged', (e) => {
      this.handleLanguageChange(e.detail.lang);
      this.updateThemeBasedOnLanguage(e.detail.lang);
    });
  }

  // コンポーネント初期化（新規追加あり）
  initComponents() {
    this.components = {
      navigation: this.initNavigation(),
      analytics: this.initAnalytics(),
      videoPlayer: this.initVideoPlayers(),
      languageSwitcher: this.initLanguageSwitcher(), // 新規追加
      particleController: this.initParticles() // 新規追加
    };
  }

  // 新規追加: 言語スイッチャー初期化
  initLanguageSwitcher() {
    const dropdownBtn = document.querySelector('.language-dropdown-btn');
    const dropdown = document.querySelector('.language-dropdown');

    if (dropdownBtn && dropdown) {
      // クリックイベントを追加
      dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = dropdownBtn.getAttribute('aria-expanded') === 'true';
        dropdownBtn.setAttribute('aria-expanded', !isExpanded);
        dropdown.classList.toggle('show');
        
        // アイコンの回転アニメーション
        const icon = dropdownBtn.querySelector('.dropdown-icon');
        icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
      });

      // ドキュメント全体のクリックで閉じる
      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) {
          dropdownBtn.setAttribute('aria-expanded', 'false');
          dropdown.classList.remove('show');
          dropdownBtn.querySelector('.dropdown-icon').style.transform = 'rotate(0deg)';
        }
      });

      // 言語選択時の処理
      dropdown.querySelectorAll('button[data-lang]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const lang = e.currentTarget.getAttribute('data-lang');
          if (window.i18n) {
            window.i18n.setLanguage(lang);
          }
        });
      });
    }
  }
}

  // 新規追加: パーティクル初期化
  initParticles() {
    const container = document.querySelector('.particle-animation');
    if (!container) return null;

    const particleCount = this.isMobile ? 30 : 100;
    for (let i = 0; i < particleCount; i++) {
      this.createParticle(container);
    }

    return {
      addParticle: () => this.createParticle(container),
      reset: () => {
        container.innerHTML = '';
        for (let i = 0; i < particleCount; i++) {
          this.createParticle(container);
        }
      }
    };
  }

  // 新規追加: パーティクル生成
  createParticle(container) {
    const particle = document.createElement('div');
    const isBuilding = Math.random() > 0.8;
    
    if (isBuilding) {
      particle.className = 'shenzhen-particle';
      particle.style.height = `${Math.random() * 50 + 30}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
    } else {
      particle.className = 'particle';
      particle.style.width = `${Math.random() * 3 + 1}px`;
      particle.style.height = `${Math.random() * 3 + 1}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 15 + 5}s`;
    }

    container.appendChild(particle);
  }

  // 新規追加: テーマエフェクト設定
  setupThemeEffects() {
    // 上海ネオンエフェクト
    const neonElements = document.querySelectorAll('.neon-text');
    neonElements.forEach(el => {
      el.style.animation = 'shanghai-neon 2s infinite alternate';
    });

    // 深圳タワーライト
    if (document.querySelector('.shenzhen-theme')) {
      this.initShenzhenLights();
    }
  }

  // 新規追加: 深圳ライト生成
  initShenzhenLights() {
    const container = document.querySelector('.hero-section');
    if (!container) return;

    const lightCount = this.isMobile ? 10 : 20;
    for (let i = 0; i < lightCount; i++) {
      const light = document.createElement('div');
      light.className = 'tower-light';
      light.style.left = `${Math.random() * 100}%`;
      light.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(light);
    }
  }

  // 既存メソッド（変更なし）
  initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (navToggle && mainNav) {
      navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', mainNav.classList.contains('active'));
      });
      
      return {
        toggle: () => mainNav.classList.toggle('active'),
        isOpen: () => mainNav.classList.contains('active')
      };
    }
    return null;
  }

  // 既存メソッド（変更なし）
  initAnalytics() {
    const trackEvent = (eventName, payload = {}) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', eventName, payload);
      }
      console.log('Event tracked:', eventName, payload);
    };
    
    document.querySelectorAll('[data-track]').forEach(el => {
      const eventName = el.getAttribute('data-track');
      el.addEventListener('click', () => trackEvent(eventName));
    });
    
    return { trackEvent };
  }

  // 既存メソッド（変更なし）
  initVideoPlayers() {
    const videos = document.querySelectorAll('video[data-video]');
    videos.forEach(video => {
      video.addEventListener('play', () => {
        this.components.analytics.trackEvent('video_play', {
          video_id: video.getAttribute('id')
        });
      });
    });
    return videos;
  }

  // 既存メソッド（変更なし）
  handleLanguageChange(newLang) {
    this.updateLanguageSpecificResources(newLang);
    this.components.analytics.trackEvent('language_change', { language: newLang });
  }

  // 新規追加: 言語に基づくテーマ更新
  updateThemeBasedOnLanguage(lang) {
    // 中国語系の場合は深圳テーマを強化
    if (['zh-hans', 'zh-hant', 'cantonese'].includes(lang)) {
      document.body.classList.add('chinese-theme');
      if (this.components.particleController) {
        this.components.particleController.reset();
      }
    } else {
      document.body.classList.remove('chinese-theme');
    }
  }

  // 既存メソッド（変更なし）
  updateLanguageSpecificResources(lang) {
    document.querySelectorAll(`img[data-lang-src]`).forEach(img => {
      const srcTemplate = img.getAttribute('data-lang-src');
      const newSrc = srcTemplate.replace('{lang}', lang);
      img.src = newSrc;
    });
  }

  // 既存メソッド（変更なし）
  monitorPerformance() {
    if ('PerformanceObserver' in window) {
      const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`[Performance] ${entry.name}: ${entry.duration.toFixed(2)}ms`);
        }
      });
      perfObserver.observe({ entryTypes: ['measure', 'paint'] });
    }

    window.addEventListener('load', () => {
      const timing = performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      console.log(`Page fully loaded in ${loadTime}ms`);
      if (loadTime > 3000) console.warn('Load time exceeds 3 seconds');
    });
  }

  // 既存メソッド（変更なし）
  checkAccessibility() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') document.body.classList.add('keyboard-navigation');
    });
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    document.querySelectorAll('img:not([alt])').forEach(img => {
      if (!img.hasAttribute('role') || img.getAttribute('role') !== 'presentation') {
        console.warn('Missing alt attribute on image:', img);
      }
    });
  }

  // 既存メソッド（変更なし）
  dispatchEvent(eventName, detail = {}) {
    const event = new CustomEvent(eventName, { detail });
    document.dispatchEvent(event);
  }
}

// jQueryプラグイン拡張（変更なし）
if (typeof jQuery !== 'undefined') {
  jQuery.fn.deepSeekComponent = function(componentName, options) {
    if (window.deepSeekApp?.components[componentName]) {
      return window.deepSeekApp.components[componentName];
    }
    return null;
  };
}

// アプリケーション初期化（変更なし）
document.addEventListener('DOMContentLoaded', () => {
  window.deepSeekApp = new DeepSeekApp();
  if (process.env.NODE_ENV === 'development') {
    window.$ds = window.deepSeekApp;
  }
});