let now; // グローバルスコープに移動

function updateClock() {
    now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 時間、分、秒が10未満の場合は、先頭に0を追加
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;

    greeting(); // 時計を更新するたびに挨拶も更新
}

// 1秒ごとにupdateClock関数を呼び出す
setInterval(updateClock, 1000);

// ページ読み込み時に一度時計を更新
updateClock();

function greeting() {
    const hours = now.getHours();
    let message;
    if (hours < 12) {
        message = 'おはようございます';
    } else if (hours < 18) {
        message = 'こんにちは';
    } else {
        message = 'こんばんは';
    }
    document.getElementById('greeting').innerText = message; // 挨拶を表示する要素のIDを 'greeting' と仮定
}