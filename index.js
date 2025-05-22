const topBar = document.getElementById("topBar");
const detectArea = document.getElementById("detectArea");
const cheeseCursor = document.getElementById("cheeseCursor");
const cursorDetectionBox =document.getElementById("cursorDetectionBox");
const body = document.getElementById("body");
const progressName = document.getElementsByClassName("progressName");
const bar = document.getElementsByClassName("bar");
const item = document.getElementsByClassName("item")

const blogItem = document.getElementsByClassName("blogItem")
const blogMenu = document.getElementById("blogMenu")

const text = ["Beginner","Developing","Fluent","Native"]

let load = 0; 
let textSel = 0;

var loadLangBar = setInterval(()=>{
    load++
    if(load<75){
        for(i = 0;i<3;i++){
             bar[i].style.width = `${load}%`;
        }
         if(load%25==0){
            textSel++;
             for(i = 0;i<3;i++){
                 progressName[i].textContent = text[textSel];
            }
         }
        for(i = 0;i<3;i++){
             progressName[i].style.left = `${load*0.7}%`;
        }
    }
    if(load>=75 && load<100){
        bar[0].style.width = `${load}%`;
        if(load%25==20){
            textSel++;
            progressName[0].textContent = text[textSel];
        }
         progressName[0].style.left = `${load*0.7}%`;
    }      
    if(load==100){
        clearInterval(loadLangBar);
    }},7)

window.addEventListener("mousemove",(e)=>{
        cursorDetectionBox.style.left = `${e.clientX}px`;
        cursorDetectionBox.style.top =`${e.clientY+window.scrollY}px`;
    })

setInterval(()=>{
    let x = cheeseCursor.offsetLeft;
    let y = cheeseCursor.offsetTop;
    let cursorLeft = cursorDetectionBox.offsetLeft;
    let cursorTop = cursorDetectionBox.offsetTop;
    let dx = (cursorLeft-x)/100;
    let dy = (cursorTop-y)/100;
    cheeseCursor.style.left = `${x+dx}px`;
    cheeseCursor.style.top = `${y+dy}px`;
},10)

detectArea.addEventListener("mouseover",(e)=>{
    let time = 0;
    setInterval(()=>{
    time++;
    if(time <= 1){
        topBar.style.animation = "scrollDown 0.1s linear forwards";
    }
    if(time==1){
        topBar.style.top = 0;
        topBar.style.animation = " ";
    }
},100)    


})

topBar.addEventListener("mouseleave",(e)=>{
    let time = 0
    setInterval(()=>{
    time++;
    if(time <= 1){
        topBar.style.animation = "scrollUp 0.1s linear forwards";
    }
    if(time==1){
        topBar.style.top = "-20%";
        topBar.style.animation = " ";

    }
    e.preventDefault();
},100)    
})

let isClick=0;
function showCursor(){
    isClick++
    if(isClick%2==1){
        cheeseCursor.style.opacity =1;
        cheeseCursor.style.zIndex = 100;

    }
    else{
         cheeseCursor.style.opacity =0;
        cheeseCursor.style.zIndex = -100;
         body.style.cursor = "default";
    }

}

function closeApp(){
    let darkScreen = document.getElementById("blackScreen")
    darkScreen.style.zIndex = 10000;
    let time = 0;
    setInterval(()=>{
            time++;
            if(time==3){
                window.location.href="main.html";
            }
        },100)
}


let loaded = [0];
let blogScreenY = blogMenu.offsetTop;

if(window.innerWidth>550){
    window.addEventListener("scroll",(e)=>{
        e.preventDefault();
        let scrollY = this.scrollY;
        let percentage = (1.1*scrollY/blogScreenY)*100;
        if(percentage>=40){
            let time = 0;
            let interval = setInterval(()=>{
                if(time==0){
                    for(i = 0;i<3;i++){
                        blogItem[i].style.animation = `showBlog 1.5s ${i*0.5+1}s ease-in-out forwards`;
                    }
                    
                }
                if(time==280){
                    for(i = 0;i<3;i++){
                        blogItem[i].style.animation = "";
                        blogItem[i].style.opacity = 1;
                        blogItem[i].style.top = 0;
                        loaded[0] = 1;
                        loadHoverAnimation();
                        clearInterval(interval);
                    }
                }
                time++;
            },10)            
        }
})


let academic = document.getElementById("academic");
let activities = document.getElementById("activities");
let work = document.getElementById("work");

function loadHoverAnimation(){
    academic.addEventListener("mouseover",(e)=>{
        academic.style.animation = "changeColor 0.2s linear forwards";
    })
    academic.addEventListener("mouseleave",(e)=>{
        academic.style.animation = "fadeColor 0.2s linear forwards";
    })

    activities.addEventListener("mouseover",(e)=>{
        activities.style.animation = "changeColor 0.2s linear forwards";
    })
    activities.addEventListener("mouseleave",(e)=>{
        activities.style.animation = "fadeColor 0.2s linear forwards";
    })

    work.addEventListener("mouseover",(e)=>{
        work.style.animation = "changeColor 0.2s linear forwards";
    })
    work.addEventListener("mouseleave",(e)=>{
        work.style.animation = "fadeColor 0.2s linear forwards";
    })
}

}
