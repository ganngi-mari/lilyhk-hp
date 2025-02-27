// 多言語データ
const translations = {
  ja: {
    heroTitle: "Qwen - あなたのAIアシスタント",
    heroSubtitle: "最新のAI技術であなたのアイデアをサポートします。",
    heroCTA: "詳しく見る",
    aboutUsTitle: "会社概要",
    aboutUsList: [
      "企業名: Alibaba Cloud (アリババクラウド)",
      "所在地: 中国浙江省杭州市濱江区網商路699号",
      "設立年: 2009年",
      "資本金: 約75億米ドル（2023年時点）",
      "従業員数: 約24,000人（2023年時点）",
      "事業内容: クラウドコンピューティング、AI技術、ビッグデータ解析、セキュリティソリューションなど",
      "公式サイト: https://www.alibabacloud.com"
    ],
    historyTitle: "Qwenの誕生経緯",
    historyDescription:
      "Qwenは、Alibaba Cloudが開発した大規模な言語モデルです。自然言語処理技術を駆使し、人間らしい対話を実現するAIを目指して作られました。",
    featuresTitle: "Qwenの特徴",
    feature1Title: "自然な会話能力",
    feature1Description: "高度な言語モデルにより、人間らしい自然な会話を実現。",
    feature2Title: "多言語対応",
    feature2Description: "世界中の言語に対応し、グローバルなコミュニケーションをサポート。",
    feature3Title: "カスタマイズ性",
    feature3Description: "用途に応じて柔軟にカスタマイズ可能。",
    feature4Title: "クリエイティブなアイデア生成",
    feature4Description: "新しいアイデアやコンセプトを提案する力があります。",
    feature5Title: "膨大な知識データベース",
    feature5Description: "幅広い分野の知識を活用して質問に答えます。",
    feature6Title: "高速レスポンス",
    feature6Description: "瞬時に正確な回答を提供します。",
    feature7Title: "プライバシー保護",
    feature7Description: "ユーザーのプライバシーを最優先に考えています。",
    feature8Title: "継続的な学習",
    feature8Description: "常に新しい情報を学び続け、成長します。",
    feature9Title: "協力的なパートナーシップ",
    feature9Description: "企業や個人と協力して価値を創造します。",
    ctaLink: "今すぐQwenを試す！"
  },
  en: {
    heroTitle: "Qwen - Your AI Assistant",
    heroSubtitle: "Support your ideas with the latest AI technology.",
    heroCTA: "Learn More",
    aboutUsTitle: "Company Overview",
    aboutUsList: [
      "Company Name: Alibaba Cloud",
      "Location: No. 699 Wangshang Road, Binjiang District, Hangzhou, Zhejiang, China",
      "Year Established: 2009",
      "Capital: Approximately $7.5 billion (as of 2023)",
      "Employees: Approximately 24,000 (as of 2023)",
      "Business: Cloud computing, AI technology, big data analytics, security solutions, etc.",
      "Official Website: https://www.alibabacloud.com"
    ],
    historyTitle: "The Birth of Qwen",
    historyDescription:
      "Qwen is a large-scale language model developed by Alibaba Cloud. It was created to achieve human-like dialogue using advanced natural language processing technology.",
    featuresTitle: "Features of Qwen",
    feature1Title: "Natural Conversation Ability",
    feature1Description: "Achieves human-like natural conversations using advanced language models.",
    feature2Title: "Multilingual Support",
    feature2Description: "Supports languages worldwide for global communication.",
    feature3Title: "Customizability",
    feature3Description: "Flexible customization according to your needs.",
    feature4Title: "Creative Idea Generation",
    feature4Description: "Has the ability to propose new ideas and concepts.",
    feature5Title: "Extensive Knowledge Database",
    feature5Description: "Utilizes knowledge across a wide range of fields to answer questions.",
    feature6Title: "Fast Response",
    feature6Description: "Provides accurate answers instantly.",
    feature7Title: "Privacy Protection",
    feature7Description: "Prioritizes user privacy.",
    feature8Title: "Continuous Learning",
    feature8Description: "Continuously learns new information and grows.",
    feature9Title: "Collaborative Partnerships",
    feature9Description: "Creates value by collaborating with businesses and individuals.",
    ctaLink: "Try Qwen Now!"
  },
  "zh-HK": {
    heroTitle: "通義千問 - 您的AI助手",
    heroSubtitle: "用最新的AI技術支持您的創意。",
    heroCTA: "了解更多",
    aboutUsTitle: "公司概況",
    aboutUsList: [
      "公司名稱：阿里雲",
      "地址：中國浙江省杭州市濱江區網商路699號",
      "成立年份：2009年",
      "資本額：約75億美元（截至2023年）",
      "員工數：約24,000人（截至2023年）",
      "業務內容：雲端運算、AI技術、大數據分析、安全解決方案等",
      "官方網站：https://www.alibabacloud.com"
    ],
    historyTitle: "通義千問的誕生",
    historyDescription:
      "通義千問是由阿里雲開發的大規模語言模型，旨在利用先進的自然語言處理技術實現類似人類的對話。",
    featuresTitle: "通義千問的特點",
    feature1Title: "自然的對話能力",
    feature1Description: "利用先進的語言模型實現類似人類的自然對話。",
    feature2Title: "多語言支援",
    feature2Description: "支援全球語言，促進國際溝通。",
    feature3Title: "可定制性",
    feature3Description: "根據需求靈活定制。",
    feature4Title: "創意想法生成",
    feature4Description: "能夠提出新的想法和概念。",
    feature5Title: "龐大的知識數據庫",
    feature5Description: "利用廣泛領域的知識來回答問題。",
    feature6Title: "快速回應",
    feature6Description: "即時提供準確的答案。",
    feature7Title: "隱私保護",
    feature7Description: "以用戶隱私為優先考量。",
    feature8Title: "持續學習",
    feature8Description: "不斷學習新資訊並成長。",
    feature9Title: "合作夥伴關係",
    feature9Description: "與企業和個人合作創造價值。",
    ctaLink: "立即試用通義千問！"
  },
  "zh-CN": {
    heroTitle: "通义千问 - 您的AI助手",
    heroSubtitle: "用最新的AI技术支持您的创意。",
    heroCTA: "了解更多",
    aboutUsTitle: "公司概况",
    aboutUsList: [
      "公司名称：阿里云",
      "地址：中国浙江省杭州市滨江区网商路699号",
      "成立年份：2009年",
      "资本额：约75亿美元（截至2023年）",
      "员工数：约24,000人（截至2023年）",
      "业务内容：云计算、AI技术、大数据分析、安全解决方案等",
      "官方网站：https://www.alibabacloud.com"
    ],
    historyTitle: "通义千问的诞生",
    historyDescription:
      "通义千问是由阿里云开发的大规模语言模型，旨在利用先进的自然语言处理技术实现类似人类的对话。",
    featuresTitle: "通义千问的特点",
    feature1Title: "自然的对话能力",
    feature1Description: "利用先进的语言模型实现类似人类的自然对话。",
    feature2Title: "多语言支持",
    feature2Description: "支持全球语言，促进国际沟通。",
    feature3Title: "可定制性",
    feature3Description: "根据需求灵活定制。",
    feature4Title: "创意想法生成",
    feature4Description: "能够提出新的想法和概念。",
    feature5Title: "庞大的知识数据库",
    feature5Description: "利用广泛领域的知识来回答问题。",
    feature6Title: "快速回应",
    feature6Description: "即时提供准确的答案。",
    feature7Title: "隐私保护",
    feature7Description: "以用户隐私为优先考量。",
    feature8Title: "持续学习",
    feature8Description: "不断学习新资讯并成长。",
    feature9Title: "合作伙伴关系",
    feature9Description: "与企业和个人合作创造价值。",
    ctaLink: "立即试用通义千问！"
  },
  ru: {
    heroTitle: "Qwen - Ваш AI-ассистент",
    heroSubtitle: "Поддержите свои идеи с помощью новейших технологий ИИ.",
    heroCTA: "Узнать больше",
    aboutUsTitle: "Обзор компании",
    aboutUsList: [
      "Название компании: Alibaba Cloud",
      "Адрес: No. 699 Wangshang Road, Binjiang District, Hangzhou, Zhejiang, Китай",
      "Год основания: 2009",
      "Капитал: Примерно $7.5 миллиард (на 2023 год)",
      "Сотрудники: Примерно 24,000 (на 2023 год)",
      "Бизнес: Облачные вычисления, технологии ИИ, анализ больших данных, решения для безопасности и т.д.",
      "Официальный сайт: https://www.alibabacloud.com"
    ],
    historyTitle: "Рождение Qwen",
    historyDescription:
      "Qwen — это крупномасштабная языковая модель, разработанная Alibaba Cloud. Она была создана для достижения человеческого диалога с использованием передовых технологий обработки естественного языка.",
    featuresTitle: "Особенности Qwen",
    feature1Title: "Естественная способность к диалогу",
    feature1Description: "Достигает человеческих естественных разговоров с помощью передовых языковых моделей.",
    feature2Title: "Поддержка нескольких языков",
    feature2Description: "Поддерживает языки по всему миру для глобального общения.",
    feature3Title: "Настройка",
    feature3Description: "Гибкая настройка в зависимости от ваших потребностей.",
    feature4Title: "Генерация творческих идей",
    feature4Description: "Способен предлагать новые идеи и концепции.",
    feature5Title: "Обширная база знаний",
    feature5Description: "Использует знания из широкого спектра областей для ответов на вопросы.",
    feature6Title: "Быстрый ответ",
    feature6Description: "Мгновенно предоставляет точные ответы.",
    feature7Title: "Защита конфиденциальности",
    feature7Description: "Приоритетом является защита конфиденциальности пользователей.",
    feature8Title: "Непрерывное обучение",
    feature8Description: "Постоянно учится новой информации и развивается.",
    feature9Title: "Сотрудничество",
    feature9Description: "Создает ценность, сотрудничая с предприятиями и частными лицами.",
    ctaLink: "Попробуйте Qwen сейчас!"
  },
  kk: {
    heroTitle: "Qwen - Сіздің AI көмекшіңіз",
    heroSubtitle: "Ең соңғы AI технологияларымен идеяларыңызды қолдаңыз.",
    heroCTA: "Көбірек білу",
    aboutUsTitle: "Компанияның шолуы",
    aboutUsList: [
      "Компания атауы: Alibaba Cloud",
      "Мекенжай: Қытай Халық Республикасы, Жәңгір өңірі, Ханжоу қаласы, Биньцзян ауданы, Ваншан жолы 699-үй",
      "Құрылған жылы: 2009",
      "Капитал: Шамамен $7.5 миллиард (2023 жылға дейін)",
      "Қызметкерлер: Шамамен 24,000 (2023 жылға дейін)",
      "Бизнес: Бұлтты есептеу, AI технологиялары, үлкен деректерді талдау, қауіпсіздік шешімдері және т.б.",
      "Ресми веб-сайт: https://www.alibabacloud.com"
    ],
    historyTitle: "Qwen пайда болуы",
    historyDescription:
      "Qwen — Alibaba Cloud компаниясының жасаған ірі масштабты тілдік моделі. Ол адамдар сияқты диалогтарды жүзеге асыру үшін табиғи тілді өңдеу технологияларын пайдаланады.",
    featuresTitle: "Qwen ерекшеліктері",
    feature1Title: "Табиғи сөйлесу қабілеті",
    feature1Description: "Жоғары деңгейдегі тілдік модельдер арқылы адамдар сияқты табиғи сөйлесуді жүзеге асырады.",
    feature2Title: "Көптілді қолдау",
    feature2Description: "Әлемдегі тілдерді қолдайды және халықаралық байланысты қолдайды.",
    feature3Title: "Баптау мүмкіндігі",
    feature3Description: "Қажеттіліктеріңізге сәйкес икемді баптау.",
    feature4Title: "Шығармашылық идеяларды генерациялау",
    feature4Description: "Жаңа идеялар мен концепцияларды ұсыну қабілеті бар.",
    feature5Title: "Кең ауқымды білім базасы",
    feature5Description: "Сұрақтарға жауап беру үшін кең ауқымды салалардағы білімді пайдаланады.",
    feature6Title: "Жылдам жауап",
    feature6Description: "Лезде дәл жауап береді.",
    feature7Title: "Құпиялылықты қорғау",
    feature7Description: "Пайдаланушылардың құпиялылығын алғашқы орынға қояды.",
    feature8Title: "Үздіксіз оқу",
    feature8Description: "Тұрақты жаңа ақпаратты оқиды және дамиды.",
    feature9Title: "Ынтымақтастық серіктестік",
        feature9Description: "Кәсіпорындар мен жеке тұлғалармен бірге құндылықтар жасайды.",
    ctaLink: "Qwen-ді қазір сынаңыз!"
  }
};

