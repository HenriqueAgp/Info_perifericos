import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../componentes/NavBar/Index';
import BuscarProdutos from '../pages/BuscaProdutos/Index';
import Home from '../pages/Home/Index';
import ListaAtual from '../pages/ListaAtual/Index';


const Rotas = ({tipos, aoDeletar, mudarCor, produtos, recebeProduto, recebeLista, listaProduto}) => {
    
    return (
            <BrowserRouter>
                <>
                    <NavBar> </NavBar>
                    <Routes>
                        <Route path='/' element={<Home tipos={tipos} aoDeletar={aoDeletar} mudarCor={mudarCor} produtos={produtos} />} />
                        <Route path='/BuscaProdutos' element={<BuscarProdutos recebeProduto={recebeProduto} recebeLista={recebeLista} listaProduto={listaProduto} tipos={tipos}/>} />
                        <Route path='/ListaAtual' element={<ListaAtual />} />                       
                    </Routes>
                </>               
            </BrowserRouter>
    )
}
export default Rotas;