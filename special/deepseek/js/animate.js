/**
 * DeepSeek アニメーション制御システム
 * 特徴:
 * - スクロール連動アニメーション
 * - インタラクティブホバー効果
 * - パーティクルアニメーション
 * - 3Dカード効果
 */

class AnimationController {
    constructor() {
      this.animationElements = [];
      this.init();
    }
  
    init() {
      // スクロールアニメーション要素を収集
      this.collectAnimationElements();
      
      // イベントリスナーを設定
      this.setupEventListeners();
      
      // 初期アニメーションを実行
      this.runInitialAnimations();
      
      // リサイズオブザーバー
      this.setupResizeObserver();
    }
  
    collectAnimationElements() {
      // スクロール連動アニメーション
      this.animationElements = Array.from(document.querySelectorAll('[data-animate]'));
      
      // 3Dカード効果
      this.cards = Array.from(document.querySelectorAll('.card-3d'));
      
      // インタラクティブボタン
      this.buttons = Array.from(document.querySelectorAll('.interactive-btn'));
      
      // パーティクルコンテナ
      this.particleContainer = document.querySelector('.particle-animation');
    }
  
    setupEventListeners() {
      // スクロールイベント
      window.addEventListener('scroll', () => this.handleScroll());
      
      // リサイズイベント
      window.addEventListener('resize', () => this.handleResize());
      
      // 言語変更時の再初期化
      document.addEventListener('languageChanged', () => this.refreshAnimations());
      
      // 3Dカード効果
      this.cards.forEach(card => {
        card.addEventListener('mousemove', (e) => this.handleCardMove(e, card));
        card.addEventListener('mouseleave', () => this.handleCardLeave(card));
      });
      
      // ボタンホバー効果
      this.buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => this.handleButtonHover(btn));
        btn.addEventListener('mouseleave', () => this.handleButtonLeave(btn));
      });
    }
  
    runInitialAnimations() {
      // 初期表示アニメーション
      this.animateOnLoad();
      
      // スクロール位置をチェック
      this.handleScroll();
      
      // パーティクルを初期化
      if (this.particleContainer) {
        this.initParticles();
      }
    }
  
    handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      
      this.animationElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementVisible = 150;
        
        if (scrollY > elementTop - windowHeight + elementVisible) {
          el.classList.add('active');
        }
      });
    }
  
    handleResize() {
      this.animationElements.forEach(el => {
        el.classList.remove('active');
      });
      
      setTimeout(() => {
        this.handleScroll();
      }, 100);
    }
  
    refreshAnimations() {
      this.animationElements.forEach(el => {
        el.classList.remove('active');
      });
      
      setTimeout(() => {
        this.handleScroll();
      }, 300);
    }
  
    animateOnLoad() {
      // ロード時のシーケンシャルアニメーション
      const elements = document.querySelectorAll('[data-animate-onload]');
      
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-in');
        }, index * 200);
      });
    }
  
    handleCardMove(e, card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angleX = (y - centerY) / 20;
      const angleY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
      card.style.boxShadow = `
        ${(centerX - x) / 10}px ${(centerY - y) / 10}px 30px rgba(0, 102, 255, 0.3)
      `;
    }
  
    handleCardLeave(card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      card.style.boxShadow = '0 10px 20px rgba(0, 102, 255, 0.2)';
    }
  
    handleButtonHover(btn) {
      const light = document.createElement('div');
      light.className = 'btn-light-effect';
      btn.appendChild(light);
      
      const rect = btn.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      light.style.left = `${x}px`;
      light.style.top = `${y}px`;
      
      btn.classList.add('btn-hover');
      
      setTimeout(() => {
        light.style.transform = 'scale(20)';
        light.style.opacity = '0';
      }, 10);
      
      setTimeout(() => {
        light.remove();
      }, 300);
    }
  
    handleButtonLeave(btn) {
      btn.classList.remove('btn-hover');
    }
  
    initParticles() {
      // パーティクル生成
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        this.createParticle();
      }
    }
  
    createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // ランダムなプロパティ
      const size = Math.random() * 3 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      const color = `hsl(${Math.random() * 60 + 180}, 100%, 70%)`;
      
      // スタイル適用
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.background = color;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      this.particleContainer.appendChild(particle);
    }
  }
  
  // DOM読み込み後に初期化
  document.addEventListener('DOMContentLoaded', () => {
    window.animator = new AnimationController();
  });
  
  /**
   * jQueryプラグインとしての拡張
   * 使用例: $('.element').animateIn();
   */
  if (typeof jQuery !== 'undefined') {
    jQuery.fn.animateIn = function(options) {
      const settings = $.extend({
        delay: 0,
        duration: 0.5
      }, options);
      
      return this.each(function() {
        $(this).css({
          'transition-delay': `${settings.delay}s`,
          'transition-duration': `${settings.duration}s`
        }).addClass('animate-in');
      });
    };
  }