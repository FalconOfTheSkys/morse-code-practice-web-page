let main_body = document.getElementById("main-body");
let practice_body = document.getElementById("practice-body");
let result_body = document.getElementById("post-practice");
let map = new Map();
    map.set('A','.-');
    map.set('B','-...');
    map.set('C','-.-.');
    map.set('D','-..');
    map.set('E','.');
    map.set('F','..-.');
    map.set('G','--.');
    map.set('H','....');
    map.set('I','..');
    map.set('J','.---');
    map.set('K','-.-');
    map.set('L','.-..');
    map.set('M','--');
    map.set('N','-.');
    map.set('O','---');
    map.set('P','.--.');
    map.set('Q','--.-');
    map.set('R','.-.');
    map.set('S','...');
    map.set('T','-');
    map.set('U','..-');
    map.set('V','...-');
    map.set('W','.---');
    map.set('X','-..-');
    map.set('Y','-.--');
    map.set('Z','--..');
    const key = getRandomKey(map);

function start() {

    let main_body = document.getElementById("main-body");
    let practice_body = document.getElementById("practice-body");
    let result_body = document.getElementById("post-practice");
    main_body.hidden = true;
    practice_body.hidden = false;
    result_body.hidden = true;
    let question = document.getElementById("practice-box-q");

    //Change inner HTML
    question.innerHTML = "What is the morse for, "+key;

    
    
}

function cancel() {

    location.reload();
}

function submit() {
    let main_body = document.getElementById("main-body");
    let practice_body = document.getElementById("practice-body");
    let result_body = document.getElementById("post-practice");
    let answer = document.getElementById("practice-box-a-elm").value;
    let result_title = document.getElementById("result-title");
    main_body.hidden = true;
    practice_body.hidden = true;
    result_body.hidden = false;

    if(answer==map.get(key)){
        result_title.innerHTML = "Correct. It was "+map.get(key);
    }else{
        result_title.innerHTML = "Incorrect. Correct: "+map.get(key);
    }


}



// returns random key from Set or Map
function getRandomKey(collection) {
    let index = Math.floor(Math.random() * collection.size);
    let cntr = 0;
    for (let key of collection.keys()) {
        if (cntr++ === index) {
            return key;
        }
    }
}
