let userName = prompt("Adınızı Giriniz: ")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName.length > 0 ? userName : "Kullanıcı Bulunamadı!"}`

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function showTime(){
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = days[today.getDay()];
    let info = document.querySelector ("#myClock")
    info.innerHTML = `${hour}:${minute}:${second}:${day}`
}

setInterval(showTime, 1000);
showTime();