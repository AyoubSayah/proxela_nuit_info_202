import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './languages/en.json'
import fr from './languages/fr.json'

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
    detection: DETECTION_OPTIONS,
    fallbackLng: ['en', 'fr'],
    supportedLngs: ['en', 'fr'],
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  })
export default i18n
