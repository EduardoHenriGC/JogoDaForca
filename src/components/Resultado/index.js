import { useForca } from "@/context/ForcaContext"
import styles from "@/styles/resultado/resultado.module.css"

export default function Resultado() {
    const { estadoJogo, reiniciarJogo } = useForca();
    return (
        <>
            {
                estadoJogo === 'vitoriaFinal' && (
                    <div>
                        <p className={styles.textVitoria}>Parabéns, você acertou todas as palavras!</p>
                        <button className={styles.btnJogarNovamente} onClick={reiniciarJogo}>Jogar novamente</button>
                    </div>
                )
            }
            {
                estadoJogo === 'derrota' && (
                    <div className={styles.derrotaContent}>
                        <p className={styles.textDerrota}>Você perdeu.. HAHAHAH <span>não foi dessa vez !!</span></p>
                        <button className={styles.btnJogarNovamente} onClick={reiniciarJogo}>Tentar novamente</button>
                    </div>
                )
            }</>
    )

}