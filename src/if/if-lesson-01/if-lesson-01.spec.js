const lesson = require('./if-lesson-01');

describe('if-lesson-01', () => {
  it('deve ser definido', () => {
    expect(lesson).toBeDefined();
  });

  it('deve ser maior de idade', () => {
    expect(lesson.checarMaiorIdade(18)).toBeTruthy();
  });

  it('deve ser menor de idade', () => {
    expect(lesson.checarMaiorIdade(17)).toBeFalsy();
  });
});
