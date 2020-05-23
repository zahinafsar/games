// tap to fire
var stbtn = document.getElementById("stopbtn");

// tap to move the enemy to right side
var rgbtn = document.getElementById("rightbtn");

// tap to move the enemy to left side
var lfbtn = document.getElementById("leftbtn");

// genarate screen size
var size = (outerWidth/2)-50;

// player
var rock =document.getElementById('rocket');

// fire
var fr =document.getElementById('fire');

// enemi
var enemi =document.getElementById('enemy');

// options panel
var game = document.getElementById("option");

// ememy life
var scr = document.getElementById("score");

// main div
var main = document.getElementById("gamebody");

// wining screen
var win = document.getElementById("win");

// score
var s = document.querySelector('#sr');
var stp = document.querySelector('#srtop');

//high score
var sh = document.querySelector('#srh');
var shtp = document.querySelector('#srhtop');
var movenemi = 0;
var trax = 0;
var z = 0;




// loader animation
myVar = setTimeout(showPage, 3000);
function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("bd").style.display = "block";
}
// loader animation




// functions for keyboard
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
// functions for keyboard




if (localStorage.length==0) {
localStorage.setItem("best",0)
}






// start new game
function go(){
  shtp.innerText = parseInt(localStorage.getItem("best"));
  if (game.style.display=="block") {
  enemi.style.display = "block";
  lose.style.display="none";
  win.style.display="none";
  game.style.display="none";
  main.style.display="block";
  enemiPossition();
  enemidown();
}
  if (lose.style.display=="block" || win.style.display=="block") {
  location.reload();
}
};
// start new game




// moving enemy to bottum
var n = 100;
var killed = false;
function enemidown(){
  enemi.style.top = "30px";
  var tp = parseInt(enemi.style.top);
  var dwn = setInterval(framenemi, n);
  function framenemi() {
    if (tp >= outerHeight-300) {
      if (scr.style.width != "0px" && win.style.display!="block"){
        if (parseInt(localStorage.getItem("best")) < z){
          localStorage.setItem("best",z)
        }
      enemi.style.display="none";
      s.innerHTML = z;
      sh.innerHTML = parseInt(localStorage.getItem("best"));
      lose.style.display="block";
      clearInterval(dwn);
      }
    } else {
      if (killed==true) {
      killed=false
      clearInterval(dwn);
      enemi.style.top = "30px";
      if (n>0) {
      n=n-5;
      }
      enemi.style.width="70px";
      enemi.style.display="none";
      enemidown();
      enemiPossition(); 
      enemi.style.display="block";
      };
      
      tp=tp+1;
      enemi.style.top = "" + (tp) + "px";
    }
}
}



// moving enemy to down


// genarate random possition for the enemy
function enemiPossition(){
      var width = ((outerWidth-100)/10)*((Math.random())*10);
      enemi.style.transform = "translateX(" + (width) + "px)";
}
// genarate random possition for the enemy




// reload fire
function stop(){
  fr.style.transform=rock.style.transform;
  fr.style.display="block";
  fire();
}
// reload fire









// shooting functions
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


 // check if the fire succesfully hitted to the enemy

var enmlf = enemi.getBoundingClientRect().left;
var enmtp = enemi.getBoundingClientRect().top;
var frlf = fr.getBoundingClientRect().left;
var frtp = fr.getBoundingClientRect().top;
if(Math.abs(Math.abs(enmlf)-Math.abs(frlf))<50 && Math.abs(Math.abs(enmtp)-Math.abs(frtp))<5){
  z++;
  stp.innerText = z;
  enemi.style.width="0px";
  killed = true;
  fr.style.bottom = "120px";
  fr.style.display="none";
 if(z==0){
  enemi.style.display="none";
  win.style.display="block";
 }
}
}
}
}
 // check if the fire succesfully shooted
// shooting functions











// tap to move the enemy to left side
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
      trax=trax+3;
      rock.style.transform = "translateX(" + (trax) + "px)";
    }
}
}
// tap to move the enemy to left side








// tap to move the enemy to right side
function right() {
  var id = setInterval(framel, 15);
  function framel() {
    if (trax <= -size-50) {
      clearInterval(id);
    } else {
    stbtn.addEventListener("click", function(){
    clearInterval(id);
    });
    lfbtn.addEventListener("click", function(){
    clearInterval(id);
    });
      trax=trax-3;
      rock.style.transform = "translateX(" + (trax) + "px)";
    }
}
}
// tap to move the enemy to right side
