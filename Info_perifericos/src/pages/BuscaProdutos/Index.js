import Formulario from "../../componentes/Formulario/Index";

const BuscarProdutos = ({ recebeProduto, recebeLista, listaProduto, tipos }) => {
   
    return (
        <div className='formularios'>
            <Formulario
                recebeProduto={recebeProduto}
                recebeLista={recebeLista}
                listaProduto={listaProduto}
                tipos={tipos.map(valor => valor.nome)}
            />
        </div>
    )
}

export default BuscarProdutos;