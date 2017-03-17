// console.log("hahaaa maza faqa");
// window.onload = function(){
//   console.log("this is your maza faqa bitch!");
// }
//
// document.getElementById("header").onload = function(){
//   console.log("yes yes yes motherfucker");
// }


setTimeout(function(){ displayProfilePicture() }, 3200);

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
