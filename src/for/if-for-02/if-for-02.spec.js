const lesson = require('./if-for-02');

describe('if-for-02', () => {
  it('deve ser definido', () => {
    const result = lesson.tabuada(5, 3);
    const expected = ['5 x 1 = 5', '5 x 2 = 10', '5 x 3 = 15'];
    expect(result).toEqual(expected);
  });
});
