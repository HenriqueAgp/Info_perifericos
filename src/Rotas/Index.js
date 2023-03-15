import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../componentes/NavBar/Index';
import BuscarProdutos from '../pages/BuscaProdutos/Index';
import Home from '../pages/Home/Index';
import ListaAtual from '../pages/ListaAtual/Index';


const Rotas = ({tipos, aoDeletar, mudarCor, produtos, recebeProduto, recebeLista, listaProduto, salvarProdutoNaLista, salvarStatus, listaLogada, deletarLista}) => {
    
    return (
            <BrowserRouter>
                <>
                    <NavBar listaLogada={listaLogada}> </NavBar>
                    <Routes>
                        <Route path='/' element={<Home tipos={tipos} 
                            aoDeletar={aoDeletar} 
                            mudarCor={mudarCor} 
                            produtos={produtos} 
                            salvarProdutoNaLista={salvarProdutoNaLista}
                            />} 
                        />
                        <Route path='/BuscaProdutos' element={<BuscarProdutos 
                            deletarLista={deletarLista}
                            recebeProduto={recebeProduto}
                            recebeLista={recebeLista}
                            listaProduto={listaProduto}
                            tipos={tipos}
                            salvarStatus={salvarStatus}
                            />} 
                         />
                        <Route path='/ListaAtual' element={<ListaAtual 
                            aoDeletar={aoDeletar} 
                            recebeLista={recebeLista} 
                            listaLogada ={listaLogada} 
                            />} 
                        />                       
                    </Routes>
                </>               
            </BrowserRouter>
    )
}
export default Rotas;