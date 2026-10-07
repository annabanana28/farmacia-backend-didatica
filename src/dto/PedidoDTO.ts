export type PedidoDTO = {
    idCliente: number;
    itens: {
        idProduto: number;
        qtdProduto: number;
        precoUnit: number;
    }[];
};