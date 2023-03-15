import './CampoDescricao.css'

const CampoDescricao = (props) => {
    const pHm = `${props.placeholder}...`;
    const aoDigitar = (evt) =>{
       props.aoAlterado(evt.target.value);
    }

 return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <textarea value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={pHm}></textarea>
    </div>
)}

export default CampoDescricao; 