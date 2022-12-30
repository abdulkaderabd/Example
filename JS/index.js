var Data = {
    d: ["PHOTO/crash.png", "AUDIO/crash.mp3"],
    f: ["PHOTO/tom3.png", "AUDIO/tom3.mp3"],
    g: ["PHOTO/tom2.png", "AUDIO/tom2.mp3"],
    h: ["PHOTO/tom1.png", "AUDIO/tom1.mp3"],
    j: ["PHOTO/snare.png", "AUDIO/snare.mp3"],
    k: ["PHOTO/kick.png", "AUDIO/kick.mp3"]
}

$("body").on('keypress', main)

function main(event) {
    var A = event.key;
    var temp = ['d', 'f', 'g', 'h', 'j', 'k'];
    if (temp.indexOf(A) >= 0) {
        changePhoto(A);
        changeAudio(A);
    }
}

function changePhoto(A) {
    $('img').attr('src', Data[A][0]);
    setTimeout(AA, 500);
    function AA() {
        $('img').attr('src', "PHOTO/orig.png")
    }
}

function changeAudio(A) {
    var audio = new Audio(Data[A][1]);
    audio.play();
}