import styles from './Banner.module.scss'
import logo from './log-perifericos.jpg'

export default function Banner() {
    // JSX 
    return (
        <header className={styles.banner}>
            <div className={styles.banner__imagem}>
                <img src={logo} alt="Logo do banner info perifericos" />
            </div>
            <h1>Info Perifericos</h1>
        </header>
    );
}

