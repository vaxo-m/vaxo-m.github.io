var menuItemIndex = 0;
var displayMenu = false;



document.getElementById("toggle").onclick = function(){
  displayMenu = !displayMenu;
  var menuStyle = "display: block";
  if (displayMenu) {
    document.getElementById("menu-body").style.cssText = menuStyle;
    menuAnimation();
  } else {
    handleLists();
  }
  }


function menuAnimation() {
  var elem = document.getElementById("menu-body");
  var posDisplay = 5;
  var posHide = 100;
  if (displayMenu) {
  var id = setInterval(frame, 5);
    function frame() {
      if (posDisplay == 5) {
        handleLists();
      }
      if (posDisplay == 100) {
        clearInterval(id);
      } else {
        posDisplay++;
        elem.style.width = posDisplay + '%';
      }
    }
  } else {
    var id = setInterval(frame, 5);
    function frame() {
      if (posHide == 10) {
        menuItemIndex = 0;
        elem.style.display = "none";
        clearInterval(id);
      } else {
        posHide--;
        elem.style.width = posHide + '%';
      }
    }
  }
}


function handleLists() {
    var children = document.getElementById("menu-body").getElementsByTagName('li');
    displayLists(children.length)
}

function displayLists(arrLength){
  setTimeout(function(){listOpacity(arrLength )},100);
}

function listOpacity(arrLength){
  if (displayMenu) {
    document.getElementById("menu-list-" + menuItemIndex).style.cssText = "opacity: 0.99";
  } else {
    document.getElementById("menu-list-" + (arrLength -1 - menuItemIndex)).style.cssText = "opacity: 0";
  }
  menuItemIndex ++;
  if (menuItemIndex >= arrLength && displayMenu) {
    menuItemIndex = 0;
  }
  if (menuItemIndex >= arrLength && !displayMenu) {
      menuAnimation();
  }
  if (menuItemIndex < arrLength && menuItemIndex !== 0) {
    displayLists(arrLength);
  }
}
