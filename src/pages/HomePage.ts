import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;
  private readonly languageDropdown: Locator;

  constructor(page: Page) {
    super(page);

    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('button[type="submit"]');
    this.languageDropdown = page.locator('#searchLanguage');
  }

  async searchFor(term: string): Promise<void> {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  async selectLanguage(languageCode: string): Promise<void> {
    await this.languageDropdown.selectOption(languageCode);
  }
}
