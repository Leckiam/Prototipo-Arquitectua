let listaUsuarios = [
    ['21.347.632-K', 'mai.salto@gmail.com', 'Maikel Salto', 19, 932547238, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['20.345.670-K', 'ale.puente@gmail.com', 'Alejandro Puente', 23, 912341234, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['20.345.678-K', 'alf.asfalto@gmail.com', 'Alfredo Asfalto', 24, 912344321, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['21.345.696-K', 'mar.tirado@gmail.com', 'Marcelo Tirado', 20, 912438765, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['21.345.678-K', 'mat.polako@gmail.com', 'Matías Polako', 29, 912345678, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
    ['21.345.678-K', 'cri.sandia@gmail.com', 'Cristopher Sandia', 29, 912345678, 'Condominio Costa del Mar - Manuel Francke, Quintero'],
];
let listaProyectos = [
    ['15-10-2023', 'Limpieza y Embellecimiento del Vecindario', 'Los Maitenes 1890, Loncura, Quintero', '15-11-2023', '200K',0],
    ['14-10-2023', 'Eventos Comunitarios', 'Módulo Seguridad Pública, Quintero', '20-11-2023', '200K',1],
    ['13-10-2023', 'Programas de Reciclaje', 'Los Maitenes 1890, Loncura, Quintero', '27-11-2023', '200K',2],
    ['12-10-2023', 'Ayuda a Personas Mayores', 'Vicuña Mackenna 670, 2491253 Valparaiso, Quintero', '05-12-2023', '200K',3],
    ['11-10-2023', 'Apoyo a Emprendedores Locales', 'C. Ramon Barros Luco 696, 2491154 Valparaiso, Quintero', '14-12-2023', '200K',4],
    ['10-10-2023', 'Proyectos de Jardinería Comunitaria', 'Escuela Valle de Narau - Ignacio Carrera Pinto, Quintero','10-01-2024', '200K',5],
];
function infoProyecto(listaInfo,index) {
    let itemProjectContenido = `
    <tr style="background: #d1d1d1; text-align: center;" class="item${index}">
        <td style="width: 60px;">P-${index}</td>
        <td>${listaInfo[0]}</td>
        <td>${listaInfo[1]}</td>
        <td><button type="button" class="btnVerProject rounded" onclick="verDetalleSolicit(true,'${index}')">Ver Detalle</button></td>
        <td>${listaInfo[2]}</td>
        <td>${listaInfo[3]}</td>
        <td>${listaInfo[4]}</td>
        <td><button type="button" class="btnAprob rounded"><a onclick="aprobarProyecto(${index},'${listaInfo[1]}')">Aprobar</a></button></td>
        <td><button type="button" class="btnRecha rounded"><a onclick="rechazarProyecto(${index},'${listaInfo[1]}')">Rechazar</a></button></td>
    </tr>
    `;
    return itemProjectContenido;
}
function addDatoTabla(){
    let table = document.getElementById('proyectos');
    let listaProyectoTMP=listaProyectos;
    for (let i = 0; i < listaProyectoTMP.length; i++) {
        table.innerHTML = table.innerHTML + infoProyecto(listaProyectoTMP[i],i);
    }
    console.log('xd')
}
function aprobarProyecto(id,nombre){
    let table = document.getElementById('proyectos');
    let item = table.getElementsByClassName('item'+id)
    alert('El proyecto P-'+id+' '+nombre+' ha sido aprobado')
    item[0].remove();
}
function rechazarProyecto(id,nombre){
    let table = document.getElementById('proyectos');
    let item = table.getElementsByClassName('item'+id)
    alert('El proyecto P-'+id+' '+nombre+' ha sido rechazado')
    item[0].remove();
}

function verDetalleSolicit(boolean, index){
    let listaInfo = listaUsuarios[index]
    console.log(listaInfo)
    let inscripts = document.getElementsByClassName('container')[0];
    if (boolean==true) {
        respaldoInscript = inscripts.cloneNode(true);
        inscripts.innerHTML= `
            <button class="rounded" style="background-color: black; color: #ffffff; padding: 5px" onclick="verDetalleSolicit(false,0)">Volver</button>
            <div class="row mb-3 respond">
                <table class="table table-bordered" id="solicitudes">
                    <thead class="table-dark" style="text-align: center;">
                        <tr>
                            <td scope="col">RUT</td>
                            <td scope="col" style="background: #fff;color: #000000;">${listaInfo[0]}</td>
                        </tr>
                        <tr>
                            <td scope="col">Correo</td>
                            <td scope="col" style="background: #fff;color: #000000;">${listaInfo[1]}</td>
                        </tr>
                        <tr>
                            <td scope="col">Nombre</td>
                            <td scope="col" style="background: #fff;color: #000000;">${listaInfo[2]}</td>
                        </tr>
                        <tr>
                            <td scope="col">Edad</td>
                            <td scope="col" style="background: #fff;color: #000000;">${listaInfo[3]}</td>
                        </tr>
                        <tr>
                            <td scope="col">Celular</td>
                            <td scope="col" style="background: #fff;color: #000000;">${listaInfo[4]}</td>
                        </tr>
                        <tr>
                            <td scope="col">Domicilio</td>
                            <td scope="col" style="background: #fff;color: #000000;">${listaInfo[5]}</td>
                        </tr>
                    </thead>
                </table>
            </div>
        `;
    } else {
        inscripts.innerHTML = respaldoInscript.innerHTML;
    }
}