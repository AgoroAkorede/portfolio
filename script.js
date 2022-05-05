 "use strict";


 const moreSkills=document.querySelector("#Button")

const positionMarkerLine1=document.getElementById('position_marker-line1');
const positionMarkerLine2=document.getElementById('position_marker-line2')
const positionMarkerLine3=document.getElementById('position_marker-line3')
const positionMarkerLine4=document.getElementById('position_marker-line4')
const positionMarker=document.getElementById('position_marker')
const preloader=document.getElementById('preloader')
const mainContent=document.getElementById('main_content')

function postionMarker1(){
    setTimeout(() => {
        positionMarkerLine1.classList.remove('active')
    }, 3000);
    positionMarkerLine1.classList.add('active')

    window.scrollTo(0,0)
}
function postionMarker2(){
    setTimeout(() => {
        positionMarkerLine2.classList.remove('active')
    }, 3000);
    positionMarkerLine2.classList.add('active')
   
    window.scrollTo(0,600)
}
function postionMarker3(){
    setTimeout(() => {
        positionMarkerLine3.classList.remove('active')
    }, 3000);
    positionMarkerLine3.classList.add('active')
    window.scrollTo(0,1200)
}
function postionMarker4(){
    setTimeout(() => {
        positionMarkerLine4.classList.remove('active')
    }, 3000);
    positionMarkerLine4.classList.add('active')
    
    window.scrollTo(0,1900)
}



function work () {
    const framework=document.getElementById('framework')
    if(framework.style.display==="flex"){
        framework.style.display='none' 
    }
    else{
        framework.style.display='flex' 
    }

}

moreSkills.addEventListener("click", work)
positionMarkerLine1.addEventListener("click", postionMarker1)
positionMarkerLine2.addEventListener("click", postionMarker2)
positionMarkerLine3.addEventListener("click", postionMarker3)
positionMarkerLine4.addEventListener("click", postionMarker4)


window.addEventListener("load",function(){
    preloader.style.display = "none"
    positionMarker.style.display="flex"
    // mainContent.style.display='flex'
})

const navMobile=document.getElementById('navbar_mobile')

const navMobileBar = document.getElementById('navbar_mobile-bar')
// const navMobileBar = document.getElementById('navbar_mobile-bar')


function toggleNav() {
    navMobile.classList.toggle('hide')
   
}

navMobileBar.addEventListener("click", toggleNav)