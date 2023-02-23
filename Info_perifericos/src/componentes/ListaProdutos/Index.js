import './ListaProdutos.css'

const ListaProdutos = ({ id, lista }) => {
    function salvarStatus (lista) { 
        window.sessionStorage.setItem('lista',JSON.stringify(lista))  
    }

    return (
        <li>
            <span>R$ {lista.valorEstimado}</span>
            {lista.nomeLista}
            <a href='/ListaAtual' onClick={() => salvarStatus(lista) }> ALterar Lista</a>
            <button type='button' onClick={() => salvarStatus(lista) }>Deletar Lista </button>

        </li>
    )
}

export default ListaProdutos;