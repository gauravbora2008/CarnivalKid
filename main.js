var heroElem;

function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function() {
  // DOM is loaded and ready for manipulation here

  heroElem = document.getElementById("hero");
  heroElem.style.left = "0px";

//   console.log(heroElem);

  addMovementControllers();
});

function addMovementControllers() {
  document.addEventListener("keydown", movementKeysHandler);
}

function movementKeysHandler(e) {
//   console.log(e);

  switch (e.key) {
    case "w": {
    //   console.log("w pressed");
      heroElem.classList.add("jump");
      setTimeout(() => {
        heroElem.classList.remove("jump");
      }, 1000);
      break;
    }
    case "a": {
    //   console.log("a pressed");
      heroElem.style.left =
        parseInt(heroElem.style.left.split("px")[0]) - 10 + "px";
      break;
    }
    case "s": {
    //   console.log("s pressed");
      heroElem.classList.add("kneeldown");
      setTimeout(() => {
        heroElem.classList.remove("kneeldown");
      }, 1000);

      // document.addEventListener('keyup', heroElem.classList = ['']);
      break;
    }
    case "d": {
    //   console.log("d pressed", heroElem.style.left);
      heroElem.style.left =
        parseInt(heroElem.style.left.split("px")[0]) + 10 + "px";
      break;
    }
  }
}
