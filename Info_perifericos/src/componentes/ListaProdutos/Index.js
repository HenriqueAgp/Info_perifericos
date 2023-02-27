import './ListaProdutos.css'

const ListaProdutos = ({lista, salvarStatus, deletarLista }) => {
   
    return (
        <li>
            <span>R$ {lista.valorEstimado}</span>
            {lista.nomeLista}
            <a href='/ListaAtual' onClick={() => salvarStatus(lista) }> ALterar Lista</a>
            <button type='button' onClick={() => deletarLista(lista) }> Deletar Lista </button>

        </li>
    )
}

export default ListaProdutos;