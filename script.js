console.log(document.title);

//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

var titulo=document.querySelector('#gen-1').innerHTML='Generasión 1 Pokimon';

//Cambia el color de fondo de la primera generación de Pokimon.

var fondo=document.querySelector('#gen-1').style.color='red';
var fondobulbasur=document.querySelector('.infocard').style.backgroundColor='pink'
var fondolist =document.querySelector('.infocard-list.infocard-list-pkmn-lg').style.backgroundColor='yellow';

//Imprime por consola la URL de la página.

var urlpagina = window.location;
console.log(urlpagina);

//Imprime por consola el dominio de la página.

var dominio = window.location.hostname;
console.log(dominio);

//Imprime todos los nodos de imagen.
var nodosimagen = document.querySelectorAll('span.infocard-lg-img > a > img');     //[0].attributes.src.nodeValue;
for ( let i = 0; i < nodosimagen.length; i++) {
    console.log(nodosimagen[i]);
};
// Para la profesora, hemos intenado hacer el ejercicio tambien con Nacho y no hay manera, en el siguiente lo hemos intentnado pero al no poder acceder bien al src no podemos cambiar la direccion.

//Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

var sustituir = document.querySelectorAll('img')
sustituir.forEach(img => img.src = 'https:media.giphy.com/media/2v170e71aanfi/giphy.gif');

//Premium:Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
