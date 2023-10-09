import React from 'react';
import Link from 'next/link';
import BonecoForca from '../bonecoForca/index';
import { useForca } from '@/context/ForcaContext';
import styles from "@/styles/index/index.module.css"
import Resultado from '../Resultado';
import Painel from '../painel';
import GameContent from '../GameContent';

const Forca = () => {
  const {
    mensagemParabenizacao,
    estadoJogo,
    reiniciarJogo,
  } = useForca();

  return (
    <div className={styles.container}>
      <Link className={styles.btnClose} href="/" onClick={() => reiniciarJogo()}>X</Link>
      <Painel />
      <BonecoForca />
      {mensagemParabenizacao && <p className={styles.mensagemParabenizacao}>Parabéns, você acertou!!<br />{mensagemParabenizacao}</p>}
      {estadoJogo === 'emAndamento' && !mensagemParabenizacao && (
        <GameContent />
      )}
      <Resultado />
    </div>
  );
};

export default Forca;
