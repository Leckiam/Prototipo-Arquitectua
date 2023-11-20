let respaldoCertif = document.getElementsByClassName('container')[0];

function infoCertificado(listaInfo,index) {
    let itemProjectContenido = `
    <tr style="background: #d1d1d1; text-align: center;" class="item${index}">
        <td style="width: 60px;">C-${index}</td>
        <td>${listaInfo[0]}</td>
        <td>${listaInfo[1]}</td>
        <td><button type="button" class="btnVerProject rounded" onclick="verDetalleCertif(true)">Ver Detalle</button></td>
        <td><button type="button" class="btnAprob rounded"><a onclick="aprobar(${index},'${listaInfo[1]}')">Aprobar</a></button></td>
        <td><input style="width:100%;height: auto;padding: 0px;" value="" id="justific${index}"></td>
        <td><button type="button" class="btnRecha rounded"><a onclick="rechazar(${index},'${listaInfo[1]}')">Rechazar</a></button></td>
    </tr>
    `;
    return itemProjectContenido;
}
function addDatoTabla(){
    let table = document.getElementById('solicitudes');
    let dato1 = ['15-10-2023','Certificado de residencia'];
    let dato2 = ['15-10-2023','Certificado de historial vecinal'];
    let dato3 = ['15-10-2023','Certificado de residencia'];
    let dato4 = ['15-10-2023','Certificado de historial vecinal'];
    let dato5 = ['15-10-2023','Certificado de residencia'];
    let dato6 = ['15-10-2023','Certificado de historial vecinal'];
    let listaProyecto=[dato1,dato2,dato3,dato4,dato5,dato6];
    for (let i = 0; i < listaProyecto.length; i++) {
        table.innerHTML = table.innerHTML + infoCertificado(listaProyecto[i],i);
    }
}
function aprobar(id,nombre){
    let table = document.getElementById('solicitudes');
    let item = table.getElementsByClassName('item'+id)
    alert('El Certificado C-'+id+' '+nombre+' ha sido aprobado')
    item[id].remove();
}
function validarJustificacion(id){
    let justific = document.getElementById('justific'+id);
    if (justific.value!=0) {
        return true;
    } else {
        alert('No se puede rechazar la Inscripción I-'+id+', porque falta la justificación')
    }
}
function rechazar(id,nombre){
    let table = document.getElementById('solicitudes');
    let item = table.getElementsByClassName('item'+id)
    if (validarJustificacion(id)) {
        alert('El Certificado C-'+id+' '+nombre+' ha sido rechazado')
        item[id].remove();
    }
}
function verDetalleCertif(boolean){
    let certificados = document.getElementsByClassName('container')[0];
    if (boolean==true) {
        respaldoCertif = certificados.cloneNode(true);
        certificados.innerHTML= `
            <button class="rounded" style="background-color: black; color: #ffffff;" onclick="verDetalleCertif(false)">Volver</button>
            <div style="display: flex; justify-content: center; align-items: center;">
                <img src="../../../static/img/certificados/certificado de residencia.png" alt="" height="750">
            </div>
        `;
    } else {
        certificados.innerHTML = respaldoCertif.innerHTML;
    }
}