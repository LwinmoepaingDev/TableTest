/**
 * Language Switcher i18n Configuration
 * Doc: https://nuxt-community.github.io/nuxt-i18n
 */
module.exports.i18n = {
  locales: [
    {
      name: 'English',
      code: 'en',
      file: 'en.json'
    },
    {
      name: 'Myanmar',
      code: 'mm',
      file: 'mm.json'
    }
  ],
  langDir: 'locales/',
  defaultLocale: 'en',
  strategy: 'prefix_except_default',
  lazy: true,
  loadLanguagesAsync: true,
}


