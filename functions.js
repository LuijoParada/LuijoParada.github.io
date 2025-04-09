let copy = document.querySelector('footer .fa-copy');
let copy2 = document.querySelector('.contact .fa-copy');
let correo = 'lujoparca@gmail.com';
let modal = document.querySelector('.modal-copied');
let parrafo = document.querySelector('.slogan');
let parrafo2 = document.querySelector('.slogan2');
/*debo usar otra cosa que no es innerhtml */
let palabras = parrafo.textContent;
let palabras2 = parrafo2.textContent;
let button1 = document.querySelector('.button-proj.p1');
let button2 = document.querySelector('.button-proj.p2');
let button3 = document.querySelector('.button-proj.p3');
let button4 = document.querySelector('.button-proj.p4');

let proyectoModal = document.querySelector('.clickout.m1');
let proyectoModal2 = document.querySelector('.clickout.m2');
let proyectoModal3 = document.querySelector('.clickout.m3');
let proyectoModal4 = document.querySelector('.clickout.m4');

let close = document.querySelector('.close.b1');
let close2 = document.querySelector('.close.b2');
let close3 = document.querySelector('.close.b3');
let close4 = document.querySelector('.close.b4');

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

copy.addEventListener("click", (event) =>{
    navigator.clipboard.writeText(correo).then(() => {
       modal.setAttribute("class", "modal-copied active")
        setTimeout(function(){modal.setAttribute("class", "modal-copied inactive")},2000)
    }
    );
});
copy2.addEventListener("click", (event) =>{
  navigator.clipboard.writeText(correo).then(() => {
     modal.setAttribute("class", "modal-copied active")
      setTimeout(function(){modal.setAttribute("class", "modal-copied inactive")},2000)
  }
  );
});

close.addEventListener("click", (event) =>{
  proyectoModal.setAttribute("class", "clickout m1 inactive")

});
close2.addEventListener("click", (event) =>{
  proyectoModal2.setAttribute("class", "clickout m2 inactive")

});
close3.addEventListener("click", (event) =>{
  proyectoModal3.setAttribute("class", "clickout m3 inactive")

});
close4.addEventListener("click", (event) =>{
  proyectoModal4.setAttribute("class", "clickout m4 inactive")

});

//agregar evento click a los botones para que se muestren los modales
button1.addEventListener("click", (event) =>{
  proyectoModal.setAttribute("class", "clickout m1 active")
});

button2.addEventListener("click", (event) =>{
  proyectoModal2.setAttribute("class", "clickout m2 active")
});

button3.addEventListener("click", (event) =>{
  proyectoModal3.setAttribute("class", "clickout m3 active")
});

button4.addEventListener("click", (event) =>{
  proyectoModal4.setAttribute("class", "clickout m4 active")
});

//cuando se presione la letra escapa se cierra el modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    proyectoModal.setAttribute("class", "clickout m1 inactive")
    proyectoModal2.setAttribute("class", "clickout m2 inactive")
    proyectoModal3.setAttribute("class", "clickout m3 inactive")
    proyectoModal4.setAttribute("class", "clickout m4 inactive")
  }
});

//cuando se presione el div clickout se cierra el modal
proyectoModal.addEventListener("click", (event) =>{
  proyectoModal.setAttribute("class", "clickout m1 inactive")
});
proyectoModal2.addEventListener("click", (event) =>{
  proyectoModal2.setAttribute("class", "clickout m2 inactive")
});
proyectoModal3.addEventListener("click", (event) =>{
  proyectoModal3.setAttribute("class", "clickout m3 inactive")
});
proyectoModal4.addEventListener("click", (event) =>{
  proyectoModal4.setAttribute("class", "clickout m4 inactive")
});
