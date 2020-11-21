import { INCREASE_COUNT } from "./action-types";
import { HomeState } from './state'

var mutations = {};
mutations[INCREASE_COUNT] = (state: HomeState, num = 1) => {
    state.testCount += num;
}

export { mutations } ;