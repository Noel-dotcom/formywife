const message = `I love you my trans wife, and I will always support you for who you are, no matter what.\n\nI’m really sorry for being a bad boyfriend sometimes. \n\nI hope you’ll never leave me, because I love you so much.\n\nJust know I love everything about you, mwah!.`;

function showLetter() {
   // Play background music
  document.getElementById("bgMusic").play();

  // Hide intro and button
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
