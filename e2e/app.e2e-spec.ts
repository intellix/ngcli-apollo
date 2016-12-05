import { NgcliApolloPage } from './app.po';

describe('ngcli-apollo App', function() {
  let page: NgcliApolloPage;

  beforeEach(() => {
    page = new NgcliApolloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
