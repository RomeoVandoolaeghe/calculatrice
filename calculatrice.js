class BaseCalculator {
  constructor() {
    // Do some stuff
    this.MaListe = [];
  }

  addToInput(charClicked) {
    this.MaListe.push(charClicked);
    document.getElementById("input").value += charClicked;
  }
  

  clearInput() {
    this.MaListe.push("clear");
    document.getElementById("input").value = "";
  }

  computeResult() {
    var input = document.getElementById("input").value;
    try {
      var result = eval(input);
      this.MaListe.push("compute");
      document.getElementById("result").value = input + " = " + result;
    } catch {
      document.getElementById("result").value = "Error";
    }
    this.clearInput();
  }

  getList() {
    return this.MaListe;
  }

  setInputFromList(liste) {
    this.clearInput();
    for (let i = 0; i < liste.length; i++) {
      if (liste[i] === "clear") {
        this.clearInput();
      } else if (liste[i] === "compute") {
        this.computeResult();
      } else {
        this.addToInput(liste[i]);
      }
    }
  }

  clearList() {
    this.MaListe = [];
  }



}

let baseCalculator = new BaseCalculator();