// 初期言語設定
let currentLang = navigator.language.startsWith("ja") ? "ja" :
                  navigator.language.startsWith("zh-HK") ? "zh-HK" :
                  navigator.language.startsWith("zh-CN") ? "zh-CN" :
                  navigator.language.startsWith("ru") ? "ru" :
                  navigator.language.startsWith("kk") ? "kk" : "en";

// 言語切り替え関数（更新部分）
function updateLanguage(lang) {
  currentLang = lang;

  // body要素にdata-lang属性を追加して言語を指定
  document.body.setAttribute("data-lang", lang);

  // 各要素を更新
  document.getElementById("hero-title").textContent = translations[lang].heroTitle;
  document.getElementById("hero-subtitle").textContent = translations[lang].heroSubtitle;
  document.getElementById("hero-cta").textContent = translations[lang].heroCTA;
  document.getElementById("about-us-title").textContent = translations[lang].aboutUsTitle;
  document.getElementById("about-us-list").innerHTML = translations[lang].aboutUsList.map(item => `<li>${item}</li>`).join("");
  document.getElementById("history-title").textContent = translations[lang].historyTitle;
  document.getElementById("history-description").textContent = translations[lang].historyDescription;
  document.getElementById("features-title").textContent = translations[lang].featuresTitle;
  document.getElementById("feature-1-title").textContent = translations[lang].feature1Title;
  document.getElementById("feature-1-description").textContent = translations[lang].feature1Description;
  document.getElementById("feature-2-title").textContent = translations[lang].feature2Title;
  document.getElementById("feature-2-description").textContent = translations[lang].feature2Description;
  document.getElementById("feature-3-title").textContent = translations[lang].feature3Title;
  document.getElementById("feature-3-description").textContent = translations[lang].feature3Description;
  document.getElementById("feature-4-title").textContent = translations[lang].feature4Title;
  document.getElementById("feature-4-description").textContent = translations[lang].feature4Description;
  document.getElementById("feature-5-title").textContent = translations[lang].feature5Title;
  document.getElementById("feature-5-description").textContent = translations[lang].feature5Description;
  document.getElementById("feature-6-title").textContent = translations[lang].feature6Title;
  document.getElementById("feature-6-description").textContent = translations[lang].feature6Description;
  document.getElementById("feature-7-title").textContent = translations[lang].feature7Title;
  document.getElementById("feature-7-description").textContent = translations[lang].feature7Description;
  document.getElementById("feature-8-title").textContent = translations[lang].feature8Title;
  document.getElementById("feature-8-description").textContent = translations[lang].feature8Description;
  document.getElementById("feature-9-title").textContent = translations[lang].feature9Title;
  document.getElementById("feature-9-description").textContent = translations[lang].feature9Description;
  document.getElementById("cta-link").textContent = translations[lang].ctaLink;
}

// 言語選択ドロップダウンのイベントリスナー
document.getElementById("lang-dropdown-btn").addEventListener("click", () => {
  const dropdown = document.getElementById("lang-dropdown");
  dropdown.classList.toggle("show-dropdown");
});

document.querySelectorAll("#lang-dropdown button").forEach(button => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    updateLanguage(lang);
    document.getElementById("lang-dropdown").classList.remove("show-dropdown");
    document.getElementById("lang-dropdown-btn").textContent = `🌐 ${button.textContent}`;
  });
});

// ローディング画面の処理
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  const mainContent = document.getElementById('main-content');

  // ローディングが完了したらメインコンテンツを表示
  setTimeout(() => {
    loader.style.display = 'none';
    mainContent.style.display = 'block';

    // AOSライブラリを初期化
    AOS.init();

    // 初期言語設定を適用
    updateLanguage(currentLang);
  }, 3000); // 3秒後にローディング終了
});
