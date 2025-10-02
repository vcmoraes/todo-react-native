import { useTranslation } from 'react-i18next';

export const useI18n = () => {
  const { t: translate } = useTranslation();
  return { translate };
};

export default useI18n;
