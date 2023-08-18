let innerrWidth = $(".sideBar").innerWidth();
$("aside").css({ left: -innerrWidth });

$(".open").click(function () {
  $("aside").animate({ left: 0 }, 500);
});
$(".close").click(function () {
  $("aside").animate({ left: -innerrWidth }, 500);
});

$(".singerone").click(function (e) {
  $(e.target).next().slideToggle(500);
});

// Set the date we're counting down to
let countDownDate = new Date("Oct 25, 2023 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("Row").innerHTML = `
  <div class="col-md-3 text-white">
  <div class="count-down text-center p-5">
      <h1>${days} D</h1>   
  </div>
</div>
<div class="col-md-3 text-white">
  <div class="count-down text-center p-5">
      <h1>${hours} h</h1>   
  </div>
</div>
<div class="col-md-3 text-white">
  <div class="count-down text-center p-5">
      <h1>${minutes} m</h1>   
  </div>
</div>
<div class="col-md-3 text-white">
  <div class="count-down text-center p-5">
      <h1>${seconds} s</h1>   
  </div>
</div>`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Row").innerHTML = "EXPIRED";
  }
}, 1000);

let maxLength = 100;
$("textarea").keyup(function (e) {
  let length = $(e.target).val().length;
  let finallength = maxLength - length;
  $(".chars").text(finallength);
});
