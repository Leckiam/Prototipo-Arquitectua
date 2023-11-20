import { getRoles } from './infoUsers.js';

export function cargarNavBar(isLogin, nameUser, numRol) {
    console.log('navBar:' + numRol)
    let listaRoles = getRoles();
    let nameRol = listaRoles[numRol];
    let btnLogOut = "";
    let gestionar = ""
    let navBar = "";
    let space = "";
    const rutaCompleta = window.location.pathname;
    const nombreArchivo = rutaCompleta.substring(rutaCompleta.lastIndexOf('/') + 1);

    if (isLogin) {
        btnLogOut = `
        <li class="nav-item dropdown" style="width: 150px;">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style="color: #ffffff;" aria-expanded="false">
          ${nameUser}
          </a>
          <ul class="dropdown-menu">
            <li>
            <a class="dropdown-item" href="verPerfil.html">Ver Perfil</a>
            <a class="dropdown-item" onclick="logOut(${space})">Cerrar Sesión</a>
            </li>
          </ul>
        </li>`;
    } else {
        btnLogOut = `
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="login.html">Iniciar Sesion</a>
            </li>`;
    }
    if (numRol >= 2) {
        space = "../";
        gestionar = `
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style="color: #ffffff;" aria-expanded="false">
            Gestionar
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="proyectos.html">Proyectos</a>`
        if (nameRol == 'Secretario') {
            gestionar = gestionar +
                `<a class="dropdown-item" href="inscripciones.html">Inscripciones</a>
                <a class="dropdown-item" href="certificados.html">Certificados</a>`
        } else if (nameRol == 'Tesorero') {
            `<a class="dropdown-item" href="inscripciones.html">Presupuesto</a>`
        }
        gestionar = gestionar +
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
    let listaOpt = ['Inicio', 'Nosotros', 'Noticias', 'Actividades'];
    for (let i = 0; i < listaOpt.length; i++) {
        let href = listaOpt[i].toLowerCase() + ".html";
        if (listaOpt[i]=='Inicio'){
            href = 'index.html'
        }
        navBar = navBar + `
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="`+ href + `">` + listaOpt[i] + `</a>
            </li>`;
    }
    if (numRol >= 0 && numRol <= 1) {
        const a_projectos = `<a class="dropdown-item" href="solicitarProject.html">Proyectos</a>`;
        const a_register = `<a class="dropdown-item" href="register.html">Inscribirse</a>`;
        let optAdd = ``;
        if (numRol == 1) {
            optAdd = a_projectos;
        } else if (numRol == 0) {
            optAdd = a_register;
        }
        let optSolicitud = `
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" style="color: #ffffff;" aria-expanded="false">
                Solicitudes
                </a>
                <ul class="dropdown-menu">
                    <li>
                    <a class="dropdown-item" href="solicitarCertif.html">Certificados</a>
                    ${optAdd}
                    </li>
                </ul>
            </li>`;
        navBar = navBar + optSolicitud;
    }

    navBar = navBar + gestionar + btnLogOut
    navBar = navBar + `
            </ul>
        </div>
    </div>`;
    document.getElementById("navBarBlock").innerHTML = navBar;
};
