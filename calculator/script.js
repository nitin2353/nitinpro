function conc(value) {
    document.getElementById("total").value += value;
  }
  function char(operator) {
    let screen = document.getElementById("total");
    if (operator === '=') {
      screen.value = eval(screen.value);
    } else {
      screen.value += operator;
    }
  }
  function clearScreen() {
    document.getElementById("total").value = '';
  }