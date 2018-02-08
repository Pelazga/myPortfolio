function throttle(func, ms) {

	var isThrottled = false,
	  savedArgs,
	  savedThis;
  
	function wrapper() {
  
	  if (isThrottled) { // (2)
		savedArgs = arguments;
		savedThis = this;
		return;	
	  }
  
	  func.apply(this, arguments); // (1)
  
	  isThrottled = true;
  
	  setTimeout(function() {
		isThrottled = false; // (3)
		if (savedArgs) {
		  wrapper.apply(savedThis, savedArgs);
		  savedArgs = savedThis = null;
		}
	  }, ms);
	}
  
	return wrapper;
	}

// обработка нажатия на подложку для попапов и кнопку esc начало
var bgForPopUp = document.getElementById('bg_for_popup');

function hideEverything() {
	bgForPopUp.classList.add('hidden');
	loginWindow.classList.add('hidden');
	popUpWindow.classList.add('hidden');
	closeOpenedWindows();
}

bgForPopUp.onclick = function(){
	hideEverything();
};

document.onkeydown = function (event){
	if (event.keyCode == 27)
	hideEverything();
};
// обработка нажатия н подложку для попапов и кнопку esc конец


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
// для кнопки вверх конец

// для формы логина начало
var users = {
	user1: {
		pass: 'pass1'
	},
	user2: {
		pass: 'pass2'
	},
	Arlek: {
		pass: 'skalat'
	},
	Pelazga: {
		pass: 'skalat'
	}
};
var loginWindow = document.getElementById('login-window');

document.getElementById('enter-link').onclick = function(){
	loginWindow.classList.remove('hidden');
	bgForPopUp.classList.remove('hidden')
};

var loginBtn = document.getElementById('login-btn');
var message = document.getElementById('login-msg');
var loginForm = document.getElementById('login-form');
var closeLoginWindowBtn = document.getElementById('login-window-close-btn');

loginForm.addEventListener('submit', function(event){
	event.preventDefault()
});
loginForm.addEventListener('submit', loginImitation);

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
	hideEverything();
};
// для формы логина конец

// для мест работы начало
var checkpoints = document.querySelectorAll('.checkpoint'),
		index, checkpoint, infoWindowId;

for (index = 0; index < checkpoints.length; index++) {
	checkpoint = checkpoints[index];
	checkpoint.addEventListener('click', openInfoWind);
};

function openInfoWind(event) {
	var checkpointId = this.id;
	infoWindowId = checkpointId + '-info';
	closeOpenedWindows();
	document.getElementById(infoWindowId).classList.add('active-workplace-info');
	bgForPopUp.classList.remove('hidden');
};

function closeOpenedWindows() {
	var workplaceInfoWind = document.querySelectorAll('.workplace-info');
	for (i=0; i<workplaceInfoWind.length; i++){
		if (workplaceInfoWind[i].classList.contains('active-workplace-info')){
			workplaceInfoWind[i].classList.remove('active-workplace-info');
		}
	}
	bgForPopUp.classList.add('hidden');
};

var closeBtns = document.querySelectorAll('.workplace-info .close-wrap'),
		closeBtn;

for (index = 0; index < closeBtns.length; index++) {
	closeBtn = closeBtns[index];
	closeBtn.addEventListener('click', closeInfoWind);
};
function closeInfoWind(event) {
	closeOpenedWindows();
};

// для мест работы конец

// для всплывающего окошка c благодарностью о подписке начало
var submitBtn = document.getElementById('send-massege-btn');
var popUpWindow = document.getElementById('thanx-massege');


document.getElementById('thanx-massege-close-btn').onclick = function(){
	popUpWindow.classList.add('hidden')
	bgForPopUp.classList.add('hidden');
};
// для всплывающего окошка c благодарностью о подписке конец

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
				bgForPopUp.classList.remove('hidden');
        // showHideSuccessMassege();
			setTimeout(function() {
        // Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
  
});
// для отправки данных с формы конец

//для плавного заполнения прогрессбаров начало

function moveProgressBar(id, skillClass) {
	var elementById = document.getElementById(id);
	var MoveProgresAt = (window.scrollY + window.innerHeight) - elementById.clientHeight;
	var SectionBottom = elementById.offsetTop + elementById.clientHeight;
	if (MoveProgresAt > SectionBottom){
		elementById.classList.add(skillClass);
	}
}
function moveProgressBars () {
	// 1-st section
	moveProgressBar('html-skill', 'html');
	moveProgressBar('css-skill', 'css');
	moveProgressBar('scss-skill', 'scss');

	//2-nd section
	moveProgressBar('javascript-skill', 'javascript');

	//3-d section
	moveProgressBar('english-skill', 'english');
	moveProgressBar('photoshop-skill', 'photoshop');
}
	
window.addEventListener('scroll', throttle(moveProgressBars, 100));
//для плавного заполнения прогрессбаров конец