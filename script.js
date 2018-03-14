/*animate the flappy*/
function flappyup(){
$("#bird").animate({marginBottom : '+=100px'}, speed=200, easing='swing');
}
function flappydown(){
$("#bird").animate({marginTop:'+=100px'}, speed=200, easing="swing");
     }

function flappyleft(){
$("#bird").animate({marginRight:'+=100px'}, speed=200, easing="swing");
     }

function flappyright(){
$("#bird").animate({marginLeft:'+=100px'}, speed=200, easing="swing");
     }

/*translate the pipes*/
function movingpipes(){
$("#tuyau").animate({marginleft : '+=100px'}, speed=200, easing='swing');/*
$("#tuyau").css("-webkit-transform","translate(-100px, 0px)");*/
}

/*move with keys*/
$(document).keyup(function(touche){
  var appui = touche.which || touche.keyCode;
    if(appui == 38){
  flappyup();
        }
     });

$(document).keyup(function(touche){
 var appui = touche.which || touche.keyCode;
   if(appui == 40){
 flappydown();
        }
     });

$(document).keyup(function(touche){
 var appui = touche.which || touche.keyCode;
    if(appui == 37){
  flappyleft();
        }
     });

$(document).keyup(function(touche){
 var appui = touche.which || touche.keyCode;
   if(appui == 39){
 flappyright();
        }
     });

$("img").ready( function () {
$("img").on('click',function () {
   alert("yo dawg im flappy the bird");
       });
     });

/*keyA*/
$(document).keyup(function(touche){
 var appui = touche.which || touche.keyCode;
   if(appui == 65){
 alert("A");
        }
     });
