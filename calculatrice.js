let string = "";

function addToString(str) {
  string = string.concat(str);
  document.getElementById("zs").innerHTML = string;
  console.log(string);
}

function result() {
  res = eval(string);
  document.getElementById("input").innerHTML = string;
  document.getElementById("egale").innerHTML = "=";
  document.getElementById("res").innerHTML = res;

  console.log(res);
}

function effacer() {
  string = "";
  document.getElementById("zs").innerHTML = string;
  document.getElementById("input").innerHTML = "";
  document.getElementById("egale").innerHTML = "";
  document.getElementById("res").innerHTML = "";

}
