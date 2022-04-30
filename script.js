let dani=document.querySelector(".dani")
let sati=document.querySelector(".sati")
let minute=document.querySelector(".minute")
let sekunde=document.querySelector(".sekunde")

let trenutnoVrijeme={
    dani: "0",
    sati: "0",
    minute: "0",
    sekunde: "0",
}

let datum1 = new Date("05/15/2022")
let datum2 = new Date()

let vrijemeMili = Math.floor( datum2.getTime() - datum1.getTime())*-1;
console.log(vrijemeMili)

const interval = setInterval(function() {
    vrijemeMili=vrijemeMili-1000
    
    postaviVrijeme()
   // console.log(trenutnoVrijeme.dani+" "+trenutnoVrijeme.sati+" "+trenutnoVrijeme.minute+" "+trenutnoVrijeme.sekunde)
   console.log(trenutnoVrijeme.dani)
    promijeniVrijeme()
}, 1000)


function postaviVrijeme(){
    trenutnoVrijeme.sekunde=Math.floor((vrijemeMili/1000)%60)
    trenutnoVrijeme.minute=Math.floor((vrijemeMili/1000/60)%60)
    trenutnoVrijeme.sati=Math.floor((vrijemeMili/1000/60/60)%24)
    trenutnoVrijeme.dani=Math.floor((vrijemeMili/1000/60/60/24))

    if((trenutnoVrijeme.sekunde===0)&&(trenutnoVrijeme.minute===0)&&(trenutnoVrijeme.sati===0)&&(trenutnoVrijeme.dani==0))
    {
        clearInterval(interval);
    }
}

function promijeniVrijeme(){
    dani.innerHTML=trenutnoVrijeme.dani
    sati.innerHTML=trenutnoVrijeme.sati
    minute.innerHTML=trenutnoVrijeme.minute
    sekunde.innerHTML=trenutnoVrijeme.sekunde
}
 
