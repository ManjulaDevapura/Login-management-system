import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './en/index.json';
import fr from './fr/index.json';

i18n
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: en
      },
      fr: {
        translations: fr
      }
    },
    lng: 'en',
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ","
    },

    react: {
      wait: true
    }
  });

export default i18n;