export const productsList:Product []= [

    {id: 1, name: 'Fisica',  Carrera: 'DBA', descripcion: 'Ciencias de Fisica'},
    {id: 2, name: 'Quimica', Carrera: 'DBA', descripcion: 'Ciencias de Quimica'},
    {id: 3, name: 'Ecologia', Carrera: 'DBA', descripcion: 'Ciencias de Ecologia'},
    {id: 4, name: 'Deporte', Carrera: 'LIC', descripcion: 'Ciencias de Deporte'},
    {id: 5, name: 'Biologia', Carrera: 'ING', descripcion: 'Ciencias de Biologia'},
]

export interface Product{
    id: number | string;
    name: string;
    Carrera: string;
    descripcion: string;

}