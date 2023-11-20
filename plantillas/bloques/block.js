import { cargarNavBar as carNavBar } from './navBarHead.js';
import { cargarFooter as carFooter } from './footer.js';
import { cargarIndex as carIndex } from './contentIndex.js';
import { cargarVerPerfil as carPerfil } from './contentPerfil.js';

export function cargarHead() {
    let headDefault = document.getElementById("headBlock").innerHTML;
    document.getElementById("headBlock").innerHTML = headDefault + `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    `;
};
export function cargarNavBar(isLogin, nameUser, rol) {
    carNavBar(isLogin, nameUser, rol);
}
export function cargarFooter() {
    carFooter();
}
export function cargarIndex(isDirectiva) {
    carIndex(isDirectiva);
}
export function cargarVerPerfil(numRol) {
    console.log('block:'+numRol);
    carPerfil(numRol);
}
