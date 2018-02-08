var menuLinkList = document.querySelectorAll('.menu-link'),
    index, menuLink, menuChecbox;

for (index = 0; index < menuLinkList.length; index++) {
	menuLink = menuLinkList[index];
	menuLink.addEventListener('click', closeMenu);
};

function closeMenu() {
    menuChecbox = document.getElementById('menu-btn').checked = false;
};