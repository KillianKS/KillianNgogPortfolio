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
