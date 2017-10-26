function showDivs(e) {
  var s, l = document.getElementsByClassName("mySlides");
  for (console.log(l.length), s = 0; s < l.length; s++) l[s].style.display = "none", e > l.length && (slideIndex = 1), e < 1 && (slideIndex = l.length);
  l[slideIndex - 1].style.display = "block"
}

function plusDivs(e) {
  showDivs(slideIndex += e)
}
var slideIndex = 1;
showDivs(slideIndex);

document.getElementById("Projectdropdown").onclick = function pagelinks(){
  $('#projectsLists').show();
  console.log("i ran");
};
