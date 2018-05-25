const redux = require("redux");
const createStore = redux.createStore;

// 1. Define a reducer
let mathReducer = (state=0, action) => {
    console.log("state = ", state, " action=", action);

    if (action.type == "INCREMENT") {
        return state+1;
    }
    else if (action.type == "Add") {
        return state + action.payload;
    }
    else {
        return state;
    }
}

// 2. Create a Store with Math Reducer
let myStore = createStore(mathReducer);
console.log("Initial state of ", myStore.getState())

// 3. Observe the state changes
myStore.subscribe(() => {
    console.log("Current state is ", myStore.getState())
})

// 4. Dispatch an Action
myStore.dispatch({type: "INCREMENT"});
myStore.dispatch({type: "INCREMENT"});

myStore.dispatch({type:"Add", payload:8})
