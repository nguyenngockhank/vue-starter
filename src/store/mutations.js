import { INCREASE_COUNT } from "./constants";

var mutations = {};
mutations[INCREASE_COUNT] = (state, num = 1) => {
    state.testCount += num;
}

export { mutations } ;