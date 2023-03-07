import { Link } from 'react-router-dom';

const ListaProdutos = ({lista, salvarStatus, deletarLista }) => {
    return (
        <li>
            <span>R$ {parseFloat(lista.valorEstimado)/100}</span>
            {lista.nomeLista}
            
            <Link to='/ListaAtual' onClick={() => salvarStatus(lista) }> <button> Selecionar Lista</button></Link>
            <button type='button' onClick={() => deletarLista(lista) }> Deletar Lista </button>

        </li>
    )
}

export default ListaProdutos;