var projectLink = document.getElementById("webPages");
var projectGall = document.getElementById("webProjects");
var translationLink = document.getElementById("translations");
var translationGall = document.getElementById("translationProjects");
var textLink = document.getElementById("seoText");
var textGall = document.getElementById("seoTextProjects");

var tabs = document.getElementsByClassName("tabb");
var gallery = document.getElementsByClassName("gallery-section");

function removeActivatingClass (){
    function removeClass (arr, className){
        for (i=0; i<=arr.length-1; i++) {
            if (arr[i].classList.contains(className)){
                arr[i].classList.remove(className)
            }
        }
    };
    removeClass(tabs, "active");
    removeClass(gallery, "gallery-section-active");
};

projectLink.onclick = function() {
    removeActivatingClass();
    setTimeout(function() {
        projectLink.classList.add("active");
        projectGall.classList.add("gallery-section-active");
    }, 220);
};
translationLink.onclick = function() {
    removeActivatingClass();
    setTimeout(function() {
        translationGall.classList.add("gallery-section-active");
        translationLink.classList.add("active");
    }, 220);
};
textLink.onclick = function() {
    removeActivatingClass();
    setTimeout(function() {
        textGall.classList.add("gallery-section-active");
        textLink.classList.add("active");
    }, 220);
};