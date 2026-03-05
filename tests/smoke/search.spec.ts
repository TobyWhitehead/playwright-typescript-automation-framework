import { test, expect } from '@fixtures/base.fixture';

const searchTerms = ['Playwright', 'Selenium', 'Cypress'];

test.describe('Wikipedia Search Feature @smoke @search', () => {
  for (const term of searchTerms) {
    test(`User can search for an article: ${term}`, async ({ homePage, articlePage }) => {
      await homePage.navigate('/');
      await homePage.searchFor(term);

      await articlePage.expectTitleToContain(term);
      await articlePage.expectUrlToContain(term);

      const heading = await articlePage.getHeadingText();
      expect(heading).toContain(term);
    });
  }
});
