import { actions } from './actions'

let initialState = {
     obj: {},
}

function red(state = initialState, action: any) {
    switch (action.type) {
        case actions.submit.type:
            console.log(action.payload)
           state.obj=action.payload
            return state;

      
        default:
            return state;
    }
}

export default red;