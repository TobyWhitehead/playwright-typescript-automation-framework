import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ArticlePage extends BasePage {
  private readonly heading: Locator;
  private readonly historyTab: Locator;

  constructor(page: Page) {
    super(page);

    this.heading = page.locator('#firstHeading');
    this.historyTab = page.locator('#ca-history');
  }

  async getHeadingText(): Promise<string> {
    return this.heading.innerText();
  }

  async expectHistoryTabVisible(): Promise<void> {
    await expect(this.historyTab).toBeVisible();
  }

  async clickHistory(): Promise<void> {
    await this.historyTab.click();
  }
}
