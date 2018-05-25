let cartData = [];

export function cartReducer(state=cartData, action) {
    switch (action.type)
    {
        case "ADD":
            console.log("Cart - Adding state = ", state, " action = ", action.type, "found=", state.length);
            let foundItem = state.filter((item) => item.id === action.payload.id);
            let filteredItem = state.filter((item) => item.id !== action.payload.id);
            if (foundItem.length > 0)
            {
                foundItem[0].qty++;
            }
            else
            {
                foundItem = [];
                foundItem[0] = action.payload;
            }
            if (filteredItem.length < 0)
            {
                filteredItem = [];
            }
            return [...filteredItem, ...foundItem];
        case "REMOVE":
            console.log("Cart - Remove state = ", state, " action = ", action.type);
            let updatedCart = state.filter((item) => item.id !== action.payload.id);
            return updatedCart;
        default:
            console.log("Cart - Default state = ", state, " action = ", action.type);
            return state;
    }
};