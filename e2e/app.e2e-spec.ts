import { MangasurvangularPage } from './app.po';

describe('mangasurvangular App', () => {
  let page: MangasurvangularPage;

  beforeEach(() => {
    page = new MangasurvangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
