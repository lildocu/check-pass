import { CheckPassPage } from './app.po';

describe('check-pass App', function() {
  let page: CheckPassPage;

  beforeEach(() => {
    page = new CheckPassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
