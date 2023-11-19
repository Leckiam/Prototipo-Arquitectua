import { getUsuarios as getUsers, getRoles } from './infoUsers.js';

export function cargarVerPerfil(numRol) {
    class Usuario {
        constructor(rut, correo, nombre, edad, celular, direccion) {
            this.rut = rut;
            this.correo = correo;
            this.nombre = nombre;
            this.edad = edad;
            this.celular = celular;
            this.direccion = direccion;
        }
    }
    let listaUsuarios = getUsers();
    let listaRoles = getRoles();
    let user = listaUsuarios[numRol];
    console.log(listaUsuarios)
    console.log(user)
    console.log(user.rut)
    let content = `<br>
        <h1>${listaRoles[numRol]}</h1>
        <div class="contenedor">
            <div class="input-contenedor">
                <i class="fas fa-user icon"></i>
                <input type="text" placeholder="RUT" id="rut" value="${user.rut}" readonly>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-envelope icon"></i>
                <input type="email" placeholder="Correo Electronico" id="correo" value="${user.correo}" readonly>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-user icon"></i>
                <input type="text" placeholder="Nombre Completo" id="nombre" value="${user.nombre}" required>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-user icon"></i>
                <input type="number" placeholder="Edad" id="edad" value="${user.edad}" required>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-user icon"></i>
                <input type="number" placeholder="Celular" id="celular" value="${user.celular}" required>
            </div>
            <div class="input-contenedor">
                <i class="fas fa-user icon"></i>
                <input type="text" placeholder="Dirección" id="direccion" value="${user.direccion}" required>
            </div>
            <input type="submit" value="Guardar" class="button" id="btnLogReg" onclick="savePerfil()"><br>
        </div>
    `;
    document.getElementById('formVerPerfil').innerHTML = content;
}
