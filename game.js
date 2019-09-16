var stbtn = document.getElementById("stopbtn");
var size = (outerWidth/2)-70;
var rock =document.getElementById('rocket');
var fr =document.getElementById('fire');
var enemi =document.getElementById('enemi');
var movenemi = 0;
var trax = 0;

function enemi1(){
var id = setInterval(framenemi, 2000);
      function framenemi() {
      var width = ((outerWidth-45)/10)*((Math.random())*10);
      enemi.style.transform = "translateX(" + (width) + "px)";
    }
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
  var top = 20;
  var id = setInterval(framenemi, 2000);
  function framenemi() {
    if (top >= outerHeight-300) {
      clearInterval(id);
      alert('Game Over,refrash the window to start again');
    } else {
      top=top+20;
      enemi.style.top = "" + (top) + "px";
    }
}
}
  
function close(){
  if (confirm("Close Window?")) {
    close();
  }
}

function go(){
  var game = document.getElementById("option");
  var main = document.getElementById("gamebody");
  game.style.display="none";
  main.style.display="block";
  enemi1();
  enemidown();

};

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
      hit();
    }
}
}


function hit() {
var enmlf = enemi.getBoundingClientRect().left;
var enmtp = enemi.getBoundingClientRect().top;
var frlf = fr.getBoundingClientRect().left;
var frtp = fr.getBoundingClientRect().top;

if(50>Math.abs(enmlf-frlf) && 0==Math.abs(Math.abs(enmtp)-Math.abs(frtp))){
  fr.style.display="none";
  enemi.style.display="none";
  rock.style.display="none";
  setTimeout(function(){ alert("you have killed the enemy"); }, 1000);
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
      trax=trax-5;
      rock.style.transform = "translateX(" + (trax) + "px)";
    }
}
}
