import './CampoNumero.css';

const CampoNumero = (props) => {
    const pHm = `${props.placeholder}...`;

    const aoDigitar = (evt) =>{
        let num = evt.key
        if(!isNaN(num))
            props.aoAlterado(props.valor + num  )
        if(num === 'Delete')
           props.aoAlterado('')
        if(num === 'Backspace' && props.valor.length > 0)
            props.aoAlterado( props.valor.substring(0,props.valor.length-1))
    }

 return (
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input  type="text" value={props.validaPreco(props.valor)} onKeyDown={aoDigitar} readOnly required={props.obrigatorio} placeholder={pHm}></input>
    </div>
)}

export default CampoNumero; 