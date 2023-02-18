const lesson = require('./if-for-01');

describe('if-for-01', () => {
  it('deve ser definido', () => {
    const result = lesson.tabuada(5, 3);
    const expected = [5, 10, 15];
    expect(result).toEqual(expected);
  });
});
