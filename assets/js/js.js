window.onscroll = function () { myNavbar() };
function myNavbar() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementById("myNavbar").className = "navbar navbar-expand-lg navbar-light fixed-top bg-white";
    } else {
        document.getElementById("myNavbar").className = "navbar navbar-expand-lg navbar-light fixed-top bg-opacity-50";
    }
}

$("#selectCvBtn").on("click", function () {
    $("#selectCv").click();
})






















