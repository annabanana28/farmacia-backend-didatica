export type ProdutoDTO = {
    descricao: string;
    preco: number;
    qtdEstoque: number;
    qtdMinEstoque: number;
    validade?: Date | null;
};