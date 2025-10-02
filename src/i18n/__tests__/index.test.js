import i18n from '../index';

describe('i18n configuration', () => {
  it('GIVEN i18n configuration WHEN checking initialization THEN should be initialized', () => {
    expect(i18n.isInitialized).toBe(true);
  });

  it('GIVEN i18n configuration WHEN checking fallback language THEN should have valid fallback language', () => {
    expect(i18n.options.fallbackLng).toBeDefined();
    expect(Array.isArray(i18n.options.fallbackLng)).toBe(true);
    expect(i18n.options.fallbackLng.length).toBeGreaterThan(0);

    const supportedLanguages = Object.keys(i18n.options.resources);
    i18n.options.fallbackLng.forEach(fallbackLang => {
      expect(supportedLanguages).toContain(fallbackLang);
    });
  });

  it('GIVEN i18n configuration WHEN checking interpolation settings THEN should have correct settings', () => {
    expect(i18n.options.interpolation.escapeValue).toBe(false);
  });

  it('GIVEN i18n configuration WHEN checking react settings THEN should have correct settings', () => {
    expect(i18n.options.react.useSuspense).toBe(false);
  });

  it('GIVEN i18n configuration WHEN checking language resources THEN should have resources for all supported languages', () => {
    expect(i18n.options.resources).toBeDefined();

    const supportedLanguages = Object.keys(i18n.options.resources);
    expect(supportedLanguages.length).toBeGreaterThan(0);

    supportedLanguages.forEach(lang => {
      expect(i18n.options.resources[lang]).toBeDefined();
      expect(i18n.options.resources[lang].translation).toBeDefined();
    });
  });
});
