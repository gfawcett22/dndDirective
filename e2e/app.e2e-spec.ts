import { DndDirectivePage } from './app.po';

describe('dnd-directive App', () => {
  let page: DndDirectivePage;

  beforeEach(() => {
    page = new DndDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
