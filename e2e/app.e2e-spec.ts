import { FreQsPage } from './app.po';

describe('fre-qs App', () => {
  let page: FreQsPage;

  beforeEach(() => {
    page = new FreQsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
