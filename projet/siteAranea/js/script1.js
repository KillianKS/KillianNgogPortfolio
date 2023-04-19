let p1 = document.getElementById("compteur");
let p2 = document.getElementById("compteur1");
let p3 = document.getElementById("compteur2");

var x = 12
var x1 = 1584
var x2 = 5

min = -500;
max = 2000;


setInterval(function(min,max){
    if (x>1){
        p1= Math.floor(Math.random() * 13) + -5;
        x = x+p1;
        document.getElementById("compteur").innerHTML = x;
    }
    else{
        x = x+1;
    }
   
}, 1000*5)

setInterval(function(min,max){
    p2= Math.floor(Math.random() * 2);
    x1 = x1+p2;
    document.getElementById("compteur1").innerHTML = x1;
 }, 1000*2)

 setInterval(function(min,max){
    if (x2 > 0){
        p3= Math.floor(Math.random() * 3) + -1;
        x2 = x2+p3;
        document.getElementById("compteur2").innerHTML = x2;
    } else{
        x2 = x2+1
    }
    
 }, 1000*3)


var BtnPopupCo = document.getElementById("BtnPopupCo");
var BtnPopupIns = document.getElementById("BtnPopupIns");
var overlay = document.getElementById("overlay");
var BtnClose = document.getElementById("BtnClose");



BtnPopupCo.addEventListener('click',OuverturePageConnection);
BtnPopupIns.addEventListener("click",OuverturePageInscription);
BtnClose.addEventListener("click",FermeturePage);
BtnClose2.addEventListener("click",FermeturePage2);



function OuverturePageConnection(){
    overlay.style.display = 'block';
    PopupCo.style.display = "block";
    body.style.webkitFilter = "blur(4px)";
}

function OuverturePageInscription(){
    overlay.style.display = 'block';
    PopupIns.style.display = "block";
}

function FermeturePage(){
    overlay.style.display = "none";
    PopupCo.style.display = "none";

}

function FermeturePage2(){
    overlay.style.display = "none";
    PopupIns.style.display = "none";

}
