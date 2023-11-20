let listaUsuarios = [
    ['21.347.632-K', 'mai.salto@gmail.com', 'Maikel Salto', 19, 932547238, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['20.345.670-K', 'ale.puente@gmail.com', 'Alejandro Puente', 23, 912341234, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['20.345.678-K', 'alf.asfalto@gmail.com', 'Alfredo Asfalto', 24, 912344321, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['21.345.696-K', 'mar.tirado@gmail.com', 'Marcelo Tirado', 20, 912438765, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['21.345.678-K', 'mat.polako@gmail.com', 'Matías Polako', 29, 912345678, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
];
function infoInscripcion(listaInfo,index) {
    console.log(listaInfo[1]);
    console.log(JSON.parse(listaInfo[1])[2]);
    let nombre = JSON.parse(listaInfo[1])[2];
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
    let dato1 = ['15-10-2023',JSON.stringify(listaUsuarios[0])];
    let dato2 = ['15-10-2023',JSON.stringify(listaUsuarios[1])];
    let dato3 = ['15-10-2023',JSON.stringify(listaUsuarios[2])];
    let dato4 = ['15-10-2023',JSON.stringify(listaUsuarios[3])];
    let dato5 = ['15-10-2023',JSON.stringify(listaUsuarios[4])];
    let dato6 = ['15-10-2023',JSON.stringify(listaUsuarios[5])];
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
    console.log(listaInfo)
    let listaSoli = JSON.parse(listaInfo);
    let inscripts = document.getElementsByClassName('container')[0];
    if (boolean==true) {
        respaldoInscript = inscripts.cloneNode(true);
        inscripts.innerHTML= `
            <button class="rounded" style="background-color: black; color: #ffffff;" onclick="verDetalleInscript(false)">Volver</button>
            <div class="row mb-3 respond">
                <table class="table table-bordered" id="solicitudes">
                    <thead class="table-dark" style="text-align: center;">
                        <tr>
                            <td scope="col">RUT</td>
                            <td scope="col">${listaInfo[0]}</td>
                        </tr>
                        <tr>
                            <td scope="col">Correo</td>
                            <td scope="col">${listaInfo[1]}</td>
                        </tr>
                        <tr>
                            <td scope="col">Nombre</td>
                            <td scope="col">${listaInfo[2]}</td>
                        </tr>
                        <tr>
                            <td scope="col">Edad</td>
                            <td scope="col">${listaInfo[3]}</td>
                        </tr>
                        <tr>
                            <td scope="col">Celular</td>
                            <td scope="col">${listaInfo[4]}</td>
                        </tr>
                        <tr>
                            <td scope="col">Domicilio</td>
                            <td scope="col">${listaInfo[5]}</td>
                        </tr>
                    </thead>
                </table>
            </div>
        `;
    } else {
        inscripts.innerHTML = respaldoInscript.innerHTML;
    }
}