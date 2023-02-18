const PROMOCAO_FIDELIDADE = 'Olá <NOME>, você ja resgatou o seu brinde na nossa central?'

module.exports = {
  /**
   * Retorna messagem de brind caso usuario tenha mais de 5 compras realizadas
   * { "nome": 'Nome Cliente', "idade": 30, "sexo": 'M', "compras": [ { "produto": { "nome": 'Escova'} } ] }
   * 
   * @param {object} usuario Objeto usuario
   * @param {string} usuario.nome Nome do usuario
   * @param {number} usuario.idade Idade do usuario
   * @param {string} usuario.sexo Sexo do usuario sendo 'M' ou 'F' valores
   * @param {array} usuario.compras Array de compras realizadas no passado
   * @param {object} usuario.compras.produto Objeto produto
   * @param {object} usuario.compras.produto.nome Nome do produto
   * @returns Retorna messagem brinde de fidelidade caso satisfeito, caso contrario retorna undefined
   */
  brindeDeFidelidade: function(usuario) {
    return undefined;
  },
};
