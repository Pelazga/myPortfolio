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
	};

// handlebars interaction start
(function(){
    $.ajax({
        url: "data.json"
    }).done(function(data){

        var source  = document.getElementById("workplaceinfo").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);

        document.getElementById("workExp").innerHTML = "<h3>Опыт работы</h3>" + html;
    })
})();

// handlebars interaction end


// для мест работы начало
$(document).ready(function() {
	var bgForPopUp = document.getElementById('bg_for_popup');
	var checkpoints = document.querySelectorAll('.checkpoint'),
			index, checkpoint, infoWindowId;
	for (index = 0; index < checkpoints.length; index++) {
		checkpoint = checkpoints[index];
		checkpoint.addEventListener('click', openInfoWind);
	};
	// Ваш скрипт
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
 });

// для мест работы конец

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