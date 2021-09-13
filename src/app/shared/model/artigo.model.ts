import { Autor } from "./autor.model";

export class Artigo{
    autores: Autor[];
    id:	number;
    idioma:	string;
    ordemVolume:	number;
    pchaveIng:	string;
    pchavePt:	string;
    quantidadePaginas:	number;
    resumoIng:	string;
    resumoPt:	string;
    tituloIng:	string;
    tituloOriginal:	string;
}