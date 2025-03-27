// 季節判定と初期設定
document.addEventListener('DOMContentLoaded', () => {
  // 季節クラスを追加
  const today = new Date();
  const month = today.getMonth() + 1;
  
  if (month >= 3 && month <= 5) document.body.classList.add('spring');
  else if (month >= 6 && month <= 8) document.body.classList.add('summer');
  else if (month >= 9 && month <= 11) document.body.classList.add('autumn');
  else document.body.classList.add('winter');

  // クリスマスモード (12/24-1/3)
  if ((month === 12 && today.getDate() >= 24) || 
      (month === 1 && today.getDate() <= 3)) {
    document.body.classList.add('xmas-mode');
  }

  // キラキラエフェクト
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

  // コンソールメッセージ
  console.log(
    "%c🎀 ようこそ 陳麗華の實驗室へ 🎀\n" + 
    "%cここを見つけたあなたに特別なメッセージ！\n" +
    "このサイトは愛と技術とDeepseekちゃんで作られています✨",
    "color: #ff9a9e; font-size: 16px; font-weight: bold;",
    "color: #5d3a3a; font-size: 12px;"
  );
});