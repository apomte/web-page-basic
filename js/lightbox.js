const imagenes = document.querySelectorAll('.img_galeria');
const imagenesligth = document.querySelector('.agregar_imagen');
const contenedorligth = document.querySelector('.img_light');
const empanada1 = document.querySelector('.empanada');

// cuando alguien le de click a la imagen saber donde esta ubicada
imagenes.forEach(imagen  =>{
    imagen.addEventListener('click', ()=>{
        aparecerimg(imagen.getAttribute('src'))
    })
})
// si el usuario da click en la x o fuera de la imagen se sale
contenedorligth.addEventListener('click',(e)=>{
    if(e.target !== imagenesligth){
        contenedorligth.classList.toggle('show');
        imagenesligth.classList.toggle('showImage')
        empanada1.style.opacity = '1';
    }
})

// funcion para que aparesca la imagen al darle click
const aparecerimg = (imagen)=>{
    imagenesligth.src = imagen;
    contenedorligth.classList.toggle('show');
    imagenesligth.classList.toggle('showImage');
    empanada1.style.opacity = '0';
}
