let days = document.querySelector("#days")
let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes")
let secunds = document.querySelector("#secunds")

let dd = document.querySelector("#dd")
let hh = document.querySelector("#hh")
let mm = document.querySelector("#mm")
let ss = document.querySelector("#ss")

let day_dot = document.querySelector(".day_dot")
let hr_dot = document.querySelector(".hr_dot")
let min_dot = document.querySelector(".min_dot")
let sec_dot = document.querySelector(".sec_dot")

let endDate = '01/01/2024 00:00:00';

let x = setInterval(function () {
    let now = new Date(endDate).getTime()
    let countDown = new Date().getTime()
    let distance = now - countDown;


    let d = Math.floor(distance / (1000 * 60 * 60 * 24))
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let s = Math.floor((distance % (1000 * 60)) / 1000)
    
    days.innerHTML = d + "<br><span>kun</span>";
    hours.innerHTML = h + "<br><span>soat</span>";
    minutes.innerHTML = m + "<br><span>minut</span>";
    secunds.innerHTML = s + "<br><span>sekund</span>";
    
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;


    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`
    hr_dot.style.transform = `rotateZ(${h * 15}deg)`
    min_dot.style.transform = `rotateZ(${m * 6}deg)`
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`


    if (distance < 0) {
        document.querySelector("#time").style.display = 'none'
        document.querySelector(".newYear").style.display = 'flex'
    }
})
let colors = ["red","snow","tan","gold","teal","lime","blue","aqua","crimson","violet","purple","green","yellow","pink","maroon"]
let salyut = document.querySelector(".salyut")
let iEL = document.querySelectorAll(".salyut i")
for (let i = 0; i < iEL.length; i++){
    let rn = Math.random() * 5;
    iEL[i].style.width = "2px"
    iEL[i].style.height = "8px"
    iEL[i].style.animationDelay = rn + "s"

}