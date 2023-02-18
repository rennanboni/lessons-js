const lesson = require('./if-lesson-07');

describe('if-lesson-07', () => {
  it('criar messagem de sucesso', () => {
    const usuario = { nome: 'Antonio Gordo da Silva' };
    const result = lesson.criarMessagemDeSucesso(usuario);
    const expected = 'Olá Antonio Gordo da Silva, seu dinheiro foi sacado com sucesso';
    expect(result).toEqual(expected);
  });
  it('criar messagem de erro', () => {
    const usuario = { nome: 'Antonio Gordo da Silva' };
    const result = lesson.criarMessagemDeErro(usuario);
    const expected = 'Olá Antonio Gordo da Silva, ocorreu um erro ao sacar o dinheiro';
    expect(result).toEqual(expected);
  });
});
