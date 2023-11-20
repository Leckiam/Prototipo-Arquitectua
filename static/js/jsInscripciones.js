let listaUsuarios = [
    ['21.347.632-K', 'mai.salto@gmail.com', 'Maikel Salto', 19, 932547238, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['20.345.670-K', 'ale.puente@gmail.com', 'Alejandro Puente', 23, 912341234, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['20.345.678-K', 'alf.asfalto@gmail.com', 'Alfredo Asfalto', 24, 912344321, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['21.345.696-K', 'mar.tirado@gmail.com', 'Marcelo Tirado', 20, 912438765, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['21.345.678-K', 'mat.polako@gmail.com', 'Matías Polako', 29, 912345678, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['21.345.678-K', 'cri.sandia@gmail.com', 'Cristopher Sandia', 29, 912345678, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
];
function infoInscripcion(listaInfo,index) {
    console.log(listaInfo[1]);
    console.log(listaInfo[1][2]);
    let nombre = listaInfo[1][2];
    let itemProjectContenido = `
    <tr style="background: #d1d1d1; text-align: center;" class="item${index}">
        <td style="width: 60px;">I-${index}</td>
        <td>${listaInfo[0]}</td>
        <td>${nombre}</td>
        <td><button type="button" class="btnVerProject rounded" onclick="verDetalleInscript(true,${listaInfo[1]})">Ver Datos</button></td>
        <td><button type="button" class="btnAprob rounded"><a onclick="aprobar(${index},'${nombre}')">Aprobar</a></button></td>
        <td><input style="width:100%;height: auto;padding: 0px;" value="" id="justific${index}"></td>
        <td><button type="button" class="btnRecha rounded"><a onclick="rechazar(${index},'${nombre}')">Rechazar</a></button></td>
    </tr>
    `;
    return itemProjectContenido;
}
function addDatoTabla(){
    let table = document.getElementById('solicitudes');
    let dato1 = ['15-10-2023',listaUsuarios[0]];
    let dato2 = ['15-10-2023',listaUsuarios[1]];
    let dato3 = ['15-10-2023',listaUsuarios[2]];
    let dato4 = ['15-10-2023',listaUsuarios[3]];
    let dato5 = ['15-10-2023',listaUsuarios[4]];
    let dato6 = ['15-10-2023',listaUsuarios[5]];
    let listaProyecto=[dato1,dato2,dato3,dato4,dato5,dato6];
    for (let i = 0; i < listaProyecto.length; i++) {
        console.log(listaProyecto);
        console.log(listaProyecto.length);
        console.log(i);
        console.log(listaProyecto[i]);
        table.innerHTML = table.innerHTML + infoInscripcion(listaProyecto[i],i);
    }
}
function aprobar(id,nombre){
    let table = document.getElementById('solicitudes');
    let item = table.getElementsByClassName('item'+id)
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
    let item = table.getElementsByClassName('item'+id)
    if (validarJustificacion(id)) {
        alert('La Inscripción I-'+id+' '+nombre+' ha sido rechazada')
        item[id].remove();
    }
}

function verDetalleInscript(boolean, listaInfo){
    alert('xd')
}