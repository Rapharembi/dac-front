import { Artigo } from "./artigo.model";

export interface Volume{
artigos: Artigo[];
cidade:	string;
data:	string;
descIng:	string;
descPt:	string;
edicao:	number;
id:	number;
sigla:	string;
}