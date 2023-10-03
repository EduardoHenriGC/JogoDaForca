import React from 'react';
import Link from 'next/link';
import BonecoForca from '../bonecoForca/index';
import { useForca } from '@/context/ForcaContext';
import styles from "@/styles/index/index.module.css"



const Forca = () => {
  const {  
    
    palavraExibida,
    tentativasRestantes,
    letraDigitada,
    setLetraDigitada,
    verificarLetra,
    mensagemErro,
    mensagemParabenizacao,
    estadoJogo,
    reiniciarJogo,
    temaPalavra,
    pontuacao,
    letrasTentadas
    
   
    
  } = useForca();


  
  return (
    <div className={styles.container}>
      <Link className={styles.btnClose} href="/">X</Link>
      <h1>Jogo da Forca</h1>
      <h3 className={estadoJogo == "derrota" ? styles.doff : ""}>TEMA: {temaPalavra}</h3>
      <h3>pontuacao: {pontuacao}</h3>
      <p className={estadoJogo == "derrota" ? styles.doff : styles.letrasTentadas}>letras tentadas: <span>{letrasTentadas}</span></p>
      <BonecoForca tentativasRestantes={tentativasRestantes} estadoJogo={estadoJogo} />
      {mensagemParabenizacao && <p>{mensagemParabenizacao}</p>}
      {estadoJogo === 'emAndamento' && !mensagemParabenizacao && (
        <div className={styles.content}>
          <p>Palavra: <span className={styles.palavraExibida}>{palavraExibida}</span></p>
          <p>Tentativas restantes: {tentativasRestantes}</p>
          <input
          className={styles.input}
            type="text"
            value={letraDigitada}
            onChange={(e) => setLetraDigitada(e.target.value[0])}
          />
          <button className={styles.btnMain} onClick={verificarLetra}>Tentar letra</button>
          <p style={{ color: 'red' }}>{mensagemErro}</p>
        </div>
      )}
      {estadoJogo === 'vitoriaFinal' && (
  <div>
    <p>Parabéns, você acertou todas as palavras!</p>
    <button className={styles.btnJogarNovamente}   onClick={reiniciarJogo}>Jogar novamente</button>
  </div>
)}

      {estadoJogo === 'derrota' && (
        <div>
          
          <button className={styles.btnJogarNovamente} onClick={reiniciarJogo}>Tentar novamente</button>
        </div>
      )}
    </div>
  );
};

export default Forca;
