// Track what to do when openning the document
$(document).ready(function () {
  $(".closable").slideUp(0);
  $(".closable:first").slideDown(500);

  $(".nav").animate({ left: -$(".nav").outerWidth(true) }, 500);
});

// start accordion behavior
$(".details h3").click(function (e) {
  $(".details .closable").slideUp(1000);
  if ($(this).next().css("display") == "none") {
    $(this).next().slideDown(1000);
  }
});

// start navbar behavior
const navWidth = $(".nav").outerWidth(true);

$(".side-text").click(function () {
  if ($(".nav").css("left") == `-${navWidth}px`) {
    openNav();
  } else if ($(".nav").css("left") == "0px") {
    closeNav();
  }
});

$(".fa-xmark").click(function () {
  closeNav();
});

function closeNav() {
  $(".nav").animate({ left: -navWidth }, 500);
  $(".side-text").animate({ left: 0 }, 500);
}
function openNav() {
  $(".nav").animate({ left: 0 }, 500);
  $(".side-text").animate({ left: navWidth }, 500);
}
// count down behavior
const counterNumbers = document.querySelectorAll(".counterNo");
let seconds = counterNumbers[3];
let minutes = counterNumbers[2];
let hours = counterNumbers[1];
let days = counterNumbers[0];

let targetDate = new Date("Dec 20, 2022 10:15:00");

// console.log(remainingTime);

// console.log(targetDate.getSeconds());

let secondsInterval = setInterval(() => {
  let currentDate = new Date();
  let remainingTime = new Date(targetDate.getTime() - currentDate.getTime());

  seconds.textContent = remainingTime.getSeconds();
  minutes.textContent = remainingTime.getMinutes();
  hours.textContent = remainingTime.getHours();
  // Division is meant to calculate the actual no. of days as the return
  // type in remaining time is in milliseconds
  days.textContent = Math.floor(remainingTime / (1000 * 3600 * 24));
}, 1000);
