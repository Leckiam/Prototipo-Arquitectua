function validarForm(){
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    if (nombre.trim().length>=4) {
        if (permitirCopia()) {
            if (correo.trim().length!=0 && correo.includes('@') &&
            (correo.substr(-3)=='.cl' || correo.substr(-4)=='.com')) {
                alert('Su solicitud de certificado ha sido enviado correctamente');
                window.location.href="index.html";
            } else {
                alert('No ha ingresado un correo valido');
            }
        }else{
            alert('Su solicitud de certificado ha sido enviado correctamente');
            window.location.href="index.html";
        }
    }else {
        alert('No ha ingresado su nombre');
    }
}
function permitirCopia(){
    let chkTerm = document.getElementById("chkTerm");
    let divCorreo = document.getElementById("envioCopia");
    console
    if (chkTerm.checked) {
        divCorreo.style.display = 'block';
        return true;
    } else {
        divCorreo.style.display = 'none';
        return false;
    }
}