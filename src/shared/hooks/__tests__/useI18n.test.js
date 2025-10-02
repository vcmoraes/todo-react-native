import { renderHook, act } from '@testing-library/react';
import { Provider as JotaiProvider } from 'jotai';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';
import { useI18n } from '../useI18n';
import fs from 'fs';
import path from 'path';

const getAvailableLanguages = () => {
  const localesDir = path.join(__dirname, '../../../locales');
  return fs.readdirSync(localesDir)
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      code: file.replace('.json', ''),
      translations: JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf8'))
    }));
};

const wrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <JotaiProvider>
      {children}
    </JotaiProvider>
  </I18nextProvider>
);

describe('useI18n', () => {
  const languages = getAvailableLanguages();

  languages.forEach(language => {
    it(`GIVEN ${language.code} language WHEN translating common keys THEN should return ${language.code} text`, async () => {
      await i18n.changeLanguage(language.code);
      const { result } = renderHook(() => useI18n(), { wrapper });

      expect(result.current.translate('app.title')).toBe(language.translations.app.title);
      expect(result.current.translate('addTask.placeholder')).toBe(language.translations.addTask.placeholder);
      expect(result.current.translate('taskList.filters.all')).toBe(language.translations.taskList.filters.all);
    });
  });

  it('GIVEN unknown translation key WHEN translating THEN should return the key itself', async () => {
    await i18n.changeLanguage('en');
    const { result } = renderHook(() => useI18n(), { wrapper });

    expect(result.current.translate('unknown.key')).toBe('unknown.key');
  });

  it('GIVEN language change WHEN accessing translations THEN should update to new language', async () => {
    const { result } = renderHook(() => useI18n(), { wrapper });

    for (const language of languages) {
      await act(async () => {
        await i18n.changeLanguage(language.code);
      });
      expect(result.current.translate('app.title')).toBe(language.translations.app.title);
    }
  });

  it('GIVEN nested translation keys WHEN translating THEN should return correct nested values', async () => {
    for (const language of languages) {
      await act(async () => {
        await i18n.changeLanguage(language.code);
      });
      const { result } = renderHook(() => useI18n(), { wrapper });

      expect(result.current.translate('taskList.emptyStates.noTasks')).toBe(language.translations.taskList.emptyStates.noTasks);
      expect(result.current.translate('accessibility.addTaskButton')).toBe(language.translations.accessibility.addTaskButton);
    }
  });

  it('GIVEN all available languages WHEN checking language support THEN should support all configured languages', () => {
    const supportedLanguages = i18n.languages;
    
    languages.forEach(language => {
      expect(supportedLanguages).toContain(language.code);
    });
  });
});
