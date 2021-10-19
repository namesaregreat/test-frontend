import {getStore} from './store'

function reducers ({action, payload, ...rest}){

    switch(action.type){
        case "edit": return "edit task";
        case "delete": return "remove task with id";
        case "add": return "create a new task";
        default: return store
    }

}

export default reducers