import { LANGUAGES, languageResources, supportedLanguages } from '../languages';

describe('languages configuration', () => {
  it('GIVEN language constants WHEN checking values THEN should have correct language codes', () => {
    expect(LANGUAGES.EN).toBe('en');
    expect(LANGUAGES.PT).toBe('pt');
  });

  it('GIVEN supported languages WHEN checking array THEN should contain both languages', () => {
    expect(supportedLanguages).toEqual(['en', 'pt']);
  });

  it('GIVEN language resources WHEN checking structure THEN should have resources for both languages', () => {
    expect(languageResources.en).toBeDefined();
    expect(languageResources.pt).toBeDefined();
    expect(languageResources.en.translation).toBeDefined();
    expect(languageResources.pt.translation).toBeDefined();
  });

  it('GIVEN language resources WHEN checking translations THEN should have same keys in both languages', () => {
    const enKeys = Object.keys(languageResources.en.translation);
    const ptKeys = Object.keys(languageResources.pt.translation);

    expect(enKeys).toEqual(ptKeys);
  });

  it('GIVEN language resources WHEN checking translations THEN should have non-empty values', () => {
    const enTranslations = languageResources.en.translation;
    const ptTranslations = languageResources.pt.translation;

    Object.keys(enTranslations).forEach(key => {
      expect(enTranslations[key]).toBeTruthy();
      expect(ptTranslations[key]).toBeTruthy();
    });
  });
});
