/* eslint-disable camelcase */
import en_us from './en'
import fa_ir from './fa'

const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'fa'
export { lang }

const diretion = {
  fa: 'rtl',
  en: 'ltr'
}
function getDirection() {
  return diretion[lang]
}
export { getDirection }

const fonts = {
  fa: 'IRANSans',
  en: 'Muli'
}
function getFonts() {
  return fonts[lang]
}
export { getFonts }

const translate = {
  fa: fa_ir,
  en: en_us
}
function getTranslate() {
  return translate[lang]
}
export { getTranslate }
