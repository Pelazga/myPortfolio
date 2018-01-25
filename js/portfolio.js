var projectLink = document.getElementById("webPages");
var translationLink = document.getElementById("translations");
var textLink = document.getElementById("seoText");

var tabs = document.getElementsByClassName("tabb");
var gallery = document.getElementsByClassName("gallery-section");

function removeActivatingClass (arr, className, arr2, className2){
    function removeClass (arr, className){
        for (i=0; i<=arr.length; i++) {
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



// function projectDeactivate() {
//     if (projectGall.classList.contains("gallery-section-active")){
//         projectGall.classList.remove("gallery-section-active");
//     };
//     if (projectLink.classList.contains("active")){
//         projectLink.classList.remove("active");
//     };
// };
// function translationDeactivate() {
//     if (translationGall.classList.contains("gallery-section-active")){
//         translationGall.classList.remove("gallery-section-active");
//     };
//     if (translationLink.classList.contains("active")){
//         translationLink.classList.remove("active");
//     };
// };
// function textDeactivate() {
//     if (textGall.classList.contains("gallery-section-active")){
//         textGall.classList.remove("gallery-section-active");
//     };
//     if (textLink.classList.contains("active")){
//         textLink.classList.remove("active");
//     };
// };


// projectLink.onclick = function() {
//     translationDeactivate();
//     textDeactivate();
//     setTimeout(function() {
//         projectGall.classList.add("gallery-section-active");
//         projectLink.classList.add("active");
//     }, 250);
// };
// translationLink.onclick = function() {
//     textDeactivate();
//     projectDeactivate();
//     setTimeout(function() {
//         translationGall.classList.add("gallery-section-active");
//         translationLink.classList.add("active");
//     }, 250);
// };
// textLink.onclick = function() {
//     translationDeactivate();
//     projectDeactivate();
//     setTimeout(function() {
//         textGall.classList.add("gallery-section-active");
//         textLink.classList.add("active");
//     }, 250);
// };
