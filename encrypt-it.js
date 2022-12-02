/*
 * Starter file 
 */


(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    document.getElementById("encrypt-it").addEventListener("click", encryptText);
    document.getElementById("reset").addEventListener("click", reset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function encryptText() {
    console.log("Button clicked!");
    let text = document.getElementById("input-text").value;
    let result = "";
    if (document.getElementById("cipher-type").value === "shift") {
      for (let i = 0; i < text.length; i++) {
        if (text[i] < 'A' || text[i] > 'z') {
          result += text[i]
        } else if (text[i] === 'z') {
          result += 'a';
        } else if (text[i] === 'Z') {
          result += 'A';
        } else {
          let letter = text.charCodeAt(i);
          let resultLetter = String.fromCharCode(letter + 1);
          result += resultLetter;
        }
      }
    } else {
      for (let i = 0; i < text.length; i++) {
        if (text[i] < 'A' || text[i] > 'z') {
          result += text[i]
        } else if (text[i] >= 'A' && text[i] <= 'Z'){
          let resultLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          result += resultLetter;
        } else {
          let resultLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          result += resultLetter;
        }
      }
    }

    let radio = document.getElementsByName("text-size");
    if (radio[0].checked) {
      document.getElementById("result").style.fontSize = "12pt";
    } else {
      document.getElementById("result").style.fontSize = "24pt";
    }

    if (document.getElementById("all-caps").checked) {
      let text = result.toUpperCase();
      document.getElementById("result").innerText = text;
    } else {
      document.getElementById("result").innerText = result;
    }

  }

  function reset() {
    document.getElementById("input-text").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("all-caps").checked = false;
    let radio = document.getElementsByName("text-size");
    radio[0].checked = true;
  }

})();
