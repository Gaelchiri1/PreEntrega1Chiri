function calcularTotal() {
  const medialunaPrecio = 2.5;
  const cafeConLechePrecio = 3.0;

  const cantidadMedialunas = parseInt(document.getElementById("medialunas").value);
  const cantidadCafeConLeche = parseInt(document.getElementById("cafeConLeche").value);

  const total = (medialunaPrecio * cantidadMedialunas) + (cafeConLechePrecio * cantidadCafeConLeche);

  if ((cantidadMedialunas + cantidadCafeConLeche) > 1) {
    const descuento = total * 0.1;
    return total - descuento;
  }

  return total;
}

function mostrarTotal() {
  const total = calcularTotal();
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `Total a pagar: $${total.toFixed(2)}`;
}


function cargarOpciones() {
  const selectMedialunas = document.getElementById("medialunas");
  const selectCafeConLeche = document.getElementById("cafeConLeche");

  for (let i = 0; i <= 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i.toString();
    selectMedialunas.appendChild(option);
    selectCafeConLeche.appendChild(option.cloneNode(true));
  }
}

cargarOpciones();
