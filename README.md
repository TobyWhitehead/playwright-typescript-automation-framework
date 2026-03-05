# Playwright TypeScript Automation Framework

## Overview

Production-style Playwright automation framework built in TypeScript

## Features

- Page Object Model
- Custom Fixtures
- Cross-browser execution (Chromium, Firefox, WebKit)
- HTML reporting
- Trace on failure
- CI-ready
- ESLint + Prettier
- Strict TypeScript configuration

## Tech Stack

- Playwright Test
- TypeScript
- ESLint
- Prettier
- GitHub Actions (CI)

## Running Tests

```bash
npm install
npx playwright install
npx playwright test
```

## Run Specific Browser

```bash
npx playwright test --project=chromium
```

## Run Tags

```bash
npx playwright test --grep @smoke
```

## View Report

```bash
npx playwright show-report
```
