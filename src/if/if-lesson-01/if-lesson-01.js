module.exports = {
  /**
   * Checar maioridade
   * @param {number} idade
   * @returns true se maior que 18 anos, caso contrario false
   */
  checarMaiorIdade: function (idade) {
    if (idade>=18){
      return true;
    }else {
      return false;
    }
  
  }
};
