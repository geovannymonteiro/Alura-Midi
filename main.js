function tocaSom(seletorAudio){
  const elemento = document.querySelector(seletorAudio);

  if(elemento  && elemento.localName ==='audio' ){
    elemento.play();
 }
 else{
    //alert('elemento nao encontrado');
    console.log('elemento nao encontrado ou seletor invalido');
 }
}
const listaDeTeclas=document.querySelectorAll('.tecla');

//enquanto
for (let contador=0;contador < listaDeTeclas.length; contador++) {
    const tecla=listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento);
    const idAudio=`#som_${instrumento}`;//template string
    //console.log(idAudio);
    //'#som{instrumento}'
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown=function(evento){

        console.log(evento.code=='Space')
        if(evento.code='Space'  || evento.code=='Enter'){
            tecla.classList.add('ativa');       
        }
     
    }
        
       tecla.onkeyup=function(){
        tecla.classList.remove('ativa');
       }
}

