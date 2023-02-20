const lesson = require('./if-lesson-03');

describe('if-lesson-03', () => {
  it('deve ser definido', () => {
    expect(lesson).toBeDefined();
  });

  it('some de dois numero', () => {
    const result = lesson.soma(3, 2);
    const expected = 5;
    expect(result).toBe(expected);
  });
});
