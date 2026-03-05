import { test, expect } from '@fixtures/base.fixture';

const originPage = 'Playwright';
const destinationPage = 'Selenium';

test.describe('Wikipedia Navigate Feature @smoke @navigate', () => {
  test(`User can navigate from ${originPage} to ${destinationPage}`, async ({
    homePage,
    articlePage,
  }) => {
    await homePage.navigate('/');
    await homePage.searchFor(originPage);

    await articlePage.searchFor(destinationPage);

    await articlePage.expectTitleToContain(destinationPage);
    await articlePage.expectUrlToContain(destinationPage);

    const heading = await articlePage.getHeadingText();
    expect(heading).toContain(destinationPage);
  });
});
