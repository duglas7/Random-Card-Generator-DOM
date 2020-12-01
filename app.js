// Definicion de baraja numeros y palo
const numeroCarta = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const palo        = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
// Funcion para generar la carta y el palo de manera aleatoria
const cartaAleatoria = () => {
    // Se genera la posicion de los arreglos de manera aleatoria
  
    let randomNumeroCarta = numeroCarta[Math.floor(Math.random()*numeroCarta.length)];
    let randomPalo        = palo[Math.floor(Math.random()*palo.length)];
    //Agregamos el resultado a el HTML

    document.getElementById("tope").innerHTML   = randomPalo;
    document.getElementById("numero").innerHTML = randomNumeroCarta;
    document.getElementById("bottom").innerHTML = randomPalo;

    //Condicion para agregar una clase de color rojo o negro dependiendo del palo generado
    if (randomPalo === "&hearts;" || randomPalo === "&diams;"){
        tope.classList.add('rojo');
        bottom.classList.add('rojo');
        numero.classList.add('rojo');
    }else {
        tope.classList.add('negro');
        bottom.classList.add('negro');
        numero.classList.add('negro');
    }
}

window.onload = cartaAleatoria();
/* 
document.querySelector('.btn').addEventListener("click", Location.reload()); */