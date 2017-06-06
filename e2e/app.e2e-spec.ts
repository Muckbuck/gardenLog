import { AngularTestProjectPage } from './app.po';

describe('angular-test-project App', () => {
  let page: AngularTestProjectPage;

  beforeEach(() => {
    page = new AngularTestProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
