import './Botao.css'

const Botao = (props) =>{
    return (
        <button type='submit' className='botao'>
            {props.children}
        </button>
            
    )
}

export default Botao;