import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../componentes/NavBar/Index';
import BuscarProdutos from '../pages/BuscaProdutos/Index';
import Home from '../pages/Home/Index';
import ListaAtual from '../pages/ListaAtual/Index';


const Rotas = () => {
    return (

            <BrowserRouter>
                <>
                    <NavBar> </NavBar>
                    <Routes>
                        <Route path='/' element={<Home />} exact/>
                        <Route path='/BuscaProdutos' element={<BuscarProdutos />} />
                        <Route path='/ListaAtual' element={<ListaAtual />} />
                    </Routes>
                </>
                
            </BrowserRouter>
    )
}
export default Rotas;