const input = document.getElementById('input');
const button = document.getElementById('submit');
const output = document.getElementById('output');
const bgm = document.getElementById('bgm');
const muteBtn = document.getElementById('muteToggle');
const videoOverlay = document.getElementById('videoOverlay');
const typeSound = document.getElementById('typeSound');

let decodeStage = 0;
let muted = false;

function typeText(text, prefix = "0701：") {
  const p = document.createElement('p');
  output.appendChild(p);
  let i = 0;
  const fullText = prefix + text;
  const interval = setInterval(() => {
    p.textContent += fullText[i];
    i++;
    if (typeSound && !typeSound.muted) {
      typeSound.currentTime = 0;
      typeSound.play();
    }
    if (i >= fullText.length) clearInterval(interval);
    output.scrollTop = output.scrollHeight;
  }, 30);
}

function handleInput(value) {
  const keyword = value.trim();

  if (keyword === "我就是泡泡") {
    decodeStage = 1;
    typeText("識別確認中……啟動解碼程序。請輸入第二層密碼。提示：TJ博士最常說的話。");
  } else if (decodeStage === 1 && keyword === "TJ大美女") {
    decodeStage = 2;
    typeText("第二層通過。代碼一：25.034654");
  } else if (decodeStage === 2 && keyword === "生日快樂") {
    decodeStage = 3;
    typeText("第三層通過。代碼二：121.566310");
  } else if (decodeStage === 3 && keyword === "生日餐") {
    typeText("✅ 彩蛋解碼成功！最終代碼：25.034654, 121.566310");
    videoOverlay.classList.remove("hidden");
  } else if (keyword === "SW計畫") {
    typeText("SW計畫，全名 Soul Wake Project，由TJ博士發起，目的為復活泡泡。");
  } else if (keyword === "紅心8") {
    typeText("紅心8為AI模擬體，外型模仿泡泡，但思維架構失控，導致0713事件。");
  } else if (keyword === "泡泡") {
    typeText("泡泡學姊，原代號PB，資料遭抹除。你為何知道這個名字……？");
  } else if (keyword === "線索") {
    typeText("提示：你可以試試輸入 SW計畫、紅心8、泡泡，或……其他你記得的詞。");
  } else if (keyword === "結案") {
    typeText("目前僅啟動部分資料。尚需更多關鍵字與代碼。");
  } else {
    typeText("無法辨識輸入。請再試一次。");
  }
}

button.addEventListener('click', () => {
  if (input.value) {
    handleInput(input.value);
    input.value = '';
  }
});
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') button.click();
});

muteBtn.addEventListener('click', () => {
  muted = !muted;
  bgm.muted = muted;
  typeSound.muted = muted;
  muteBtn.textContent = muted ? '🔈' : '🔇';
});

window.addEventListener('DOMContentLoaded', () => {
  typeText("記錄裝置重啟中……識別殘留意識。");
  typeText("這裡是SW-0713事件最後留下的紀錄。你……終於來了嗎？");
  typeText("請輸入關鍵字開始解碼。");
});
