import React from 'react';
import styles from "@/styles/boneco/bonecoForca.module.css"
import { PartesCorpo } from '../GetParteDoCorpo/index';
import { useForca } from '@/context/ForcaContext';

const BonecoForca = () => {

  const { estadoJogo, tentativasRestantes, checkMsg } = useForca();
  const partesVisiveis = PartesCorpo.slice(0, tentativasRestantes);

  if (estadoJogo === 'derrota') {
    return;
  }

  return (
    <div className={styles.forca}>
      <div className={checkMsg ? styles.doff : styles.gibbet}>

        {
          partesVisiveis.map((parte, index) => (
            <div className={`${styles.parte} ${styles[parte]}`} key={index}></div>
          ))
        }
      </div>
    </div >
  );
};

export default BonecoForca;