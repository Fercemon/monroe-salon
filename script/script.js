const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
const employee = document.querySelector(".employee");
const employee2 = document.querySelector(".employee2");
const employee3 = document.querySelector(".employee3");
const employeeInfo = document.querySelector(".employee-info");

let count = 1;
menu.addEventListener("click", () => {

  count++;

    if(count % 2 == 0){
        overlay.style.height = "100%";
    }else {
        overlay.style.height = 0;
    }

    console.log(count);
});

// hover employee 1
employee.addEventListener("mouseover", () =>{
    document.querySelector(".employee-info").style.display = "block";
});

employee.addEventListener("mouseout", () =>{
    document.querySelector(".employee-info").style.display = "none";
});

// hover employee 2
employee2.addEventListener("mouseover", () =>{
    document.querySelector(".info2").style.display = "block";
});

employee2.addEventListener("mouseout", () =>{
    document.querySelector(".info2").style.display = "none";
});

// hover employee 3
employee3.addEventListener("mouseover", () =>{
    document.querySelector(".info3").style.display = "block";
});

employee3.addEventListener("mouseout", () =>{
    document.querySelector(".info3").style.display = "none";
});



// slides

let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// set background on the nav when windows scroll > 100vh
let windowHeight = window.innerHeight;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > windowHeight || document.documentElement.scrollTop > windowHeight) {
    document.querySelector(".header").style.background = "black";
  } else {
    document.querySelector(".header").style.background = "transparent";
  }
}
