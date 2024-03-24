import * as el from './elements.js'
import { state } from './state.js'
import * as actions from './actions.js'
import * as updateDisplay from './updateDisplay.js'

export function click(){
    el.numberKeyboard.addEventListener('click', (e) => {
        const key = e.target.value

        if(key == undefined){
            return
        }

        if(state.operation == '' && state.valueTwo == '') {
            state.valueOne = state.valueOne.concat(key)
        }

        if(state.operation != '') {
            state.valueTwo = state.valueTwo.concat(key)
        }

        updateDisplay.updateKey()
        
    })

    el.operations.addEventListener('click', (e) => {
        const operation = e.target.dataset.action
        const symbolOperation = e.target.value

        if(symbolOperation == undefined){
            return
        }
        
        if(typeof actions[operation] == 'function'){
            actions[operation]()
            return
        }

        if(state.valueOne == '') {
            return
        }

        if(state.valueOne != '' && state.operation != '' && state.valueTwo != ''){
            actions.equal()
        }

        state.operation = symbolOperation

        updateDisplay.updateKey()
    })

    el.clean.addEventListener('click', (e) => {
        const action = e.target.value
        actions[action]()
    })

   
}