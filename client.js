var gameover = false;
var menu_start =false;
var start_button = document.querySelector("#start");
var training = document.querySelector(".training");
var spacebar = document.querySelector("#spacebar")
var timer1 = document.querySelector("#Timer1")
var training_game_over_menu = document.querySelector("#training_menu");
var main_menu = document.querySelector("#main_menu")
var effect = document.querySelector("#space_effect")
var stat= document.querySelector("#stat_img")

var training_over = false;
var training_starts= false;
var cps_score;
var start_time;
var training_score = document.querySelector("#score_training")
var timer2 = document.querySelector("#Timer2")
var left_time;


function reset(){
    stat.style.display="block"
    effect.style.display="none"
    start_button.style.display="block";
    training.style.display="none"
    spacebar.style.display="none"
    timer1.style.display="none"
    training_score.style.display="none"
    timer2.style.display="none"
    training_game_over_menu.style.display = "none"
    main_menu.style.display="none"
    start_button.style.animationPlayState = 'paused';
    main_menu.style.animationPlayState = 'paused';
    training.style.animationPlayState = 'paused';
    training_starts= false;
    training_over = false;
}
reset();
function countdown(){
    count =setInterval(()=>{
        left_time= left_time-0.0645;
        timer2.innerHTML ="time: "+left_time.toFixed(3)
        if(left_time<=0){
            clearInterval(count)
            timer2.innerHTML ="time: 0"
            training_over = true;
            training_starts = false;
            training_mainmenu()
        }
    },64.5)
}



function training_start(){
    stat.style.display="none"
    cps_score = 0;
    start_time =3;
    left_time= 10;
    timer1.innerHTML =start_time
    increase =1;
    training_score.innerHTML= "score: 0"
    first_time =setInterval(()=>{
        
        start_time= start_time-1;
        timer1.innerHTML =start_time

        if(start_time<=0){
            clearInterval(first_time)
        }
    },1000)
    
    setTimeout(() => {
        if(start_time==0){
            timer1.style.display="none"
            training_starts=true;
            training_score.style.display="block"
            timer2.style.display="block"
            countdown()
        }
    }, 3000);



}

window.addEventListener("keyup", (cps)=>{
    if(training_starts == true){
       
        if (cps.key === ' ' ){

            effect.style.display="block"
            effect.style.animation = "effect 0.1s 1 linear";//enable animation
            setTimeout(()=>{
                effect.style.display="none"
            },100)
            cps_score= cps_score + 1
            training_score.innerHTML = "score: " + cps_score

        } 
    }
})

function training_mainmenu(){
    if (localStorage.getItem("high score")>= cps_score){
        localStorage.setItem("high score", cps_score);
    }
    spacebar.style.display="none"
    timer2.style.display="none"
    training_score.style.display="none"
    training_game_over_menu.style.display="block"
    training_game_over_menu.innerHTML="score: "+cps_score/10 +"click/s" +"\n" +등수 +"th"
    main_menu.style.display="block"
    effect.style.display="none"
}


main_menu.addEventListener("click",()=>{
    main_menu.style.animation = "effect 0.3s 1 linear";
    start_button.style.animation = "effect 0.3s 1 linear";
    setTimeout(()=>{
        reset()
    },300)
})

start_button.addEventListener("click",(start_click)=>{//add animation
    start_button.style.animation = "effect 0.3s 1 linear";
    setTimeout(()=>{
        start_button.style.display="none"
        training.style.display ="block"
    },300)

    
})


training.addEventListener("click",(start_click)=>{//add animation
    training.style.animation = "effect 0.3s 1 linear";
    setTimeout(()=>{
        training.style.display="none"
        spacebar.style.display ="block"
        timer1.style.display="block"
        training_start()
    },300)
})

stat.addEventListener("click",()=>{
    reset()
    start_button.style.display="none"
    stat.style.display="none"
    main_menu.style.display="block"
    training_menu.style.display="block"
})

