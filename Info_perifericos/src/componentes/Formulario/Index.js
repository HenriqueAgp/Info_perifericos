import { useState } from 'react';
import Botao from '../Botao/Index';
import CampoDescricao from '../CampoDescricao/Index';
import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa/Index';
import './Formulario.css';
import { v4 as uuidv4 } from "uuid"
import ListaProdutos from '../ListaProdutos/Index';
import CampoNumero from '../CampoNumero/Index';


const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [imagem, setImagem] = useState('');
    const [tipo, setTipo] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [nomeLista, setNomeLista] = useState('')
    const [valorEstimado, setValorEstimado] = useState('')
    
    function validaPreco (preco) {
        let valorFormatado = preco.replace(/([0-9]*)([0-9]{2})/, "$1.$2" )
        return "R$ " + valorFormatado
    }

    const enviaFormu = (evt) => {
        evt.preventDefault();
        let produto = {
            id: uuidv4(),
            nome,
            fabricante,
            imagem,
            preco,
            descricao,
            tipo
        }
        props.recebeProduto(produto);
        setNome('');
        setFabricante('');
        setImagem('');
        setDescricao('');
        setPreco('');
        setTipo('');
        alert('Produto cadastrado com sucesso!!!')
    }

    const enviaLista = (evt) => {
        
        evt.preventDefault();
        let lista = {
            id: uuidv4(),
            nomeLista,
            valorEstimado,
            valorTotal: 0,
            produtos: [],
        }
        props.recebeLista(lista)
        setNomeLista('');
        setValorEstimado('');
        
    }

    return (
        <section className='formulario'>
            <form onSubmit={enviaFormu}>
                <h2>Preencha os dados para criar um novo Produto:</h2>
                <CampoTexto
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do produto"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio
                    label="Fabricante"
                    placeholder="Entre com o fabricante"
                    valor={fabricante}
                    aoAlterado={valor => setFabricante(valor)}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <CampoNumero
                    label="Preço"
                    placeholder="Entre com o preço do Produto"
                    valor={preco}
                    validaPreco = {validaPreco}
                    aoAlterado={valor => setPreco(valor)}
                    
                />
      
                <CampoDescricao
                    label="Descrição"
                    placeholder="Entre com o descrição do produto:"
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />

                <ListaSuspensa
                    obrigatorio
                    valor={tipo}
                    aoAlterado={tipo => setTipo(tipo)}
                    tipos={props.tipos}
                />

                <Botao>
                    criar card
                </Botao>
            </form>

            <form onSubmit={enviaLista}>
                <h2>Preencha os dados para criar uma nova lista:</h2>
                <CampoTexto
                    obrigatorio
                    label="Nome da Lista"
                    placeholder="Digite o nome da nova lista de produtos"
                    valor={nomeLista}
                    aoAlterado={valor => setNomeLista(valor)}
                />

                <CampoNumero
                    label="Preço Estimado"
                    placeholder="Entre com o preço estimado dos Produtos."
                    valor={valorEstimado}
                    validaPreco= {validaPreco}
                    aoAlterado={valor => setValorEstimado(valor)}
                   
                />

                <Botao>
                    Criar nova Lista
                </Botao>

                <ul className='listaprodutos'>
                    <h2>Listas de produtos:</h2>
                    <li><span>Valor da estimado</span> <b>Nome da Lista</b></li>
                    {props.listaProduto.map(prod => <ListaProdutos key={prod.id} lista={prod} salvarStatus={props.salvarStatus} deletarLista={props.deletarLista} />)} 

                </ul>
            </form>
        </section>
    )
}
export default Formulario;



