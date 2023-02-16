import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
   
    return (
        <div className='lista-suspensa'>
            <label>Entre com o tipo de Produto:</label>
            
            <select value={props.valor} required={props.obrigatorio} onChange = {evento => props.aoAlterado(evento.target.value)}>
                <option> </option>
                {props.tipos.map (item => {
                return <option key={item}> {item}</option>
                 })}
            </select>
        </div>
    )
}

export default ListaSuspensa;