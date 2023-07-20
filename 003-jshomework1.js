// isim bilgisi
let userName=prompt("Lutfen Adinizi Giriniz: ")

let nameDOM=document.querySelector(`#myName`)
nameDOM.innerHTML=userName

//Time
function time(){
let time= new Date();

let hour=time.getHours();
let minute=time.getMinutes();
let second=time.getSeconds();

let day =["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
let dayName=day[time.getDay()]

let timeDOM=document.querySelector(`#myClock`)
timeDOM.innerHTML=`${hour}:${minute}:${second} ${dayName}`;

}

time()

setInterval(zaman,1000);