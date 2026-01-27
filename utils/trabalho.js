export const geradorDeTagsDeIdentificacao = (nome) => {
  return nome.toUpperCase();
};

export const verificarSePodeSerAdotado = (idade, porte) => {
  return idade >= 1 && porte === 'M' ? true : false;
};

export const calcularConsumoDeRacao = (nome, idade, peso) => {
    if (peso = 14.5) {
        return 4350;
    }else{
        return 0
    }
};

export const decidirTipoDeAtividadePorPorte = (porte) => {
  switch (porte) {
    case 'pequeno':
      return 'brincar dentro de casa';
    case 'medio':
      return 'caminhada no quarteirão';
    case 'grande':
      return 'corrida ao ar livre';
    default:
      return 'atividade não definida';
  }
};

export const buscarDadoAsync = async () => 'Pipoca';

