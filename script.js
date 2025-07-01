document.getElementById('startButton').addEventListener('click', function () {
  document.getElementById('intro').classList.add('hidden');
  const gameSection = document.getElementById('game');
  gameSection.classList.remove('hidden');
  gameSection.innerHTML = "<p>0701 守命人啟動成功。</p><p>請輸入關鍵字以解鎖紀錄……（後續互動功能開發中）</p>";
});
