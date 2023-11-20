function validarLogin(){
    event.preventDefault();
    let correo = document.getElementById("correo").value;
    let password1 = document.getElementById("password").value;
    if (validarCorreoPass(correo,password1,password1)) {
        getUser(correo);
    }else{
        alert('Su correo o constraseña no son validos');
    }
}
function getUser(correo){
    const urlBase = "../Directiva/";
    if (correo.toLowerCase()=='aug.veniam@gmail.com') {
        //Augusto Veniam - Presidente
        window.location.href=urlBase+"Presidente/index.html";
    } else if (correo.toLowerCase()=='gal.guzman@gmail.com'){
        //Galit Guzman - Secretaria
        window.location.href=urlBase+"Secretario/index.html";
    } else if (correo.toLowerCase()=='suz.labor@gmail.com'){
        //Suzana Labor - Tesorera
        window.location.href=urlBase+"Tesorero/index.html";
    } else if (correo.toLowerCase()=='ric.parker@gmail.com') {
        //Rick Parker - Miembro General
        window.location.href=urlBase+"../MiembGeneral/index.html";
    } else if (correo.toLowerCase()=='lau.puentes@gmail.com') {
        //Lautaro Puentes - Vecino
        window.location.href=urlBase+"../Vecino/index.html";
    } else {
        alert('No existe ningun miembro registrado con estos datos')
    }
}
function validarRelleno(rut,edad,nombre,archivo){
    if (rut.length>=8) {
        if (edad>=14) {
            if (nombre.trim().length>=4) {
                if (archivo.files[0]) {
                    console.log('vamos okey');
                    return true;
                } else {
                    console.log('nada okey');
                }
                console.log('casi todo okey');
            }
        }
    }
    return false;
}
function validarCorreoPass(correo,password1,password2){
    let estado = false;
    if (correo.trim().length!=0 && correo.includes('@') &&
        (correo.substr(-3)=='.cl' || correo.substr(-4)=='.com')) {
            if (password1.trim().length>5 && password1.trim()==password2.trim()) {
                estado=true;
            }
        }
    return estado;
}

function permitirLogReg(){
    let chkTerm = document.getElementById("chkTerm")
    let btnLogReg = document.getElementById("btnLogReg")
    if (chkTerm.checked) {
        btnLogReg.disabled = false;
    } else {
        btnLogReg.disabled = true;
    }
}

function validarRegister(){
    event.preventDefault();
    let rut = document.getElementById("rut").value;
    let correo = document.getElementById("correo").value;
    let edad = document.getElementById("edad").value;
    let nombre = document.getElementById("nombre").value;
    let password1 = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let archivo = document.getElementById("residencia");
    console.log(archivo.files[0])
    if (validarCorreoPass(correo,password1,password2)) {
        if (validarRelleno(rut,edad,nombre,archivo)) {
            alert('Su solicitud de inscripcion ha sido exitosa')
            window.location.href="login.html"
        }else{
            alert('Su RUT, Nombre o edad no son validos');
        }
    }else{
        alert('Su correo o constraseña no son validos');
    }
}