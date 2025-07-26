let displayMsg = document.querySelector(".display-msg");
let buttons = document.querySelectorAll(".btn");





let store = "";
let operator;


buttons.forEach((Element) => {
  Element.addEventListener("click", function (e) {
    let btnClick = e.target.innerHTML;


    if (btnClick === "AC") {
      clearScreen();

    } else if (btnClick === "Del") {
      clearWord();

    } else {
      excution(btnClick);

    }
  });
});



function clearScreen() {
  displayMsg.innerHTML = "";
  store = "";
}


function clearWord() {
  store = store.slice(0, -1);
  displayMsg.innerHTML = displayMsg.innerHTML.slice(0, -1);

}



function excution(btnClick) {
  if (btnClick !== "=") {
    store += btnClick;
    displayMsg.innerHTML += btnClick;

  } else {
    let calculation = eval(store);
    let result = calculation % 1 === 0 ? calculation : calculation.toFixed(3);

    if (isNaN(result)) {
      msgError();

    } else {
      msgResult(result);


    }
  }
}


function msgError() {
  displayMsg.innerHTML = "ERROR!";
  store = "";
}

function msgResult(result) {
  displayMsg.innerHTML = result;

}

