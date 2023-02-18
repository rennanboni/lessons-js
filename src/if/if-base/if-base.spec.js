const lesson = require('./if-base');

describe('if-lesson-01', () => {
  it('deve ser definido', () => {
    const result = lesson.func();
    const expected = undefined;
    expect(result).toEqual(expected);
  });
});
