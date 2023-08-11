function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener("keypress", (e) => {
      if (e.keyCode !== 13) return;
      this.eqDisplay();
    });
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clearDisplay();
      if (el.classList.contains("btn-del")) this.delDisplay();
      if (el.classList.contains("btn-eq")) this.eqDisplay(el);
    });
  };

  this.clearDisplay = () => (this.display.value = " ");

  this.eqDisplay = (el) => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert("conta inválida");
        return;
      }

      this.display.value = conta;
    } catch (e) {
      alert("conta inválida");
      return;
    }
  };

  this.delDisplay = () =>
    (this.display.value = this.display.value.slice(0, -1));

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
