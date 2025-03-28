// =============================================
// 季節判定と初期設定
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const month = today.getMonth() + 1;

  // 季節クラスを追加
  if (month >= 3 && month <= 5) document.body.classList.add('spring');
  else if (month >= 6 && month <= 8) document.body.classList.add('summer');
  else if (month >= 9 && month <= 11) document.body.classList.add('autumn');
  else document.body.classList.add('winter');

  // クリスマスモード (12/24-1/3)
  if ((month === 12 && today.getDate() >= 24) || 
      (month === 1 && today.getDate() <= 3)) {
    document.body.classList.add('xmas-mode');
  }

  // コンソールメッセージ
  console.log(
    "%c🎀 ようこそ 陳麗華の實驗室へ 🎀\n" + 
    "%cここを見つけたあなたに特別なメッセージ！\n" +
    "このサイトは愛と技術で作られています✨",
    "color: #ff9a9e; font-size: 16px; font-weight: bold;",
    "color: #5d3a3a; font-size: 12px;"
  );
});

// =============================================
// キラキラエフェクト
// =============================================
document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.9) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1200);
  }
});

// =============================================
// マウス連動エフェクト
// =============================================
document.addEventListener('mousemove', (e) => {
  const container = document.querySelector('.container');
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.querySelector('.container').addEventListener('mouseleave', () => {
  document.querySelector('.container').style.transform = 'rotateY(0) rotateX(0)';
});

// =============================================
// 各島への個別エフェクト
// =============================================
document.querySelectorAll('.island').forEach(island => {
  island.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    island.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.05)`;
  });

  island.addEventListener('mouseleave', () => {
    island.style.transform = 'rotateY(0) rotateX(0) scale(1)';
  });
});

// =============================================
// スクロールエフェクト
// =============================================
document.addEventListener('scroll', () => {
  document.querySelectorAll('.scroll-fade-in').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
      el.classList.add('active');
    }
  });
});