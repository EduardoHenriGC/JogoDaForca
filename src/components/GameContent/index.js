import { useForca } from "@/context/ForcaContext"
import styles from "@/styles/GameContent/GameContent.module.css"

export default function GameContent() {

    const { letraDigitada, mensagemErro, verificarLetra, setLetraDigitada, palavraExibida, tentativasRestantes } = useForca();

    return (
        <div className={styles.content}>
            <p>Palavra: <span className={styles.palavraExibida}>{palavraExibida}</span></p>
            <p>Tentativas restantes: {tentativasRestantes}</p>
            <div className={styles.inputContent}>
                <input
                    className={styles.input}
                    type="text"
                    value={letraDigitada}
                    onChange={(e) => setLetraDigitada(e.target.value[0])}
                />
                <button className={styles.btnMain} onClick={verificarLetra}>Tentar letra</button>
            </div>
            <p style={{ color: 'red' }}>{mensagemErro}</p>
        </div>
    )
}