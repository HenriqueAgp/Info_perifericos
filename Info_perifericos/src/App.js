
import { useEffect, useState } from 'react';
import Rodape from './componentes/Rodape/Index.js';
import { getProdutos } from './mock/produtos_iniciais.js';
import { v4 as uuidv4 } from 'uuid';
import Rotas from './Rotas/Index.js';



function App() {
  const [produtos, setProdutos] = useState([])
  const[listaLogada, setListaLogada] = useState({})
  const [listas, setListas] = useState([])
  const [tipos, setTipos] = useState([
    {
      id: uuidv4(),
      nome: 'Gabinetes',
      cor: '#57C278'
    },

    {
      id: uuidv4(),
      nome: 'Headset',
      cor: '#82CFFA'
    },

    {
      id: uuidv4(),
      nome: 'Mouse',
      cor: '#A6D157'
    },

    {
      id: uuidv4(),
      nome: 'teclados',
      cor: '#E06B69'
    },

    {
      id: uuidv4(),
      nome: 'caixa de som',
      cor: '#E06B69'
    },

    {
      id: uuidv4(),
      nome: 'pen drive',
      cor: '#E06B69'
    }
  ])

  useEffect(() => {
    getProdutos().then((data) => setProdutos(data))
  }, [])

  const salvarProdutos = (produto) => {
    setProdutos([...produtos, produto]) // Foi criado um novo array e inserido o array antigo e depois o novo elemento do array que no caso seria o objeto colaborador.
  }

  const salvarLista = (novaLista) => {
    const listaFinal = [...listas, novaLista]
    setListas(listaFinal)
   
  }

  function deletarProduto(id, validador) {
    if (!validador){
    setProdutos(prod => prod.filter(produto => produto.id !== id))
    }else{
      let listaTemporaria = listaLogada
      let x = listaLogada.produtos.findIndex(valor => valor.id === id)
      listaTemporaria.produtos.splice(x,1)
      setListaLogada(listaTemporaria)
      atualizarLista(listaTemporaria)
    }
   

  }

  function salvarProdutoNaLista (props){
    debugger
    let produto = { 
        id : props.id,
        nome: props.nome,
        fabricante: props.fabricante,
        preco: props.preco,
        imagem: props.imagem,
        descricao: props.descricao
    }
    let listaTemporaria = listaLogada;
    if(listaLogada !== ""){
        listaTemporaria.produtos.push(produto)
    }else{ alert('Por favor crie e selecione uma Lista.')}
    atualizarLista(listaTemporaria)
    setListaLogada(listaTemporaria)
    alert('Produto salvo na lista com sucesso!!!')
  }

  const atualizarLista = (novaLista) => {
    const listasAtualizadas = listas.map( lista => {
        if(lista.id === novaLista.id)
            lista.produtos = novaLista.produtos
        return lista      
    })
    setListas(listasAtualizadas)
  }

  function mudarCorTipo(cor, id) {
    setTipos(tipos.map(tipo => {
      if (tipo.id === id) {
        tipo.cor = cor;
      }
      return tipo;
    }))
  }

  function salvarStatusLista (element) {
    
    setListaLogada(element)
  }

  function deletarLista (element) {
    let listasTemporarias = listas;
    let y = listasTemporarias.findIndex(valor => valor.id === element.id)
    listasTemporarias.splice(y,1)
    setListas([...listasTemporarias])
    if(listaLogada.id === element.id)
      setListaLogada('')
  }

  return (
    <div className="App">
      <Rotas
        listaLogada ={listaLogada}
        tipos={tipos}
        aoDeletar={deletarProduto}
        mudarCor={mudarCorTipo}
        produtos={produtos}
        recebeProduto={produto => salvarProdutos(produto)}
        recebeLista={lista => salvarLista(lista)}
        listaProduto={listas}
        salvarProdutoNaLista = {produto => salvarProdutoNaLista(produto)}
        salvarStatus = {elem => salvarStatusLista(elem) }
        deletarLista = {elem => deletarLista(elem)}
      />
      <Rodape />
    </div>

  );
}

export default App;
