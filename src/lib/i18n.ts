import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from '../locale/english.json'
import ptTranslations from '../locale/portuguese.json'

const resources = {
  en: {
    ...enTranslations,
  },
  pt: {
    ...ptTranslations,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  //   fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
