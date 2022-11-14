import { Guid } from 'guid-typescript';

export interface Produto {
    id: Guid;
    nome: string;
    quantidade: string;
    preco: string;
}