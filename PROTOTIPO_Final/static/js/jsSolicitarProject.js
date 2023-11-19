function validarForm(){
    event.preventDefault();
    let estado=false;
    let tipoProject = document.getElementById('tipoProject').value;
    let descrip = document.getElementById('descProject').value;
    let lugar = document.getElementById('lugar').value;
    let fecha = document.getElementById('fechaProject').value;
    let costo = document.getElementById('costoTotal').value;
    if (tipoProject.trim().length>=6) {
        if (descrip.trim().length>=10) {
            if (lugar.trim().length>=4) {
                if (fecha) {
                    if (costo>=10000) {
                        estado=true;
                    }
                }
            }
        }
        if (estado) {
            alert('Su solicitud de proyecto ha sido enviado correctamente');
            window.location.href="index.html";
        } else {
            alert('No ha rellenado el formulario por completo');
        }
    }else {
        alert('No ha rellenado el formulario por completo');
    }
}