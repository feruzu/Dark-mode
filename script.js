const colorDark = document.querySelector('.tema-switch input[type="checkbox"]');

function cambiaColor(e) {
    if(e.target.checked) {
        document.documentElement.setAttribute('tema', 'dark');
    }else{
        document.documentElement.setAttribute('tema', 'light');
    }
}

colorDark.addEventListener('change', cambiaColor, false);

