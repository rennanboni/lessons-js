const lesson = require('./if-lesson-08');

const USUARIO_01 = {
  nome: 'Antonio Gordo da Silva',
  idade: 31,
  sexo: 'M'
};

const USUARIO_02 = {
  nome: 'Antonia da Vila Gorda',
  idade: 38,
  sexo: 'F'
};

describe('if-lesson-08', () => {
  it('criar messagem de boas vindas - Masculino', () => {
    const result = lesson.criarMessagemDeBemVindas(USUARIO_01);
    const expected = 'Seja bem vindo Antonio Gordo da Silva';
    expect(result).toEqual(expected);
  });

  it('criar messagem de boas vindas - Feminino', () => {
    const result = lesson.criarMessagemDeBemVindas(USUARIO_02);
    const expected = 'Seja bem vinda Antonia da Vila Gorda';
    expect(result).toEqual(expected);
  });
});
