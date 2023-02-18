const lesson = require('./if-for-03');

describe('if-for-03', () => {
  it('deve retorna a lista de numeros', () => {
    const result = lesson.numerosDistintos([1, 2, 1, 2, 3, 5, 6, 8]);
    const expected = [1, 2, 3, 5, 6, 8];
    expect(result).toEqual(expected);
  });
});
