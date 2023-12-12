export function getUsuarios() {
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
    let listaUsuarios = [
        new Usuario('11.347.632-K', 'lau.puentes@gmail.com', 'Lautaro Puentes', 16, 932547238, 'Condominio Costa del Mar - Manuel Francke, Quintero'),
        new Usuario('12.345.670-K', 'ric.parker@gmail.com', 'Rick Parker', 19, 912341234, 'Condominio Costa del Mar - Manuel Francke, Quintero'),
        new Usuario('13.123.456-2', 'mar.miller@gmail.com', 'Mario Miller', 29, 912345678, 'Condominio Costa del Mar - Manuel Francke, Quintero'),
        new Usuario('13.345.678-K', 'suz.labor@gmail.com', 'Suzana Labor', 25, 912344321, 'Condominio Costa del Mar - Manuel Francke, Quintero'),
        new Usuario('14.345.696-K', 'gal.guzman@gmail.com', 'Galit Guzman', 32, 912438765, 'Condominio Costa del Mar - Manuel Francke, Quintero'),
        new Usuario('15.345.678-K', 'aug.veniam@gmail.com', 'Augusto Veniam', 29, 912345678, 'Condominio Costa del Mar - Manuel Francke, Quintero'),
    ];
    return listaUsuarios;
}
export function getRoles() {
    let listaRoles = [
        'Miembro No Asociado',
        'Miembro Asociado',
        'Municipal',
        'Tesorero',
        'Secretario',
        'Presidente',
    ];
    listaRoles.push('Guest')
    return listaRoles;
}