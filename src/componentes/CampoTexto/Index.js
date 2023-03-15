import './CampoTexto.css';

const CampoTexto = (props) => {
    const pHm = `${props.placeholder}...`;
    
    const aoDigitar = (evt) =>{
       props.aoAlterado(evt.target.value);
    }
 return (
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={pHm}></input>
    </div>
)}

export default CampoTexto; 