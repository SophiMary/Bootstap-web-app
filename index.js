
function clicked(button) {
   document.getElementById(button).addEventListener("click", () => {
        if (document.getElementsByClassName(button)[0].style.display !== "block") {
            document.getElementsByClassName(button)[0].style.display = "block";
            document.getElementsByClassName(`${button}-faq-question`)[0].style.color = "#0169D9";
            document.getElementById(button).innerHTML = "<i class='fas fa-angle-up'></i>";
        } else {
            document.getElementsByClassName(button)[0].style.display = "none";
            document.getElementById(button).innerHTML = "<i class='fas fa-angle-down'></i>";
            document.getElementsByClassName(`${button}-faq-question`)[0].style.color = "#000";
        }
    })
}


(function buttons() {
    clicked("one");
    clicked("two");
    clicked("three");
    clicked("four");
})();