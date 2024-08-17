


let parrafo = document.querySelector('.slogan');
let parrafo2 = document.querySelector('.slogan2');

palabras = parrafo.innerHTML; 
palabras2 = parrafo2.innerHTML;

parrafo.innerHTML = '' ;
parrafo2.innerHTML = '' ;

function writer(texto, lugar) {
    let index = 0;
  
    function writeChar() {
      if (index < texto.length) {
        lugar.innerHTML += texto[index];
        index++;
        setTimeout(writeChar, 50);
      }
    }
  
    writeChar();
  }

writer(palabras,parrafo)

setTimeout(function(){writer(palabras2, parrafo2)},2000)