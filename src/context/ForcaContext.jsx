import React, { createContext, useContext, useState, useEffect } from 'react';
import palavrasComTema from '@/components/Forca/forcaObj';

const ForcaContext = createContext();

export const ForcaProvider = ({ children }) => {
  const maxTentativas = 5;
  const [pontuacao, setPontuacao] = useState(0); 
  const [palavraEscolhida, setPalavraEscolhida] = useState('');
  const [palavraExibida, setPalavraExibida] = useState('');
  const [temaPalavra, setTemaPalavra] = useState('');
  const [indicePalavraAtual, setIndicePalavraAtual] = useState(0);
  const [letraDigitada, setLetraDigitada] = useState('');
  const [letrasTentadas, setLetrasTentadas] = useState([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(maxTentativas);
  const [estadoJogo, setEstadoJogo] = useState('emAndamento');
  const [jogoReiniciado, setJogoReiniciado] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemParabenizacao, setMensagemParabenizacao] = useState('');
 
  

  

  const trocarPalavra = () => {
    const palavraAleatoriaObj = palavrasComTema[Math.floor(Math.random() * palavrasComTema.length)]; // Escolha aleatoriamente uma palavra
    setPalavraEscolhida(palavraAleatoriaObj.palavra);
    setPalavraExibida('_'.repeat(palavraAleatoriaObj.palavra.length));
    setTemaPalavra(palavraAleatoriaObj.tema);
    setTentativasRestantes(maxTentativas);
    setLetraDigitada('');
    setEstadoJogo('emAndamento');
    setLetrasTentadas([]);
    setMensagemErro('');
    setMensagemParabenizacao('');
  };

  useEffect(() => {
    if (indicePalavraAtual < 15) { // Defina o número desejado de palavras 
      trocarPalavra();
    } else {
      setEstadoJogo('vitoriaFinal');
    }
  }, [indicePalavraAtual]);


  useEffect(() => {
    if (jogoReiniciado) {
      setJogoReiniciado(false);
      trocarPalavra();
    } else if (indicePalavraAtual < 15) { // Defina o número desejado de palavras 
      trocarPalavra();
    } else {
      setEstadoJogo('vitoriaFinal');
    }
  }, [indicePalavraAtual, jogoReiniciado]);

  const verificarLetra = () => {
    if (estadoJogo !== 'emAndamento' || tentativasRestantes === 0) {
      return;
    }
  
    const letra = letraDigitada.toLowerCase();
  
    if (!/^[a-z ]$/.test(letra)) { // Adicione um espaço ao regex
      setMensagemErro('Por favor, insira apenas letras ou espaços.');
      return;
    }
  
    if (letrasTentadas.includes(letra)) {
      setMensagemErro('Você já tentou essa letra antes.');
      return;
    }
  
    setMensagemErro('');
  
    if (palavraEscolhida.includes(letra)) {
      const novaPalavraExibida = palavraEscolhida
        .split('')
        .map((letraPalavra, index) =>
          letraPalavra === letra ? palavraEscolhida[index] : palavraExibida[index]
        )
        .join('');
      setPalavraExibida(novaPalavraExibida);
  
      if (!novaPalavraExibida.includes('_')) {
        setEstadoJogo('vitoria');
        setMensagemParabenizacao(`Parabéns, você acertou! A palavra era: ${palavraEscolhida}`);
        setPontuacao(pontuacao + 100); // Adicione 100 pontos à pontuação
        setTimeout(() => {
          setIndicePalavraAtual(indicePalavraAtual + 1);
        }, 3000);
      }
    } else {
      setTentativasRestantes(tentativasRestantes - 1);
  
      if (tentativasRestantes === 1) {
        setEstadoJogo('derrota');
      }
    }
  
    setLetrasTentadas([...letrasTentadas, letra]);
    setLetraDigitada('');
  };
  

  const reiniciarJogo = () => {
    setIndicePalavraAtual(0);
    setPontuacao(0); // Reinicie a pontuação
    setJogoReiniciado(true);
  };

  const contextValue = {
    palavraEscolhida,
    palavraExibida,
    tentativasRestantes,
    letraDigitada,
    letrasTentadas,
    setLetraDigitada,
    verificarLetra,
    mensagemErro,
    mensagemParabenizacao,
    estadoJogo,
    reiniciarJogo,
    temaPalavra,
    pontuacao 
  };

  return (
    <ForcaContext.Provider value={contextValue}>
      {children}
    </ForcaContext.Provider>
  );
};

export const useForca = () => {
  return useContext(ForcaContext);
};
