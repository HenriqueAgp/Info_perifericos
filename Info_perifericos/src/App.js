
import { useEffect, useState } from 'react';
import Banner from './componentes/Banner/Index.js';
import Formulario from './componentes/Formulario/Index.js';
import Rodape from './componentes/Rodape/Index.js';
import Tipos from './componentes/Tipos/Index.js';
import { getProdutos } from './mock/produtos_iniciais.js';
import { v4 as uuidv4 } from 'uuid';
import NavBar from './componentes/NavBar/Index.js';
import Rotas from './Rotas/Index.js';

function App() {
  const [produtos, setProdutos] = useState([])
  const [lista, setLista] = useState([])
  console.log(lista)
  useEffect(()=>{ 
    getProdutos().then( (data)=> setProdutos(data)) },[])
  
  const salvarProdutos = (produto) => {
    setProdutos([...produtos, produto]) // Foi criado um novo array e inserido o array antigo e depois o novo elemento do array que no caso seria o objeto colaborador.
  }
  
  const salavarLista = (novaLista) => {
    setLista([...lista, novaLista ])
  }
 
  const [tipos, setTipos] = useState ([
    {
      id: uuidv4(),
      nome:'Gabinetes',
      cor:'#57C278' 
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
      nome:'teclados',
      cor: '#E06B69' 
    },

    {
      id: uuidv4(),
      nome:'caixa de som',
      cor: '#E06B69' 
    },

    {
      id: uuidv4(),
      nome:'pen drive',
      cor: '#E06B69' 
    }
  ])

  function deletarProduto (id) {
   setProdutos( prod => prod.filter(produto => produto.id !== id ) )
  }

  function mudarCorTipo (cor, id) {
    setTipos(tipos.map( tipo =>{
      if(tipo.id === id){
        tipo.cor = cor;
      }
      return tipo;
    }))
  }

  return (
    <div className="App">
      <Rotas />
     
      <div className='formularios'>
        <Formulario 
          recebeProduto = { produto => salvarProdutos(produto)}
          recebeLista = {lista => salavarLista(lista) }
          listaProdutos = {lista}
          tipos = {tipos.map(valor => valor.nome)}
        />
       
      </div>
    

      {tipos.map (tipos => <Tipos 
        key = {tipos.id}
        id= {tipos.id}
        nome = {tipos.nome} 
        cor = {tipos.cor}
        aoDeletar = {deletarProduto} 
        mudarCor = {mudarCorTipo}
        produtos = {produtos.filter(produto => produto.tipo === tipos.nome)}
      />)}
    
      <Rodape />
    </div>
      
  );
}

export default App;
