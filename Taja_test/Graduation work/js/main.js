// https://www.youtube.com/watch?v=_CsGSE5gwTA&t=1327s
// 사용 변수
let prog = 0;
let right = 0;
// let time = 9;
// let isPalying = false;
let words = [];
let last = 7;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const progressDisplay = document.querySelector('.word-Progress');
const wordRight = document.querySelector('.word-right');
// console.log(wordInput)

init();

function init(){
    wordInput.focus();
    getWords();
    wordInput.addEventListener('input', enterkey)
}

// 단어 불러오기
function getWords(){
    words = [
        '낮말은 새가 듣고 밤말은 쥐가 듣는다', 
        '가난 구제는 지옥 늧이라',
        '개팔자가 상팔자', '곁집 잔치에 낯을 낸다',
        '고래 싸움에 새우 등 터진다', '고인 물은 썩는다',
        '까마귀 날자 배 떨어진다.', '꿈보다 해몽이라',
        '꽃 본 나비 불을 헤아리랴'];
}


// wordInput.addEventListener('input', checkMatch)
    // console.log(wordInput.value === wordDisplay.innerText)
    // , 다를 경우 글씨를 빨간색으로 하고 싶어!
    
    // 주어진 문장과 같을 시 점수 추가 및 문장 초가화, 점수 추가

// Enter키를 누를 시 진행도 추가 (완료 됐다는 의미로 받음)
// 함수 안에 추가 조건으로 문장과 같을 시 점수추가

//단어 일치 체크
function checkMatch(){
    if(wordInput.value === wordDisplay.innerText){
        right++;
        wordRight.innerText = right;
        wordInput.value = "";

        

    }
}

function enterkey() {
    if (window.event.keyCode == 13){
        prog++;
        progressDisplay.innerText = prog;
        if(wordInput.value === wordDisplay.innerText){
            right++;
            wordRight.innerText = right;
        }
        wordInput.value = "";
        const randomIndex = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomIndex]
    }

    function tag () {
        let progress = document.querySelector('.progressTag')
        let interval = 1
        let updatesPerSecond = 1000 / 60
        let end = progress.max * (prog/last)
        console.log(prog);
      
        function animator () {
          progress.value = progress.value + interval
          if ( progress.value + interval < end){
            setTimeout(animator, updatesPerSecond);
          } else { 
            progress.value = end
          }
        }
      
        setTimeout(() => {
          animator()
        }, updatesPerSecond)
      }
      
      tag()

    if(prog === last){
        alert("타자 검사가 완료되었습니다!");
        prog = 0; right = 0;
        progressDisplay.innerText = prog;
        wordRight.innerText = right;
        wordDisplay.innerText = "Test 시작";
    }
}



// 영어로 타자검정을 할 때 대소문자 구분 안하는 법
/*
wordInput.addEventListener('input', ()=>{
    console.log(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase())
}) */ 

// setInterval(countDown, 1000);

// 카운트다운을 하고 싶을 때
/* function countDown(){
    time > 0 ? time -- : isPalying = false;
} */

//진행상태 바

