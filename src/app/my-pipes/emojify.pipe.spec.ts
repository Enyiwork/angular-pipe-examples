import { MyPipesEmojifyPipe } from './my-pipes/emojify.pipe';

describe('MyPipesEmojifyPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPipesEmojifyPipe();
    expect(pipe).toBeTruthy();
  });
});
