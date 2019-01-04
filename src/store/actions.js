import * as constants from "./constants";

var actions = {}

for(let index in constants) {
    let action = constants[index];
    actions[action] = function({ commit }, ...restArgs){
        let params = [action, ...restArgs];  
        commit(...params)
    }
}

/// can override action here :D

export default actions;
