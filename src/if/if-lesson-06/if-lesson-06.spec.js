const lesson = require('./if-lesson-06');

describe('if-lesson-06', () => {
  it('criar messagem de sucesso', () => {
    const result = lesson.criarMessagemDeSucesso('Antonio Gordo da Silva');
    const expected = 'Olá Antonio Gordo da Silva, seu dinheiro foi sacado com sucesso';
    expect(result).toEqual(expected);
  });

  it('criar messagem de erro', () => {
    const result = lesson.criarMessagemDeErro('Antonio Gordo da Silva');
    const expected = 'Olá Antonio Gordo da Silva, ocorreu um erro ao sacar o dinheiro';
    expect(result).toEqual(expected);
  });
});
