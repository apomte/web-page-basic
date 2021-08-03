const empanada = document.querySelector('.empanada');
const menu = document.querySelector('.menu-navegacion');

//cuando le das click a la barra de menu le quita y le pone la clase spread

empanada.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
})

//cuando  le de click a algo que no sea el menu o la clase empanada se va a salir del menu

window.addEventListener('click', e=>{
     if(menu.classList.contains('spread') && e.target != menu && e.target != empanada){
         menu.classList.toggle("spread");
    }
})