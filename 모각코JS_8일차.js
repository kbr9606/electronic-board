var text = "수강신청올클기원";
var res = "";
var i = 0;
var letters = "0123456789ABCDEF";
var color = "#";
var set;
var h1 = document.getElementsByTagName("h1");

function randomColor() {
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color+=letters[Math.floor(Math.random() * 16)];
    }
    h1[0].style.color = color;
    console.log(color);
}

function manual() {
    randomColor();
    res+=text[i++];
    h1[0].innerHTML = res;

    if(i==8) {
        res = "";
        i = 0;
    }
}

function auto() {
    manual();
    set = setTimeout(auto, 900);
}

function stop() {
    clearTimeout(set);
}
