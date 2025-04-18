import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: {
                    home: 'Home',
                    toys: 'Toys',
                    dashboard: 'Dashboard',
                    about: 'About',
                    mister_toy: 'Mister Toy',
                    i18: 'internationalization',
                },
            },
            es: {
                translation: {
                    home: 'Inicio',
                    toys: 'Juguetes',
                    dashboard: 'Tablero',
                    about: 'Acerca de',
                    mister_toy: 'Señor Juguete',
                    i18: 'internacionalización',
                },
            },
        },
        lng: 'en', // Default language
        interpolation: {
            escapeValue: false, 
        },
    })

export default i18n
