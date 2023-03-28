class BaseCalculator {
  constructor() {
    // Do some stuff
    this.MaListe = [];
  }

  addToInput(charClicked) {
    document.getElementById("input").value += charClicked;
  }
  

  clearInput() {
    document.getElementById("input").value = "";
  }

  computeResult() {
    var input = document.getElementById("input").value;
    try {
      var result = eval(input);
      document.getElementById("result").value = input + " = " + result;
    } catch {
      document.getElementById("result").value = "Error";
    }
    clearInput();
  }


}

let baseCalculator = new BaseCalculator();
