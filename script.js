function media() {
    var distancia_media = document.getElementById("distancia_media").value;
    var litros_media = document.getElementById("litros_media").value;
    const consumoMedio = (distancia_media / litros_media);
    const consumoMedioResultado = consumoMedio.toFixed(1);
    alert("Consumo médio: " + (consumoMedioResultado) + " km/L");
    event.preventDefault();
}

function litros() {
    var distancia_litros = document.getElementById("distancia_litros").value;
    var consumo_litros = document.getElementById("consumo_litros").value;
    const litragem = (distancia_litros / consumo_litros);
    const litragemResultado = litragem.toFixed(1);
    alert("Litragem: " + (litragemResultado) + " L");
    event.preventDefault();
}

function distancia() {
    var litros_distancia = document.getElementById("litros_distancia").value;
    var consumo_distancia = document.getElementById("consumo_distancia").value;
    const autonomia = (litros_distancia * consumo_distancia);
    const autonomiaResultado = autonomia.toFixed(1);
    alert("Autonomia: " + (autonomiaResultado) + " km");
    event.preventDefault();
}