function aplicarDesconto() {
  let gasolina = document.getElementById("gasolina");
  let etanol = document.getElementById("etanol");
  let diesel = document.getElementById("diesel");

  gasolina.textContent = (parseFloat(gasolina.textContent) * 0.9).toFixed(2);
  etanol.textContent = (parseFloat(etanol.textContent) * 0.9).toFixed(2);
  diesel.textContent = (parseFloat(diesel.textContent) * 0.9).toFixed(2);

  alert("Desconto aplicado com sucesso!");
}
