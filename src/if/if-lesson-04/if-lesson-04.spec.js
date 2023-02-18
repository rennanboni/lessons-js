const lesson = require('./if-lesson-04');

describe('if-lesson-04', () => {
  it('deve receber o dobro do numero', () => {
    const result = lesson.dobroNumero(5);
    const expected = 10;
    expect(result).toEqual(expected);
  });
});
