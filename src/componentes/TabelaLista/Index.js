import './TabelaLista.css'

const TabelaLista = ({ nome, valorEstimado, produtos}) => {

    function calculaValorTotal(produtos) {
        
        if (produtos.length === 0) {
            return 0;
        } else {
            let initValor = 0;
            let valor = produtos.reduce( (accumulator, currentValue) => accumulator + parseFloat(currentValue.preco), initValor)
            return valor/100
        }
    }
    return (
        <table className="tabelalista">
            <thead>
                <tr>
                    <td>Nome da Lista </td>
                    <td>Valor Estimado  </td>
                    <td>Valor Atual </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{nome}</td>
                    <td>R$ {parseFloat(valorEstimado)/100}</td>
                    <td>R$ {calculaValorTotal(produtos)}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TabelaLista;