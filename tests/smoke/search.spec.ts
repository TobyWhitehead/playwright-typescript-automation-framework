import { test, expect } from '@fixtures/base.fixture';

test.describe('Wikipedia Search Feature @smoke', () => {
  test('User can search for an article', async ({ homePage, articlePage }) => {
    await homePage.navigate('/');
    await homePage.searchFor('Playwright');

    await articlePage.expectTitleToContain('Playwright');
    await articlePage.expectUrlToContain('Playwright');

    const heading = await articlePage.getHeadingText();
    expect(heading).toContain('Playwright');
  });
});
