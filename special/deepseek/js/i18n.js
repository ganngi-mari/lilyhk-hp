/**
 * DeepSeek 多言語対応システム
 * 対応言語: 简体中文(zh-hans), 繁體中文(zh-hant), English(en), 日本語(ja), Русский(ru), 廣東話(cantonese)
 */

class I18nSystem {
    constructor() {
      this.languages = ['zh-hans', 'zh-hant', 'en', 'ja', 'ru', 'cantonese'];
      this.currentLang = 'zh-hans'; // デフォルトは簡体字中国語
      this.translations = {};
      this.loaded = false;
      
      // 言語リソースのベースURL
      this.basePath = 'assets/translations/';
      
      this.init();
    }
  
    async init() {
      // ブラウザ言語を自動検出
      const browserLang = this.detectBrowserLanguage();
      this.currentLang = this.isSupported(browserLang) ? browserLang : 'zh-hans';
      
      // 翻訳をロード
      await this.loadTranslations(this.currentLang);
      this.applyTranslations();
      
      // 言語切替イベントを登録
      this.bindLanguageSwitcher();
      
      // HTMLのlang属性を更新
      document.documentElement.lang = this.currentLang;
      this.loaded = true;
    }
  
    // ブラウザ言語を検出
    detectBrowserLanguage() {
      const navLang = navigator.language || navigator.userLanguage;
      if (navLang.startsWith('zh')) {
        return navLang.includes('TW') || navLang.includes('HK') ? 'zh-hant' : 'zh-hans';
      }
      if (navLang.startsWith('ja')) return 'ja';
      if (navLang.startsWith('ru')) return 'ru';
      if (navLang.startsWith('en')) return 'en';
      return 'zh-hans'; // デフォルト
    }
  
    // 対応言語かチェック
    isSupported(lang) {
      return this.languages.includes(lang);
    }
  
    // 翻訳ファイルをロード
    async loadTranslations(lang) {
      try {
        const response = await fetch(`${this.basePath}${lang}.json`);
        if (!response.ok) throw new Error('Network response was not ok');
        this.translations = await response.json();
      } catch (error) {
        console.error(`Failed to load ${lang} translations:`, error);
        // フォールバックとして簡体字中国語をロード
        if (lang !== 'zh-hans') {
          await this.loadTranslations('zh-hans');
        }
      }
    }
  
    // ページに翻訳を適用
    applyTranslations() {
      // data-i18n属性を持つ全要素を更新
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = this.translations;
        
        keys.forEach(key => {
          translation = translation?.[key];
        });
        
        if (translation !== undefined) {
          if (element.tagName === 'INPUT' && element.type === 'placeholder') {
            element.placeholder = translation;
          } else {
            element.textContent = translation;
          }
        }
      });
      
      // data-i18n-html属性を持つ要素のinnerHTMLを更新
      document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const keys = element.getAttribute('data-i18n-html').split('.');
        let translation = this.translations;
        
        keys.forEach(key => {
          translation = translation?.[key];
        });
        
        if (translation !== undefined) {
          element.innerHTML = translation;
        }
      });
      
      // 画像の翻訳（data-i18n-src）
      document.querySelectorAll('[data-i18n-src]').forEach(element => {
        const keys = element.getAttribute('data-i18n-src').split('.');
        let translation = this.translations;
        
        keys.forEach(key => {
          translation = translation?.[key];
        });
        
        if (translation !== undefined) {
          element.src = translation;
        }
      });
    }
  
    // 言語切替イベントをバインド
    bindLanguageSwitcher() {
      document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', async (e) => {
          const lang = e.currentTarget.getAttribute('data-lang');
          if (this.currentLang !== lang && this.isSupported(lang)) {
            this.currentLang = lang;
            await this.loadTranslations(lang);
            this.applyTranslations();
            document.documentElement.lang = lang;
            
            // カスタムイベントを発行
            const event = new CustomEvent('languageChanged', { detail: { lang } });
            document.dispatchEvent(event);
          }
        });
      });
    }
  
    // 現在の言語を取得
    getCurrentLanguage() {
      return this.currentLang;
    }
  
    // 翻訳を直接取得（プログラムで使用）
    t(key) {
      const keys = key.split('.');
      let result = this.translations;
      
      keys.forEach(k => {
        result = result?.[k];
      });
      
      return result || key; // 翻訳がない場合はキーを返す
    }
  }
  
  // グローバルにインスタンス化
  document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18nSystem();
  });
  
  /**
   * jQueryプラグインとしても登録
   * 使用例: $('[data-i18n]').localize();
   */
  if (typeof jQuery !== 'undefined') {
    jQuery.fn.localize = function() {
      if (window.i18n?.loaded) {
        window.i18n.applyTranslations();
      } else {
        document.addEventListener('i18nReady', () => {
          window.i18n.applyTranslations();
        });
      }
      return this;
    };
  }