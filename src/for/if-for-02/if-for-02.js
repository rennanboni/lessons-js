module.exports = {
  /**
   * Emprime um tabuada
   * Exemplo
   *   numero = 5 e multiplicador: 3
   *   resultado: ["5 x 1 = 5", "5 x 2 = 10", "5 x 3 = 15"]
   * @param {number} numero 
   * @param {number} multiplicador 
   * @returns Retorna um array
   */
  tabuada: function (numero, multiplicador) {
    let tabuada = [];
    for (let indice = 1; indice <= multiplicador; indice++) {
      let linha = numero + " x " + indice + " = " + (numero * indice);
      tabuada.push(linha)
    }

    return tabuada;
  }
};
