document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("starField");
  const c = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  c.strokeStyle = "#94e6fb";
  $("#TopLogo").hide();

  class Star {
    constructor() {
      this.x = Math.random() * canvas.width - canvas.width / 2;
      this.y = Math.random() * canvas.height - canvas.height / 2;
      this.z = Math.random() * 4;
    }
    update() {
      this.px = this.x;
      this.py = this.y;
      this.z += speed;
      this.x += this.x * (speed * 0.2) * this.z;
      this.y += this.y * (speed * 0.2) * this.z;
      if (
        this.x > canvas.width / 2 + 50 ||
        this.x < -canvas.width / 2 - 50 ||
        this.y > canvas.height / 2 + 50 ||
        this.y < -canvas.height / 2 - 50
      ) {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.px = this.x;
        this.py = this.y;
        this.z = 0;
      }
    }
    show() {
      c.lineWidth = this.z;
      c.beginPath();
      c.moveTo(this.x, this.y);
      c.lineTo(this.px, this.py);
      c.stroke();
    }
  }

  let speed = 0.1;
  let stars = [];
  for (let i = 0; i < 500; i++) {
    stars.push(new Star());
  }

  c.fillStyle = "#00008B";
  c.translate(canvas.width / 2, canvas.height / 2);

  function draw() {
    c.fillRect(
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    stars.forEach((star) => {
      star.update();
      star.show();
    });
    requestAnimationFrame(draw);
  }

  draw();

  // Timing for the star field to fade out
  setTimeout(function () {
    document.getElementById("starField").style.opacity = 0; // Fade out stars
  }, 1000); // Adjust as necessary to match the greetings animation

  // Timing for button creation after greetings animation
  setTimeout(function () {
    const btnArea = document.getElementById("BTNarea");
    const radius = Math.min(btnArea.offsetWidth, btnArea.offsetHeight) / 2; // This ensures the radius fits within BTNarea
    const textArea = document.getElementById("TextArea");
    let hideTimeout;

    const buttonData = [
      {
        name: "A.S Moloobhoy & Sons Pvt Ltd",
        text: "Hi, Im a Demo Text of A.S Moloobhoy & Sons Pvt Ltd",
        url: "https://www.asmoloobhoy.com/",
      },
      {
        name: "A.S Moloobhoy Pvt Ltd",
        text: "Hi, Im a Demo Text of A.S Moloobhoy Pvt Ltd</a>",
      },
      {
        name: "Molobhoy Marine Services LLC",
        text: "Hi, Im a Demo Text of Molobhoy Marine Services LLC",
      },
      {
        name: "A.S Moloobhoy FZCO ",
        text: "Hi, Im a Demo Text of A.S Moloobhoy FZCO",
      },
      {
        name: "Moloobhoy Marine Equipment LLP",
        text: "Hi, Im a Demo Text of Moloobhoy Marine Equipment LLP",
      },
      {
        name: "Moloobhoy Marine Services WLL:Qatar",
        text: "Hi, Im a Demo Text of Moloobhoy Marine Services WLL:Qatar",
      },
      {
        name: "Moloobhoy Marine Services LLC-Oman",
        text: "Hi, Im a Demo Text of Moloobhoy Marine Services LLC-Oman",
      },
    ];

    buttonData.forEach((button, index) => {
      // Define custom left and top positions for each button
      const customPositions = [
        { left: 69, top: 50 },
        { left: 46, top: -4 },
        { left: 14, top: 55 },
        { left: 32, top: 95 },
        { left: 62, top: 82 },
        { left: 12, top: 20 },
        { left: 68, top: 20 },
      ];

      // Check if there are custom positions defined for the current button index
      const customPosition = customPositions[index];
      let buttonX, buttonY;
      if (customPosition) {
        buttonX = customPosition.left;
        buttonY = customPosition.top;
      } else {
        // If no custom positions, calculate positions using radius
        const angle = (index / buttonData.length) * 2 * Math.PI; // Calculate angle in radians
        buttonX = radius * Math.cos(angle) + btnArea.offsetWidth / 2 - 50; // Center the button
        buttonY = radius * Math.sin(angle) + btnArea.offsetHeight / 2 - 25; // Center the button
      }

      const buttonElement = document.createElement("button");
      buttonElement.innerText = button.name;
      buttonElement.style.position = "absolute";
      buttonElement.style.left = `${buttonX}%`;
      buttonElement.style.top = `${buttonY}%`;
      buttonElement.style.height = "50px";
      buttonElement.className = "circular-button"; // Add fadeInUp animation class
      buttonElement.style.visibility = "visible";

      buttonElement.addEventListener("click", function () {
        window.location.href = button.url; // Navigate to the specified URL
      });
      buttonElement.addEventListener("mouseenter", function () {
        clearTimeout(hideTimeout); // Clear any pending timeout
        $("#TextArea")
          .show()
          .addClass("animated fadeInUp")
          .css("display", "block");
        $("#TextArea").html(""); // Clear previous text

        // Add text
        const textElement = document.createElement("div");
        textElement.innerText = button.text;
        textElement.style.display = "block";
        $("#TextArea").append(textElement);

        // Add line break to move the button to a new line
        $("#TextArea").append("<br>");

        // Add the "Enter Site" button
        const enterSiteButton = document.createElement("button");
        enterSiteButton.innerText = "Enter Site";
        enterSiteButton.style.marginTop = "10px"; // Add margin to separate from text
        enterSiteButton.style.color = "#fff"; // Add margin to separate from text
        enterSiteButton.style.border = "2px solid #fff"; // Add border
        enterSiteButton.style.background = "transparent"; // Add border
        enterSiteButton.style.borderRadius = "50px"; // Add border radius for box shape
        enterSiteButton.style.padding = "10px 20px"; // Add padding
        enterSiteButton.style.cursor = "pointer"; // Add pointer cursor
        enterSiteButton.addEventListener("click", function () {
          window.location.href = button.url; // Navigate to the specified URL
        });
        $("#TextArea").append(enterSiteButton);

        $("#TextArea").fadeInUp(200);
      });

      // Start a timeout to hide TextArea on mouse leave
      buttonElement.addEventListener("mouseleave", function () {
        hideTimeout = setTimeout(function () {
          $("#TextArea").removeClass("animated fadeInUp").fadeOut(200);
        }, 3000); // 3 seconds delay
      });

      setTimeout(function () {
        btnArea.appendChild(buttonElement);
        $("#TopLogo").show();
      }, 1500);

      // Prevent TextArea from hiding when hovered over
      textArea.addEventListener("mouseover", function (event) {
        clearTimeout(hideTimeout); // Clear any pending timeout
        $("#TextArea").css("display", "block"); // Override inline style to display the element
        event.stopPropagation(); // Stop the event from propagating to parent elements
      });

      // Allow TextArea to hide if mouse leaves and is not over any buttons
      textArea.addEventListener("mouseleave", function () {
        hideTimeout = setTimeout(function () {
          $("#TextArea").hide();
        }, 3000); // 3 seconds delay
      });
      const logo = document.querySelector(".next-particle.Secondpagelogo");
      if (logo && logo.nextParticle && logo.nextParticle.stop) {
        logo.nextParticle.start();
      }
    });
  }, 4200);
});

window.onload = function () {
  const logo = document.querySelector(".next-particle.Secondpagelogo");
  if (logo && logo.nextParticle && logo.nextParticle.stop) {
    logo.nextParticle.stop();
  }
};

$("#TextArea").hide();
