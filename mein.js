function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}
document.querySelectorAll('.tecla')

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while(contador < 9){
  listaDeTeclas[contador].onclick = function(){
    tocaSomPom('#som_tecla_pom');
  }
}
  contador = contador + 1;