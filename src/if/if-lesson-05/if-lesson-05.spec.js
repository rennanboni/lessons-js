const lesson = require('./if-lesson-05');

describe('if-lesson-05', () => {
  it('sacar dinheiro', () => {
    const result = lesson.sacarDinheiroBanco(1000, 200);
    const expected = 800;
    expect(result).toEqual(expected);
  });
});
