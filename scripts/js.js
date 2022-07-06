var effectText = function(id, text, sec) {
    let length = text.length;
    var el = document.getElementById(id);
    let count = 0;
    let inter = setInterval(function() {
        if (count >= length - 1) clearInterval(inter);
        el.textContent += text.split("")[count];
        count++;
    }, sec);
}

document.getElementById("title").classList.add("fadein");
effectText("title", "주주의 17번째 생일을 축하합니다!", 150);