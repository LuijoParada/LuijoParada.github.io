
let parrafo = document.querySelector('.slogan');
let parrafo2 = document.querySelector('.slogan2');
/*debo usar otra cosa que no es innerhtml */
let palabras = parrafo.textContent;
let palabras2 = parrafo2.textContent;

parrafo.textContent = '';
parrafo2.textContent = '';

function writer(texto, lugar) {
    let index = 0;

    function writeChar() {
        if (index < texto.length) {
            lugar.textContent += texto[index];
            index++;
            setTimeout(writeChar, 50);
        }
    }
    writeChar();
}
writer(palabras,parrafo)
setTimeout(function(){writer(palabras2, parrafo2)},3000)


var drop = document.querySelector(".menu-mobile");

menu.addEventListener("click", (event) =>{

    if(drop.className!=="menu-mobile active"){
      drop.setAttribute("class", "menu-mobile active")
    }else{
      drop.setAttribute("class", "menu-mobile inactive")
    }
});