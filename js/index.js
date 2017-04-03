
window.onload = function(){
  document.getElementById("hi-there1").className +=" animation-class1";
  document.getElementById("hi-there2").className +=" animation-class2";
  setTimeout(function(){ displayProfilePicture() }, 3200);
}

$('.display-body').click(function() {
  var i=0;
  var opacity = 0;
  slideOnClick(i, opacity);
});

function upOpacity(i, opacity){
  opacity += 0.05;
  i++;
  slideOnClick(i,opacity);
}

function slideOnClick(i, opacity) {
  if(i<21){
    $("body").css({"opacity": opacity});
    setTimeout(function(){ upOpacity(i, opacity) }, 35);
  }
}


function displayProfilePicture(){
  document.getElementById("my-pic").style.cssText="opacity:1; display:block";
}

document.getElementById("copy-info").innerHTML = "Click to copy E-mail address";

document.getElementById("mail").addEventListener("click", function(){
  document.getElementById("copy-info").innerHTML = "E-mail address copied!";
  document.getElementById("copy-email").style.cssText="display:block";
  document.getElementById("copy-info").style.backgroundColor = "#afa";
  setTimeout(function(){ clickAgain() }, 2400);
});

function clickAgain(){
  document.getElementById("copy-info").innerHTML = "Click to copy E-mail address";
  document.getElementById("copy-email").style.cssText="display:none";
}


var copyTextareaBtn = document.querySelector('.mail');
copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-copytextarea');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
  }
});


$(window).on('load', function() {
	$('body').children().not('#animation-body').show();
	$('#animation-body').hide();
	$('body').css({ 'background-color': "#efefef"});

});
