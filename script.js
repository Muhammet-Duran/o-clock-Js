
setInterval(digitalTime,1000);
let entryName = document.querySelector("#name-area");
let word = prompt("Adınız nedir?");
entryName.innerHTML = word;
function digitalTime(){
    let date =new Date();

    //saatbilgileri
    let hrs = date.getHours();
    let min = date.getMinutes();
    let secn = date.getSeconds();

    
    
    
    let day=date.getDate();
    let days =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    var gn =days[date.getDay()];
    
    
    day =(day < 10) ? "0"+day : day;
    hrs = (hrs < 10) ? "0"+hrs : hrs;
    min = (min < 10) ? "0"+min : min;
    secn = (secn < 10) ? "0"+secn :secn;

    let times =`${hrs}:${min}:${secn} ${gn}`;
    document.getElementById("clock").innerHTML =times;

    


    console.log();

}

