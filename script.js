const colorDark = document.querySelector('.tema-switch input[type="checkbox"]');

function cambiaColor(e) {
    if(e.target.checked) {
        document.documentElement.setAttribute('tema', 'dark');
    }else{
        document.documentElement.setAttribute('tema', 'light');
    }
}
colorDark.addEventListener('change', cambiaColor, false);



// Botón like
const boton = document.querySelector('button');
const corazonLike = document.querySelector('.bx.bxs-heart');

let clicked = false;

boton.addEventListener('click', () => {
    if(!clicked){
        clicked = true;
        document.getElementById("si-like").style.display = "contents"
        document.getElementById("no-like").style.display = "none"
    }else{
        clicked = false;
        document.getElementById("no-like").style.display = "contents"
        document.getElementById("si-like").style.display = "none"
    }
});

