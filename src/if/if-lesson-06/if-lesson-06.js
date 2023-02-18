const INICIO_MESSAGEM = 'Olá ';
const SACAR_SUCESSO_FIM = ', seu dinheiro foi sacado com sucesso';
const SACAR_ERRO_FIM = ', ocorreu um erro ao sacar o dinheiro';

module.exports = {
  /**
   * Cria una menssagem de sucesso
   * Exemplo:
   *   nome = 'Antonio Gordo da Silva'
   *   resultado = 'Olá, Antonio Gordo da Silva seu dinheiro foi sacado com sucesso'
   * @param {string} nome Nome do cliente
   * @returns Retorna messagem de sucesso
   */
  criarMessagemDeSucesso: function(nome) {
    return undefined;
  },
  /**
   * Cria una menssagem de erro
   * Exemplo:
   *   nome = 'Antonio Gordo da Silva'
   *   resultado = 'Olá, Antonio Gordo da Silva ocorreu um erro ao sacar o dinheiro'
   * @param {string} nome Nome do cliente
   * @returns Retorna messagem de erro
   */
  criarMessagemDeErro: function(nome) {
    return undefined;
  },
};
