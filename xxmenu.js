// Begin

// NOTE: If you use a ' add a slash before it like this \'



var menuside	 = "center"		  // MENU SIDE | left | right | center |



document.write('<div id="menudiv" class="td-'+menuside+' printhide">');
document.write('<div id="mobile-menu-icon" onclick="javascript:toggleMenu(\'menusub\');">');

// MOBILE 3 BAR MENU

document.write('<img src="picts/mobile-menu-icon-white.png" width="100" height="29" class="menu-icon-img" alt="Open Menu">');

document.write('</div>');
document.write('<div id="menusub">');


// START MENU LINKS - COPY ANY LINE TO ADD A NEW LINK


document.write('<a href="index.html">Startside</a>');


document.write('<a href="services.htm">Services</a>');


document.write('<a href="about.htm">Om</a>');


document.write('<a href="links.htm">Links</a>');


document.write('<a href="article-home.htm">Andet</a>');


document.write('<a href="site_map.htm">Site Map</a>');





// END MENU LINKS


document.write('</div>');
document.write('</div>');
