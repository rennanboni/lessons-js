const lesson = require('./if-lesson-09');

const USUARIO_01 = { 
  nome: 'Antonio Gordo da Silva',
  idade: 31,
  sexo: 'M',
  compras: [
    { produto: { nome: 'Produto 01' } },
    { produto: { nome: 'Produto 02' } },
    { produto: { nome: 'Produto 03' } },
    { produto: { nome: 'Produto 04' } },
    { produto: { nome: 'Produto 05' } },
    { produto: { nome: 'Produto 06' } },
  ]
};

const USUARIO_02 = { 
  nome: 'Antonia da Vila Gorda',
  idade: 31,
  sexo: 'M',
  compras: [
    { produto: { nome: 'Produto 01' } },
  ]
};

describe('if-lesson-08', () => {
  it('checa brinde de bidelidade - 01', () => {
    const result = lesson.brindeDeFidelidade(USUARIO_01);
    const expected = 'Olá Antonio Gordo da Silva, você já resgatou o seu brinde na nossa central?';
    expect(result).toEqual(expected);
  });

  it('checa brinde de bidelidade - 02', () => {
    const result = lesson.brindeDeFidelidade(USUARIO_02);
    const expected = undefined;
    expect(result).toEqual(expected);
  });
});
