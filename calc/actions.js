import { state } from "./state.js";
import * as updateDisplay from './updateDisplay.js'

export function equal() {
    if(state.operation == ''){
        return
    }

    const result = eval(state.valueOne + state.operation + state.valueTwo)
    
    state.valueOne = result
    state.valueTwo = ''
    state.operation = ''

    updateDisplay.updateKey()
}

export function reset() {
    state.valueOne = ''
    state.valueTwo = ''
    state.operation = ''

    updateDisplay.clean()
}

export function delet() {
    let length = null
    
    if(state.valueOne != '' && state.operation == ''){

        state.valueOne = state.valueOne.toString()

        length = state.valueOne.length - 1
        state.valueOne = state.valueOne.replace(state.valueOne[length], '')

    } else if( state.valueOne != '' && state.operation != '' && state.valueTwo == '') {
        
        length = state.operation.length - 1
        state.operation = state.operation.replace(state.operation[length], '')

    } else if( state.valueOne != '' && state.operation != '' && state.valueTwo != '') {
        
        length = state.valueTwo.length - 1
        state.valueTwo = state.valueTwo.replace(state.valueTwo[length], '')
        
    }

    updateDisplay.updateKey()
    

}

