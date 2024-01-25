/// <reference types="../@types/jquery" />

$(function() {
   $(".loader").fadeOut(600 , function() {
      $(".loading").slideUp( 800 , function() {
         $("body").css("overflow" , "auto");
      })
   });
})
    AOS.init();
AOS.init({
  offset: 300, // offset (in px) from the original trigger point

  duration: 1000, // values from 0 to 3000, with step 50ms
});
$("#open").on('click' , function() {
   $("#side-nav").animate({width: 'toggle'} , 500)
   $("#open").hide(300);
})
$("#close").on("click", function () {
  $("#side-nav").animate({ width: "toggle" }, 500 , function() {
      $("#open").show(300);
  });
});
$(".signnerNumber").on('click' , function(e) {
   let signer = e.target
   $(signer).next().slideToggle(500);
})

let timeParty = new Date("2024-03-10T00:00:00");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
function timeCalc() {
  let timeNow = new Date();
  let timeLeftDays = (timeParty - timeNow) / 1000 / 60 / 60 / 24;
  let timeLeftHours = (timeLeftDays - Math.floor(timeLeftDays)) * 24;
  let timeLeftMin = (timeLeftHours - Math.floor(timeLeftHours)) * 60;
  let timeLeftsec = (timeLeftMin - Math.floor(timeLeftMin)) * 60;
  $(days).html(Math.floor(timeLeftDays) + " D");
  $(hours).html(Math.floor(timeLeftHours) + " H");
  $(min).html(Math.floor(timeLeftMin) + " M");
  $(sec).html(Math.floor(timeLeftsec) + " S");
}

 setInterval(function() {
timeCalc()
} , 1000)
timeCalc()


let textArea = $("#textareaMsg");
let characterCount = $("#characterCount");
$(textArea).on("input", function () {
   let count = textArea.val()
  $(characterCount).html(textArea.attr("maxlength") - count.length);
});