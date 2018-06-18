import { PrimeNGAssignPage } from './app.po';

describe('prime-ng-assign App', () => {
  let page: PrimeNGAssignPage;

  beforeEach(() => {
    page = new PrimeNGAssignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
