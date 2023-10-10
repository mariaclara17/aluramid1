function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (conrador = 0; contador < listaDeTeclas.length;contador++){

  const instrumento = listaDeTeclas[contador].classlist[1];

  const tecla = listaDeTeclas[contador];

  const idAudio = `#som_${instrumento}`

  tecla.onclick = function(){
      tocaSom(idAudio)
  };

}