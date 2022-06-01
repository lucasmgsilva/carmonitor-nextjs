// Importando as dependências
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

// Buscando as nossas traduções da pasta locales
import translations from './locales'

// Configuração i18n
const i18nConfig = {
  resources: translations,  // resources são as nossas traduções
  fallbackLng: 'pt-BR',     // fallbackLng é o idioma padrão caso o browser não consiga detectar sozinho
  defaultNS: 'translations', // defaultNS é o namespace padrão, podemos usar 'translations'
}

i18n
  .use(LanguageDetector) // Usa o detector de idioma do seu browser
  .use(initReactI18next) // Usa o pacote do i18n específico para React
  .init(i18nConfig) // Usa nossas configurações

export default i18n