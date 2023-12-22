// Begin TEMPLATE SCRIPTS



var clickaway	= "yes"		// USE CLICK OFF MENU SCRIPT | yes | no |



// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// COPYRIGHT 2018 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law



// JQUERY CLICK MENU SCRIPT TOGGLE

function toggleMenu(divId) {
   $("#"+divId).toggle("fast");
}



// CLOSE MENU IF CLICKED AWAY FROM

if (clickaway == "yes") {

$(document).click(function(event) {

if ($(window).width() < 740) {

    if(!$(event.target).closest('#menusub').length) {
      if(!$(event.target).closest('#mobile-menu-icon').length) {
        if($('#menusub').is(":visible")) {
          $('#menusub').hide();
        }
      }
    }
  }
});
}
