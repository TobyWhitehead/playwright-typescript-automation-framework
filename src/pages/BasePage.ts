import { Page, expect } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string = ''): Promise<void> {
    await this.page.goto(path);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async getUrl(): Promise<string> {
    return this.page.url();
  }

  async expectUrlToContain(value: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(value));
  }

  async expectTitleToContain(value: string): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(value));
  }
}
