var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var time = hour + ":" + minute;

var msg = document.getElementById("time")
msg.innerHTML = time

var image = document.getElementById("day-night-icon");
image.height = "20"

if (hour >=6 && hour <=18){
    image.src = "/images/sun_606795.png"
}
else{
    image.src = "./images/moon_606807.png"
}

update();