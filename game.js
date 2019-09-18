var stbtn = document.getElementById("stopbtn");
var rgbtn = document.getElementById("rightbtn");
var lfbtn = document.getElementById("leftbtn");
var size = (outerWidth/2)-70;
var rock =document.getElementById('rocket');
var fr =document.getElementById('fire');
var enemi =document.getElementById('enemy');
var game = document.getElementById("option");
var main = document.getElementById("gamebody");
var win = document.getElementById("win");
var scr = document.getElementById("score");
var s = document.getElementById("sr");
var movenemi = 0;
var trax = 0;
var z = 0;
document.onkeydown = checkKeycode;
var keycode;


function checkKeycode() {

if (window.event.keyCode == 13){
  go();
}
if (window.event.keyCode == 38){
  stop();
}
if (window.event.keyCode == 39){
  left();
}
if (window.event.keyCode == 37){
 right();
}
};






function go(){
  if (game.style.display=="block") {
  enemi.style.display = "block";
  lose.style.display="none";
  win.style.display="none";
  game.style.display="none";
  main.style.display="block";
  enemi1();
  enemidown();
}
  if (lose.style.display=="block") {
  location.reload();
}
};


function enemi1(){
      var width = ((outerWidth-70)/10)*((Math.random())*10);
      enemi.style.transform = "translateX(" + (width) + "px)";
}

// function enemi2(){
// var width = outerWidth-40;
// var id = setInterval(framenemi, 20);
//   function framenemi() {
//     if (movenemi <= 0) {
//       enemi1();
//     } else {
//       movenemi=movenemi-5;
//       enemi.style.transform = "translateX(" + (movenemi) + "px)";
//     }
// }
// }


function enemidown(){
  enemi.style.top = "0px";
  var a = enemi.style.top;
  var tp = parseInt(a);
  var dwn = setInterval(framenemi, 1000);
  function framenemi() {
    if (tp >= outerHeight-500) {
      clearInterval(dwn);
      enemi.style.top="-100px";
      s.innerHTML = z;
      lose.style.display="block";
      console.log('lose');
// var enmlf = enemi.getBoundingClientRect().left;
// var enmtp = enemi.getBoundingClientRect().top;
// var rcklf = rock.getBoundingClientRect().left;
// var rcktp = rock.getBoundingClientRect().top;
// if(Math.abs(Math.abs(enmlf)-Math.abs(rcklf))<45 && Math.abs(Math.abs(enmtp)-Math.abs(rcktp))<5){
//  lose.style.display="block";
//  main.style.display="none";
//  console.log('lose');
// }
    } else {
      tp=tp+5;
      enemi.style.top = "" + (tp) + "px";
    }
}
}
  
function stop(){
  fr.style.transform=rock.style.transform;
  fr.style.display="block";
  fire();
}



 function fire(){
  var tray = 120;
  var height=(outerHeight+120);
  var id = setInterval(frame, 10);
  function frame() {
    if (tray >= height) {
      clearInterval(id);
      fr.style.bottom = "120px";
      fr.style.display="none";
      tray = 120;
    } else {
      stbtn.addEventListener("click", function(){
    clearInterval(id);
    fr.style.bottom= "120px";
    });
      tray=tray+7;
      fr.style.bottom = "" + (tray) + "px";
      
var enmlf = enemi.getBoundingClientRect().left;
var enmtp = enemi.getBoundingClientRect().top;
var frlf = fr.getBoundingClientRect().left;
var frtp = fr.getBoundingClientRect().top;
if(Math.abs(Math.abs(enmlf)-Math.abs(frlf))<50 && Math.abs(Math.abs(enmtp)-Math.abs(frtp))<5){
 enemi1();
 z+=1000;
 scr.innerHTML = z;
 console.log('you win',z);
}
}
}
}

  function left() {
  var id = setInterval(framef, 15);
  function framef() {
    if (trax >= size) {
      clearInterval(id);
    } else {
    stbtn.addEventListener("click", function(){
    clearInterval(id);
    });
    rgbtn.addEventListener("click", function(){
    clearInterval(id);
    });
      trax=trax+5;
      rock.style.transform = "translateX(" + (trax) + "px)";
    }
}
}






function right() {
  var id = setInterval(framel, 15);
  function framel() {
    if (trax <= -size-70) {
      clearInterval(id);
    } else {
    stbtn.addEventListener("click", function(){
    clearInterval(id);
    });
    lfbtn.addEventListener("click", function(){
    clearInterval(id);
    });
      trax=trax-5;
      rock.style.transform = "translateX(" + (trax) + "px)";
    }
}
}
