const redux = require("redux");
const createStore = redux.createStore;

// 1. Define a reducer
let mathReducer = (state={count: 0}, action) => {
    console.log("state = ", state, " action=", action);

    switch(action.type)
    {
        case "INCREMENT":
            state.count++;
            return state;
        case "ADD":
            state.count = state.count + action.payload;
            //state.count += action.payload;
            return state;
        default:
            return state;
    }
}

// 2. Create a Store with Math Reducer
let myStore = createStore(mathReducer);
console.log("Initial state of ", myStore.getState(), " ;count = ", myStore.getState().count);

// 3. Observe the state changes
myStore.subscribe(() => {
    console.log("Current state is ", myStore.getState(), " ;count = ", myStore.getState().count);
})

// 4. Action creators
function Increment() {
    return {type: "INCREMENT"};
}
function Add(num) {
    return {type: "ADD", payload: num};
}

// 5. Dispatch an Action
myStore.dispatch(Increment());
myStore.dispatch(Increment());
myStore.dispatch(Add(8));
myStore.dispatch(Add(26));