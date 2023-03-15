import styles from './Rodape.module.scss';

const Rodape = () => {
    return (
        <section className={styles.rodape}>
            <div className={styles.rodape__logos}>
                <img  src='/img/tw.png'  alt='simbolos e logo'></img>
                <img  src='/img/fb.png'  alt='Nome Organo'></img>
                <img  src='/img/ig.png'  alt='desenvolvido'></img>
            </div>
            <img  src='/img/logo.png' alt='Nome Organo'></img>
            <p>Desenvolvido por Henrique AGP em parceria com Alura. </p>
        </section>
    )
}

export default Rodape;