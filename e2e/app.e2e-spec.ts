import { MyTestPage } from './app.po';

describe('my-test App', () => {
  let page: MyTestPage;

  beforeEach(() => {
    page = new MyTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
