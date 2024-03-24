import * as el from './elements.js'
import { state } from './state.js'


export function updateKey() {
    el.display.textContent = `${state.valueOne} ${state.operation} ${state.valueTwo}`
}

export function clean() {
    el.display.textContent = ''
}