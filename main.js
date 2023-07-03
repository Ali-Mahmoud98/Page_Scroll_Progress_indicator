let el = document.querySelector(".scroller");
//scrollHieght is the hight of html
//clientHieght is the hieght of the screen that shows content of the bag
let h = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollT = document.documentElement.scrollTop;
  //scroll to is the distance from point(before scrolling this point in the to) to top screen 
  el.style.width =`${(scrollT/h) * 100}%`;
});
