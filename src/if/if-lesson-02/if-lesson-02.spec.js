const lesson = require('./if-lesson-02');

describe('if-lesson-02', () => {
  it('deve ser definido', () => {
    expect(lesson).toBeDefined();
  });

  it('soma 1', () => {
    const result = lesson.somaUm(1);
    const expected = 2;
    expect(result).toBeDefined(expected);
  });
});
