import { test as base } from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import { ArticlePage } from '@pages/ArticlePage';

type PageFixtures = {
  homePage: HomePage;
  articlePage: ArticlePage;
};

export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  articlePage: async ({ page }, use) => {
    await use(new ArticlePage(page));
  },
});

export const expect = test.expect;
