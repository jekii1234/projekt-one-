let answer_div = document.querySelectorAll('.answer div');
let answer = document.querySelector('.answer')
let btn_start = document.querySelector('.start button');
let question = document.querySelector('.question')
let start = document.querySelector('.start')

let correct_index = 0

let correct_answer = 0
let add_quest = 0

btn_start.addEventListener('click', function(){
    start.style.display = 'none'
    answer.style.display = 'flex'
    question.style.display = 'block'
    startQuest()
    timeStart()
})

answer_div.forEach((div)=>{
    div.addEventListener('click', function(){
        if (correct_index == this.innerHTML){
            this.style.backgroundColor = 'green'
            correct_answer += 1
        } else{
            this.style.backgroundColor = 'red'
        }
        add_quest =+ 1 

        setTimeout(() => {
            this.style.backgroundColor = 'white'
            startQuest()
        }, 1000)
        
    })
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function startQuest(){
    math = ['-', '+', 'x', ':']
    num1 = getRndInteger(1, 100)
    num2 = getRndInteger(1, 100)
    operan = math[getRndInteger(0,4)]

    question.innerHTML = `${num1} ${operan} ${num2}`

    let correct
    if (operan == '-') {
        correct= num1-num2
    }
    else if (operan == '+') {
        correct = num1 + num2
    }
    else if (operan == 'x') {
        correct = num1 * num2
    }
    else if (operan == ':') {
        correct = Math.floor(num1 / num2)
    }

    num_correct = getRndInteger(0, 5)
    answer_div[num_correct].innerHTML = correct

    for( let i = 0; i < answer_div.length; i++){
        if (i != num_correct){
            answer_div[i].innerHTML = getRndInteger(0, 100)
        }
    }

   correct_index = correct
}
let result = document.querySelector('.result')

let result_text = document.querySelector('.result h1')

function timeStart(){
setTimeout(() =>{
    result.style.display = 'block'
    answer.style.display = 'none'
    question.style.display = 'none'
}, 10000)
}