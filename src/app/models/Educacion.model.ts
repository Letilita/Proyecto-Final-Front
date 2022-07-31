import { CategoriaEducacion } from "./CategoriaEducacion.model";

export interface Educacion{
    idEdu:number;
    institucion: String ;
    logoInstitucion: String ;
    titulo: String ;
    descripcion: String ;
    inicio: String ;
    fin: String ; 
    catEdu: CategoriaEducacion;
}