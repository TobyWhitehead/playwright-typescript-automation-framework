import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ArticlePage extends BasePage {
  private readonly heading: Locator;
  private readonly historyTab: Locator;
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;
  private readonly searchInputComboBox: Locator;

  constructor(page: Page) {
    super(page);

    this.heading = page.locator('#firstHeading');
    this.historyTab = page.locator('#ca-history');
    this.searchInput = page.getByLabel('Search Wikipedia');
    this.searchInputComboBox = page.getByRole('combobox', { name: 'Search Wikipedia' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
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

  async searchFor(term: string): Promise<void> {
    await this.searchInput.click();
    await this.searchInputComboBox.fill(term);
    await this.searchButton.click();
  }
}
