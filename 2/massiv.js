import { sade } from './lib.js'
import { sadehasil } from './sadehasil.js'

export function sadeArray(a) {

  let c = a.filter(x => sade(x))  //let c = a.filter(sade) belede yazmaq
  return c
}

export function superSadeMassiv(a) {

  let b = a.filter(x => sade(Math.abs(x)))
  return b
}

export function modulkub(a) {
  let b = a.map(x => Math.abs(x * x * x))
  return b
}

export function sademassivhasil(a) {
  let b = a.map(x => sadehasil(x))
  return b
}
export function massivcem(a) {

  let c = 0
  for (let i = 0; i < a.length; i++) {
    c = c + a[i]
  }

  return c

}
