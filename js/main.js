//для открытия и закрытия меню

//для открытия и закрытия меню закончился

// для кнопки вверх начало
var banner = document.getElementById('home');

var bannerSourceBottom = banner.getBoundingClientRect().bottom + window.pageYOffset;

var upButton = document.getElementById('up-button');

window.onscroll = function() {
  if (upButton.classList.contains('up-button-hidden') && window.pageYOffset > bannerSourceBottom) {
    upButton.classList.remove('up-button-hidden');
  } else if (window.pageYOffset < bannerSourceBottom) {
    upButton.classList.add('up-button-hidden');
  }
};
// для кнопки вверх закончился

// для формы логина
var users = {
	user1: {
		pass: 'pass1'
	},
	user2: {
		pass: 'pass2'
	}
};
var loginWindow = document.getElementById('login-window');

document.getElementById('enter-link').onclick = function(){
	loginWindow.classList.remove('hidden');
};

var loginBtn = document.getElementById('login-btn');
var message = document.getElementById('login-msg');
var loginForm = document.getElementById('login-form');
var closeLoginWindowBtn = document.getElementById('login-window-close-btn');

loginForm.addEventListener("submit", function(event){
	event.preventDefault()
});
loginForm.addEventListener("submit", loginImitation);

function loginImitation(){
	message.classList.add('height0');
	setTimeout(loginCheck, 1500)
};

function loginCheck (){
	var enteredLogin = document.getElementById('login').value;
	var enteredPass = document.getElementById('pass').value;
		if (enteredLogin in users){
			if (users[enteredLogin]['pass'] == enteredPass){
				loginForm.classList.add('height0');
				
				message.textContent = 'С возвращением, '+ enteredLogin;
				message.classList.remove('height0');
				// location.assign('http://dmyterko.ho.ua');
				// location.assign('http://localhost:3000/');
			} else {
				message.textContent = 'Пользователя с таким набором логина и пароля не существует';
				message.classList.remove('height0');
			}
		} else {
			message.textContent = 'Пользователя с таким набором логина и пароля не существует';
			message.classList.remove('height0');
		}
};
closeLoginWindowBtn.onclick = function(){
	loginWindow.classList.add('hidden');
};

// для формы логина закончился

// для всплывающего окошка начало
var submitBtn = document.getElementById('send-massege-btn');
var popUpWindow = document.getElementById('thanx-massege');


document.getElementById('thanx-massege-close-btn').onclick = function(){
  popUpWindow.classList.add('hidden')
};
// для всплывающего окошка закончился

// для отправки данных с формы начало
$(document).ready(function() {
	//E-mail Ajax Send
	$('form#contat-form').submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
        popUpWindow.classList.remove('hidden'); 
        // showHideSuccessMassege();
			setTimeout(function() {
        // Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
  
});
// для отправки данных с формы закончился