function tocSsom (idElementoAudio) {
    document.querySelector (idElementoAudio). paly();
}

const listaDeTeclas = document.querySelectorAll ('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla= listaDeTeclas [contador];
    const instrumento = tecla.classlist[1];
    const idAudio = `#som_${instrumento}` //template string 

    tecla.onclick  = function () {
        tocaSom (idAudio);
    }

}


