// Image switcher

const myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/d20.png') {
      myImage.setAttribute ('src','images/d4.png');
    } else {
      myImage.setAttribute ('src','images/d20.png');
    }
  }

  // Personalised dice roller title

  let myButton = document.querySelector("button");
  let myHeading = document.querySelector("h1");

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}'s Dice Roller`;
  }

  myButton.addEventListener("click", () => {
    setUserName();
  });