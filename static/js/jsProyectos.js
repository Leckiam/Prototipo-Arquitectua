function infoProyecto(listaInfo,index) {
    let itemProjectContenido = `
    <tr style="background: #d1d1d1; text-align: center;" class="item${index}">
        <td style="width: 60px;">P-${index}</td>
        <td>${listaInfo[0]}</td>
        <td>${listaInfo[1]}</td>
        <td>${listaInfo[2]}</td>
        <td>${listaInfo[3]}</td>
        <td><button type="button" class="btnAprob rounded"><a onclick="aprobarProyecto(${index},'${listaInfo[1]}')">Aprobar</a></button></td>
        <td><button type="button" class="btnRecha rounded"><a onclick="rechazarProyecto(${index},'${listaInfo[1]}')">Rechazar</a></button></td>
    </tr>
    `;
    return itemProjectContenido;
}
function addDatoTabla(){
    let table = document.getElementById('proyectos');
    let dato1 = ['15-10-2023','Limpieza y Embellecimiento del Vecindario','Los Maitenes 1890, Loncura, Quintero','15-11-2023'];
    let dato2 = ['14-10-2023','Eventos Comunitarios','Módulo Seguridad Pública, Quintero','20-11-2023'];
    let dato3 = ['13-10-2023','Programas de Reciclaje','Los Maitenes 1890, Loncura, Quintero','27-11-2023'];
    let dato4 = ['12-10-2023','Ayuda a Personas Mayores','Vicuña Mackenna 670, 2491253 Valparaiso, Quintero','05-12-2023'];
    let dato5 = ['11-10-2023','Apoyo a Emprendedores Locales','C. Ramon Barros Luco 696, 2491154 Valparaiso, Quintero','14-12-2023'];
    let dato6 = ['10-10-2023','Proyectos de Jardinería Comunitaria','Escuela Valle de Narau - Ignacio Carrera Pinto, Quintero','10-01-2024'];
    let listaProyecto=[dato1,dato2,dato3,dato4,dato5,dato6];
    for (let i = 0; i < listaProyecto.length; i++) {
        table.innerHTML = table.innerHTML + infoProyecto(listaProyecto[i],i);
    }
    console.log('xd')
}
function aprobarProyecto(id,nombre){
    let table = document.getElementById('proyectos');
    let item = table.getElementsByClassName('item'+id)
    alert('El proyecto P-'+id+' '+nombre+' ha sido aprobado')
    item.remove();
}
function rechazarProyecto(id,nombre){
    let table = document.getElementById('proyectos');
    let item = table.getElementsByClassName('item'+id)
    alert('El proyecto P-'+id+' '+nombre+' ha sido rechazado')
    item.remove();
}