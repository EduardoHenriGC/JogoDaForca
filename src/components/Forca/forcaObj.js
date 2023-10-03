function removerAcentos(palavra) {
    return palavra
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  const palavrasComTema = [
    { palavra: "computador", tema: "Tecnologia" },
    { palavra: "bicicleta", tema: "Transporte" },
    { palavra: "elefante", tema: "Animais" },
    { palavra: "verão", tema: "Estações do ano" },
    { palavra: "escola", tema: "Educação" },
    { palavra: "música", tema: "Arte" },
    { palavra: "pizza", tema: "Comida" },
    { palavra: "futebol", tema: "Esportes" },
    { palavra: "lua", tema: "Astronomia" },
    { palavra: "viagem", tema: "Lazer" },
    { palavra: "girafa", tema: "Animais" },
    { palavra: "outono", tema: "Estações do ano" },
    { palavra: "química", tema: "Ciência" },
    { palavra: "carro", tema: "Transporte" },
    { palavra: "história", tema: "Educação" },
    { palavra: "pintura", tema: "Arte" },
    { palavra: "hamburguer", tema: "Comida" },
    { palavra: "nadar", tema: "Esportes" },
    { palavra: "estrela", tema: "Astronomia" },
    { palavra: "praia", tema: "Lazer" },
    { palavra: "dinossauro", tema: "Animais" },
    { palavra: "inverno", tema: "Estações do ano" },
    { palavra: "matemática", tema: "Educação" },
    { palavra: "escultura", tema: "Arte" },
    { palavra: "sushi", tema: "Comida" },
    { palavra: "natação", tema: "Esportes" },
    { palavra: "galáxia", tema: "Astronomia" },
    { palavra: "montanha", tema: "Lazer" },
    { palavra: "leão", tema: "Animais" },
    { palavra: "primavera", tema: "Estações do ano" },
    { palavra: "literatura", tema: "Educação" },
    { palavra: "teatro", tema: "Arte" },
    { palavra: "sanduíche", tema: "Comida" },
    { palavra: "corrida", tema: "Esportes" },
    { palavra: "planeta", tema: "Astronomia" },
    { palavra: "cachoeira", tema: "Lazer" },
    { palavra: "tigre", tema: "Animais" },
    { palavra: "verde", tema: "Cores" },
    { palavra: "geografia", tema: "Educação" },
    { palavra: "dança", tema: "Arte" },
    { palavra: "massa", tema: "Comida" },
    { palavra: "ciclismo", tema: "Esportes" },
    { palavra: "cometa", tema: "Astronomia" },
    { palavra: "parque", tema: "Lazer" },
    { palavra: "eletricidade", tema: "Ciência" },
    { palavra: "brincar", tema: "Atividades" },
    { palavra: "floresta", tema: "Natureza" },
    { palavra: "montanhismo", tema: "Esportes" },
    { palavra: "asteroide", tema: "Astronomia" },
    { palavra: "cinema", tema: "Entretenimento" },
    { palavra: "helicóptero", tema: "Transporte" },
    { palavra: "formiga", tema: "Animais" },
    
    { palavra: "macarrão", tema: "Comida" },
    { palavra: "futebol americano", tema: "Esportes" },
    { palavra: "lua cheia", tema: "Astronomia" },
    { palavra: "zoológico", tema: "Lazer" },
    { palavra: "baleia", tema: "Animais" },
    { palavra: "escrita", tema: "Habilidades" },
    { palavra: "fotografia", tema: "Arte" },
    { palavra: "chocolate", tema: "Comida" },
    { palavra: "basquete", tema: "Esportes" },
    { palavra: "sol", tema: "Astronomia" },
    { palavra: "praia", tema: "Lazer" },
    { palavra: "cavalo", tema: "Animais" },
    { palavra: "ciência", tema: "Educação" },
    { palavra: "teatro", tema: "Arte" },
    { palavra: "frutas", tema: "Comida" },
    { palavra: "natação", tema: "Esportes" },
    { palavra: "nebulosa", tema: "Astronomia" },
    
    { palavra: "gato", tema: "Animais" },
    { palavra: "matemática", tema: "Educação" },
    { palavra: "pintura", tema: "Arte" },
    { palavra: "pizza", tema: "Comida" },
    { palavra: "tênis", tema: "Esportes" },
    { palavra: "estrela cadente", tema: "Astronomia" },
    { palavra: "praça", tema: "Lazer" },
    { palavra: "panda", tema: "Animais" },
    { palavra: "geografia", tema: "Educação" },
    { palavra: "música", tema: "Arte" },
    { palavra: "sorvete", tema: "Comida" },
    { palavra: "surf", tema: "Esportes" },
    { palavra: "buraco negro", tema: "Astronomia" },
    { palavra: "parque nacional", tema: "Lazer" },
    { palavra: "abelha", tema: "Animais" },
    { palavra: "escultura", tema: "Arte" },
    { palavra: "hambúrguer", tema: "Comida" },
    { palavra: "ginástica", tema: "Esportes" },
    
    { palavra: "praça", tema: "Lazer" },
    { palavra: "golfinho", tema: "Animais" },
    { palavra: "história antiga", tema: "Educação" },
    { palavra: "dança", tema: "Arte" },
    { palavra: "sopa", tema: "Comida" },
    { palavra: "atletismo", tema: "Esportes" },
    { palavra: "cometa Halley", tema: "Astronomia" },
    { palavra: "jardim", tema: "Lazer" },
  ].map(item => ({
    palavra: removerAcentos(item.palavra.toLowerCase()), // Converta para minúsculas e remova acentos
    tema: item.tema
  }));
  
  export default palavrasComTema;
  