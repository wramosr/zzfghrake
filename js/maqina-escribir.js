const maquina = document.querySelector('#maquina-escribir');

const maquinaEscribir = (text = "", tiempo = 200, etiqueta = "") => {
    let arrayCaracteres = text.split('');
    etiqueta.innerHTML = "";
    let cont = 0;
    let escribir = setInterval(function () {
        etiqueta.innerHTML += arrayCaracteres[cont];
        cont++;
        if (cont === arrayCaracteres.length) {
            clearInterval(escribir);
            
        }
    }, tiempo)
}
maquinaEscribir("Mi amor Andrea Santiago,antes de manifestarte la alegria que siento este dia por cumplir 02 años de enamorados, Quiero agradecer a Dios por haberte puesto en mi camino, y a nuestras familias por aceptar y bendecir nuestra relacion. Tú mi amor sabes perfectamente los sentimientos que me unen a ti hace exactamente 02 años. Ese amor, fragil tal vez al principio, se fue cimentando dia a dia, como siempre lo habiamos conversado esos cimientos con los valores y el amor que nos une, por eso me siento feliz de estar a tu lado y poder caminar junto a ti cumpliendo nuestros objetivos. Con Mucho cariño, tu amor, Wilson...",50,maquina);