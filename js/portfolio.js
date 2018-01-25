var projectLink = document.getElementById("webPages");
var projectGall = document.getElementById("webProjects");
var translationLink = document.getElementById("translations");
var translationGall = document.getElementById("translationProjects");
var textLink = document.getElementById("seoText");
var textGall = document.getElementById("seoTextProjects");

var tabs = document.getElementsByClassName("tabb");
var gallery = document.getElementsByClassName("gallery-section");

function removeActivatingClass (arr, className, arr2, className2){
    function removeClass (arr, className){
        for (i=0; i<=arr.length-1; i++) {
            if (arr[i].classList.contains(className)){
                arr[i].classList.remove(className)
            }
        }
    };
    removeClass(arr, className);
    removeClass(arr2, className2);
};

projectLink.onclick = function() {
    removeActivatingClass(tabs, "active", gallery, "gallery-section-active");
    setTimeout(function() {
        projectLink.classList.add("active");
        projectGall.classList.add("gallery-section-active");
    }, 250);
};

translationLink.onclick = function() {
    removeActivatingClass(tabs, "active", gallery, "gallery-section-active");
    setTimeout(function() {
        translationGall.classList.add("gallery-section-active");
        translationLink.classList.add("active");
    }, 250);
};
textLink.onclick = function() {
    removeActivatingClass(tabs, "active", gallery, "gallery-section-active");
    setTimeout(function() {
        textGall.classList.add("gallery-section-active");
        textLink.classList.add("active");
    }, 250);
};