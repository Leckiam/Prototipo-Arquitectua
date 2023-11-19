import { getRoles } from './infoUsers';

export function cargarNavBar(isLogin,nameUser,rol){
    function logOut(space){
        window.location.href="../"+space+"Guest/index.html"
    }
    let listaRoles = getRoles();
    let btnLogOut = "";
    let gestionar =""
    let navBar = "";
    let space="";
    const rutaCompleta = window.location.pathname;
    const nombreArchivo = rutaCompleta.substring(rutaCompleta.lastIndexOf('/') + 1);
    if (rol >= 2) {
        space="../"
    }
    
    if (isLogin) {
        btnLogOut=`
        <li class="nav-item dropdown" style="width: 150px;">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style="color: #ffffff;" aria-expanded="false">
          ${nameUser}
          </a>
          <ul class="dropdown-menu">
            <li>
            <a class="dropdown-item" href="verPerfil.html">Ver Perfil</a>
            <a class="dropdown-item" onclick="${logOut(space)}">Cerrar Sesión</a>
            </li>
          </ul>
        </li>`;
    } else {
        btnLogOut= `
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="login.html">Iniciar Sesion</a>
            </li>`;
    }
    if (rol >= 2){
        gestionar = `
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style="color: #ffffff;" aria-expanded="false">
            Gestionar
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="proyectos.html">Proyectos</a>`
            if (rol=='Secretario') {
                gestionar=gestionar+
                `<a class="dropdown-item" href="inscripciones.html">Inscripciones</a>
                <a class="dropdown-item" href="certificados.html">Certificados</a>`
            } else if (rol=='Tesorero') {
                `<a class="dropdown-item" href="inscripciones.html">Presupuesto</a>`
            }
            gestionar=gestionar+
            `</li>
          </ul>
        </li>`;
    }
    navBar = `
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Junta de Vecinos S.A.</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto-custom">`;
    //Listar Opciones del NavBar
    let listaOpt = ['Inicio','Nosotros','Directiva','Noticias','Actividades','Contacto'];
    for (let i = 0; i < listaOpt.length; i++) {
        let href = listaOpt[i]+".html";
        if (nombreArchivo=='index.html') {
            if (listaOpt[i]=='Inicio' || listaOpt[i]=='Directiva' || listaOpt[i]=='Contacto') {
                href = "#"+listaOpt[i];
            }
            navBar = navBar + `
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="`+href+`">`+listaOpt[i]+`</a>
                </li>`
        } else {
            if (!(listaOpt[i]=='Inicio' || listaOpt[i]=='Directiva' || listaOpt[i]=='Contacto')) {
                navBar = navBar + `
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="`+href+`">`+listaOpt[i]+`</a>
                </li>`
            }
        }
    }
    if (rol=='General') {
        let optSolicitud = `
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style="color: #ffffff;" aria-expanded="false">
            Solicitudes
            </a>
            <ul class="dropdown-menu">
                <li>
                <a class="dropdown-item" href="solicitarCertif.html">Certificados</a>
                <a class="dropdown-item" href="solicitarProject.html">Proyectos</a>
                </li>
            </ul>
        </li>`;
        navBar = navBar + optSolicitud;
    } else if (rol=='') {
        let optSolicitud = `
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style="color: #ffffff;" aria-expanded="false">
            Solicitudes
            </a>
            <ul class="dropdown-menu">
                <li>
                <a class="dropdown-item" href="solicitarCertif.html">Certificados</a>
                <a class="dropdown-item" href="register.html">Inscribirse</a>
                </li>
            </ul>
        </li>`;
        navBar = navBar + optSolicitud;
    }
    navBar= navBar+gestionar+btnLogOut
    navBar = navBar + `
            </ul>
        </div>
    </div>`;
    document.getElementById("navBarBlock").innerHTML= navBar;
};
