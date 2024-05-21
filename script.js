var canvas = document.querySelector("#canvas"),
  input = document.getElementById("txt"),
  ctx = canvas.getContext("2d"),
  mouse = {
    x: 0,
    y: 0,
  };

var displayText = "Moloobhoy Group Of Companies"; // Define your text

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight;
w = canvas.width;
h = canvas.height;

ctx.font = "normal 3em 'Disket Mono', serif";
ctx.textAlign = "center";
ctx.fillText(displayText, canvas.width / 4, canvas.height / 3.9);
var radius = 1;

var data32 = new Uint32Array(
  ctx.getImageData(0, 0, canvas.width, canvas.height).data.buffer
);
var txtArr = [];

for (i = 0; i < data32.length; i++) {
  if (data32[i] & 0xff000000) {
    txtArr.push({
      x: (i % w) * radius * 2 + radius,
      y: ((i / w) | 0) * radius * 2 + radius,
    });
  }
}

//console.log(alpha);
function Circle(x, y) {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.dx = Math.random() - 1;
  this.dy = Math.random() - 1;
  this.radius = 1;
  this.dest = {
    x: x,
    y: y,
  };
  this.vx = (Math.random() - 0.5) * 22;
  this.vy = (Math.random() - 0.5) * 40;
  this.accX = 0;
  this.accY = 0;
  this.friction = Math.random() * 0.01 + 0.88;
}
Circle.prototype.render = function () {
  this.accX = (this.dest.x - this.x) / 200;
  this.accY = (this.dest.y - this.y) / 200;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;

  this.x += this.vx;
  this.y += this.vy;
  //var a = 10*Math.random() - 10,
  //dx = a ,
  //dy = a ;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#94e6fb";
  ctx.fill();
  var a = this.x - mouse.x;
  var b = this.y - mouse.y;

  var distance = Math.sqrt(a * a + b * b);
  if (distance < radius * 70) {
    this.accX = (this.x - mouse.x) / 20;
    this.accY = (this.y - mouse.y) / 20;
    this.vx += this.accX;
    this.vy += this.accY;
  }
};

function initScene() {
  ctx.font = "normal 200% 'Disket Mono', serif";
  ctx.textAlign = "center";
  ctx.fillText(displayText, canvas.width / 4, canvas.height / 4);
  var radius = 1;

  var data32 = new Uint32Array(
    ctx.getImageData(0, 0, canvas.width, canvas.height).data.buffer
  );
  var txtArr = [];

  for (i = 0; i < data32.length; i++) {
    if (data32[i] & 0xff000000) {
      txtArr.push({
        x: (i % w) * radius * 2 + radius,
        y: ((i / w) | 0) * radius * 2 + radius,
      });
    }
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "screen";
  circleArr = [];
  for (var i = 0; i < txtArr.length; i++) {
    circleArr.push(new Circle(txtArr[i].x, txtArr[i].y));
  }
}

var circleArr = [];

function render(a) {
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < txtArr.length; i++) {
    circleArr[i].render();
  }
}

var currentYear = 1905; // Starting year for the countdown
var countdownEnd = 2024; // Ending year for the countdown

function initCountdown() {
  // Clear the canvas before drawing the countdown
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "transparent"; // Background color for countdown
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff"; // Text color for countdown
  ctx.font = "bold 4rem 'Disket Mono', serif"; // Font settings for countdown
  ctx.textAlign = "center";
  ctx.fillText(currentYear, canvas.width / 2, canvas.height / 2); // Center text

  if (currentYear < countdownEnd) {
    var delay = calculateDelay(currentYear);
    setTimeout(function () {
      currentYear++;
      initCountdown();
    }, delay);
  } else {
    setTimeout(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      initScene(); // Prepare the scene for particles
      requestAnimationFrame(render);
      ShowOthers();
    }, 3000); // Wait for 3 seconds after countdown completes
  }
}

function calculateDelay(year) {
  var accelerationStartYear = 1905; // First year to start accelerating
  var decelerationEndYear = 2024; // Last year to start decelerating

  var accelerationFactor = 0.9; // Adjust the acceleration factor to change the speed of acceleration
  var decelerationFactor = 0.02; // Adjust the deceleration factor to change the speed of deceleration

  if (year === accelerationStartYear || year === decelerationEndYear) {
    return 1000; // Initial delay for acceleration and deceleration (1 second)
  } else if (year < decelerationEndYear && year > accelerationStartYear) {
    // Calculate delay based on the position between acceleration and deceleration
    var distanceFromAccelerationStart = year - accelerationStartYear;
    var distanceFromDecelerationEnd = decelerationEndYear - year;
    var accelerationDelay =
      1000 / (1 + accelerationFactor * distanceFromAccelerationStart);
    var decelerationDelay =
      1000 / (1 + decelerationFactor * distanceFromDecelerationEnd);
    return Math.min(accelerationDelay, decelerationDelay); // Return the smaller delay
  } else {
    return 50; // Default delay for normal countdown speed
  }
}

$(".numberYears").hide();
$("#StartBtn").hide();

// Wrap the call to initCountdown() in a setTimeout() function
setTimeout(function () {
  initCountdown();
}, 100); // 5000 milliseconds = 5 seconds

function ShowOthers() {
  setTimeout(function () {
    $(".numberYears").show();
    $(".numberYears").animate(
      {
        bottom: "400px", //after complete text animation space
      },
      1000
    );
  }, 8000);

  setTimeout(function () {
    $("#StartBtn").show().trigger("click"); // Automatically trigger click event on StartBtn
  }, 2000);
}

// Clear the canvas before initiating the countdown
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Call the clearCanvas() function before initCountdown()
clearCanvas();
