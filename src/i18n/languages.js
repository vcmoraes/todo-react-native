import en from '../locales/en.json';
import pt from '../locales/pt.json';

export const LANGUAGES = {
  EN: 'en',
  PT: 'pt',
};

export const languageResources = {
  [LANGUAGES.EN]: { translation: en },
  [LANGUAGES.PT]: { translation: pt },
};

export const supportedLanguages = Object.values(LANGUAGES);

export default LANGUAGES;
