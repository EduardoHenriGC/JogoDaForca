import { useForca } from "@/context/ForcaContext"
import styles from "@/styles/painel/painel.module.css"

export default function Painel() {

    const { estadoJogo, letrasTentadas, temaPalavra, pontuacao, checkMsg } = useForca();

    return (
        <div className={styles.PainelContent}>
            <h1>Jogo da Forca</h1>
            <div className={styles.pontuacaoContent}>
                <h3>pontuação: <span>{pontuacao}</span></h3>
                <h3 className={estadoJogo == "derrota" ? styles.doff : ""}>TEMA: <span>{temaPalavra}</span></h3>
            </div>
            <p className={estadoJogo == "derrota" || checkMsg ? styles.doff : styles.letrasTentadas}>letras tentadas: <span>{letrasTentadas}</span></p>
        </div>
    )
}