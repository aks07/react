// let productData = [
//     {"id":1, "name":"Bravia", "price": 56000},
//     {"id":2, "name":"LG", "price": 50000},
//     {"id":3, "name":"Samsung", "price": 67000}
// ];
let productData=[];

export function productReducer(state=productData, action) {
    switch(action.type)
    {
        case "ADD":
            console.log("Product - Adding state = ", state, " action = ", action.type);
            //let p = state.filter((product) => product.id !== action.payload.id);
            //return p;
            return state;
        case "REMOVE":
            console.log("Product - Remove state = ", state, " action = ", action.type);
            //return [...state, action.payload];
            return state;
        case "ADD_PRODUCT":
            return [...state, action.payload];
        case "DELETE_PRODUCT":
            // let deleteProduct = state.filter((product) => product.id !== action.payload.id);
            // return deleteProduct;

            let idx = state.findIndex((e) => e._id === action.payload);
            return [...state.slice(0, idx), ...state.slice(idx+1)];
        case "UPDATE_PRODUCT":
            let pidx = state.findIndex((e) => e._id == action.payload._id);
            if (pidx === -1)
                return state;
            else
            {
                return [...state.slice(0, pidx), action.payload, ...state.slice(pidx+1)];
                //state[pidx] = action.payload
                //return state;
            }
        case "GET_PRODUCT":
            return [...action.payload]    
        default:
            console.log("Product - Default state = ", state, " action = ", action.type);
            return state;
    }
};