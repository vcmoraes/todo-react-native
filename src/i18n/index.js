import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGES, languageResources, supportedLanguages } from './languages';

const getDeviceLanguage = () => {
  const browserLanguage = navigator.language || navigator.userLanguage || LANGUAGES.EN;
  const languageCode = browserLanguage.split('-')[0];
  return supportedLanguages.includes(languageCode) ? languageCode : LANGUAGES.EN;
};

i18n
  .use(initReactI18next)
  .init({
    resources: languageResources,
    lng: getDeviceLanguage(),
    fallbackLng: LANGUAGES.EN,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export { useI18n } from './hooks/useI18n';
export { LANGUAGES } from './languages';
export default i18n;
