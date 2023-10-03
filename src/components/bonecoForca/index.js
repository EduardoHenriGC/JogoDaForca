// BonecoForca.js
import React from 'react';
import styles from "@/styles/boneco/bonecoForca.module.css"

const BonecoForca = ({ tentativasRestantes, estadoJogo  }) => {
  const partesCorpo = [
    'cabeca',
    'corpo',
    'braco esquerdo',
    'braco direito',
    
    'perna esquerda',
    'perna direita',
    
  ];

  const partesVisiveis = partesCorpo.slice(0, tentativasRestantes);

  if (estadoJogo === 'derrota') {
    return <p>Você perdeu.. HAHAHAHAHAH MELHORE</p>;
  }

  return (
    <div className={styles.forca}>
      <div className={styles.gibbet}>
        {partesVisiveis.map((parte, index) => (
          <div className={`${styles.parte} ${styles[parte]}`} key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default BonecoForca;