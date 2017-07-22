import { AndyGsPage } from './app.po';

describe('andy-gs App', () => {
  let page: AndyGsPage;

  beforeEach(() => {
    page = new AndyGsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
