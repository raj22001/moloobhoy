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
    // c.fillRect(
    //   -canvas.width / 2,
    //   -canvas.height / 2,
    //   canvas.width,
    //   canvas.height
    // );
    // stars.forEach((star) => {
    //   star.update();
    //   star.show();
    // });
    requestAnimationFrame(draw);
  }

  draw();

  // Timing for the star field to fade out
  setTimeout(function () {
    document.getElementById("starField").style.opacity = 0; // Fade out stars
  }, 10); // Adjust as necessary to match the greetings animation

  // Timing for button creation after greetings animation
  setTimeout(function () {
    // Function to add CSS rules dynamically
    function addCSS(css) {
      const style = document.createElement("style");
      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      document.head.appendChild(style);
    }
  
    // CSS rules for different screen sizes
    const css = `

    @media (min-width: 1501px) and (max-width: 1635px) {
      .custom-position-1 { left: 70%; top: 50%; }
      .custom-position-2 { left: 47%; top: 2%; }
      .custom-position-3 { left: 8%; top: 56%; }
      .custom-position-4 { left: 33%; top: 90%; }
      .custom-position-5 { left: 60%; top: 83%; }
      .custom-position-6 { left: 6%; top: 21%; }
      .custom-position-7 { left: 66%; top: 21%; }
    }

    @media (min-width: 1351px) and (max-width: 1500px) {
      .custom-position-1 { left: 70%; top: 50%; }
      .custom-position-2 { left: 47%; top: 2%; }
      .custom-position-3 { left: 7%; top: 56%; }
      .custom-position-4 { left: 33%; top: 90%; }
      .custom-position-5 { left: 61%; top: 82%; }
      .custom-position-6 { left: 5%; top: 21%; }
      .custom-position-7 { left: 66%; top: 21%; }
    }

    @media (min-width: 1251px) and (max-width: 1350px) {
      .custom-position-1 { left: 70%; top: 50%; }
      .custom-position-2 { left: 47%; top: 2%; }
      .custom-position-3 { left: 6%; top: 56%; }
      .custom-position-4 { left: 33%; top: 90%; }
      .custom-position-5 { left: 61%; top: 82%; }
      .custom-position-6 { left: 5%; top: 21%; }
      .custom-position-7 { left: 69%; top: 21%; }
    }

    @media (min-width: 1141px) and (max-width: 1250px) {
      .custom-position-1 { left: 70%; top: 50%; }
      .custom-position-2 { left: 47%; top: 3%; }
      .custom-position-3 { left: 3%; top: 56%; }
      .custom-position-4 { left: 28%; top: 90%; }
      .custom-position-5 { left: 63%; top: 83%; }
      .custom-position-6 { left: 1%; top: 21%; }
      .custom-position-7 { left: 69%; top: 21%; }
    }

      @media (min-width: 960px) and (max-width: 1140px) {
        .custom-position-1 { left: 70%; top: 50%; }
        .custom-position-2 { left: 47%; top: 3%; }
        .custom-position-3 { left: -2%; top: 56%; }
        .custom-position-4 { left: 28%; top: 90%; }
        .custom-position-5 { left: 63%; top: 83%; }
        .custom-position-6 { left: -1%; top: 21%; }
        .custom-position-7 { left: 69%; top: 21%; }
      }
  
      @media (min-width: 770px) and (max-width: 953px) {
        .custom-position-1 { left: 0%; top: 40%; }
        .custom-position-2 { left: 46%; top: 0%; }
        .custom-position-3 { left: 1%; top: 68%; }
        .custom-position-4 { left: 32%; top: 91%; }
        .custom-position-5 { left: 67%; top: 56%; }
        .custom-position-6 { left: -1%; top: 20%; }
        .custom-position-7 { left: 72%; top: 20%; }
      }
  
      @media (min-width: 1636px) {
        .custom-position-1 { left: 68%; top: 50%; }
        .custom-position-2 { left: 45%; top: 0%; }
        .custom-position-3 { left: 11%; top: 56%; }
        .custom-position-4 { left: 33%; top: 91%; }
        .custom-position-5 { left: 60%; top: 82%; }
        .custom-position-6 { left: 10%; top: 21%; }
        .custom-position-7 { left: 65%; top: 21%; }
      }
    `;
  
    // Add the CSS rules to the document
    addCSS(css);
  
    const btnArea = document.getElementById("BTNarea");
    const radius = Math.min(btnArea.offsetWidth, btnArea.offsetHeight) / 2; // This ensures the radius fits within BTNarea
    const textArea = document.getElementById("TextArea");
    let hideTimeout;
  
    const buttonData = [
      {
        name: "A.S Moloobhoy & Sons Pvt Ltd",
        text: "Hi, I'm a Demo Text of A.S Moloobhoy & Sons Pvt Ltd",
        url: "https://www.asmoloobhoy.com/",
      },
      {
        name: "A.S Moloobhoy Pvt Ltd",
        text: "Hi, I'm a Demo Text of A.S Moloobhoy Pvt Ltd",
      },
      {
        name: "Molobhoy Marine Services LLC",
        text: "Hi, I'm a Demo Text of Molobhoy Marine Services LLC",
      },
      {
        name: "A.S Moloobhoy FZCO",
        text: "Hi, I'm a Demo Text of A.S Moloobhoy FZCO",
      },
      {
        name: "Moloobhoy Marine Equipment LLP",
        text: "Hi, I'm a Demo Text of Moloobhoy Marine Equipment LLP",
      },
      {
        name: "Moloobhoy Marine Services WLL:Qatar",
        text: "Hi, I'm a Demo Text of Moloobhoy Marine Services WLL:Qatar",
      },
      {
        name: "Moloobhoy Marine Services LLC-Oman",
        text: "Hi, I'm a Demo Text of Moloobhoy Marine Services LLC-Oman",
      },
    ];
  
    buttonData.forEach((button, index) => {
      const customPositionClass = `custom-position-${index + 1}`;
  
      const buttonElement = document.createElement("button");
      buttonElement.innerText = button.name;
      buttonElement.className = `circular-button ${customPositionClass}`; // Add custom position class
      buttonElement.style.position = "absolute";
      buttonElement.style.height = "50px";
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
  
        $("#TextArea").fadeInUp(10);
      });
  
      // Start a timeout to hide TextArea on mouse leave
      buttonElement.addEventListener("mouseleave", function () {
        hideTimeout = setTimeout(function () {
          $("#TextArea").removeClass("animated fadeInUp").fadeOut(200);
        }, 0000); // 3 seconds delay
      });
  
      setTimeout(function () {
        btnArea.appendChild(buttonElement);
        $("#TopLogo").show();
      }, 0000);
  
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
        }, 0000); // 3 seconds delay
      });
  
      const logo = document.querySelector(".next-particle.Secondpagelogo");
      if (logo && logo.nextParticle && logo.nextParticle.stop) {
        logo.nextParticle.start();
      }
    });
  
    console.log("Screen width:", window.innerWidth); // Log the current screen width for debugging
  }, 1000);
  
});

window.onload = function () {
  const logo = document.querySelector(".next-particle.Secondpagelogo");
  if (logo && logo.nextParticle && logo.nextParticle.stop) {
    logo.nextParticle.stop();
  }
};

$("#TextArea").hide();
