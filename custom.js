//menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si se encuentra ocultado
       menu.style.display = "block";
       menu_visible = true;

}
else{
    menu.style.display = "none";
    menu_visible = false;
}
}
//ocultar el menu al seleccionar alguna opcion
let links = document.querySelectorAll("nav a");
for(var x = 0;x<links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
