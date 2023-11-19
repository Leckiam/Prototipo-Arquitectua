function infoInscripcion(listaInfo,index) {
    let itemProjectContenido = `
    <tr style="background: #d1d1d1; text-align: center;" class="item">
        <td style="width: 60px;">I-${index}</td>
        <td>${listaInfo[0]}</td>
        <td>${listaInfo[1]}</td>
        <td><button type="button" class="btnVerProject rounded">Ver Datos</button></td>
        <td><button type="button" class="btnAprob rounded"><a onclick="aprobar(${index},'${listaInfo[1]}')">Aprobar</a></button></td>
        <td><input style="width:100%;height: auto;padding: 0px;" value="" id="justific${index}"></td>
        <td><button type="button" class="btnRecha rounded"><a onclick="rechazar(${index},'${listaInfo[1]}')">Rechazar</a></button></td>
    </tr>
    `;
    return itemProjectContenido;
}
function addDatoTabla(){
    let table = document.getElementById('solicitudes');
    let dato1 = ['15-10-2023','Maikel Cisternas'];
    let dato2 = ['15-10-2023','Alejandro Fernandez'];
    let dato3 = ['15-10-2023','Alfredo Castro'];
    let dato4 = ['15-10-2023','Cristopher Hernandez'];
    let dato5 = ['15-10-2023','Marcelo Castillo'];
    let dato6 = ['15-10-2023','Matias Ossandon'];
    let listaProyecto=[dato1,dato2,dato3,dato4,dato5,dato6];
    for (let i = 0; i < listaProyecto.length; i++) {
        table.innerHTML = table.innerHTML + infoInscripcion(listaProyecto[i],i);
    }
}
function aprobar(id,nombre){
    let table = document.getElementById('solicitudes');
    let item = table.getElementsByClassName('item')
    alert('La Inscripción I-'+id+' '+nombre+' ha sido aprobado')
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
    let item = table.getElementsByClassName('item')
    if (validarJustificacion(id)) {
        alert('La Inscripción I-'+id+' '+nombre+' ha sido rechazada')
        item[id].remove();
    }
}