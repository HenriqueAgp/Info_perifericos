import Formulario from "../../componentes/Formulario/Index";

const BuscarProdutos = ({ recebeProduto, recebeLista, listaProduto, tipos, salvarStatus, deletarLista}) => {
   
    return (
        <div className='formularios'>
            <Formulario
                recebeProduto={recebeProduto}
                recebeLista={recebeLista}
                listaProduto={listaProduto}
                tipos={tipos.map(valor => valor.nome)}
                salvarStatus ={salvarStatus}
                deletarLista = {deletarLista}
            />
        </div>
    )
}

export default BuscarProdutos;