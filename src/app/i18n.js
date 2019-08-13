import { buildTranslations, buildConstants } from '../utils/i18nUtils';
import Routes from '../constants/routes';

// TODO: Replace here the screens titles

const namespace = 'app';
const translations = {
  es: {
    [Routes.Login]: 'Login',
    [Routes.Home]: 'Home'
  }
};

export const strings = buildConstants(translations, namespace, 'es');
export default buildTranslations(translations, namespace);
