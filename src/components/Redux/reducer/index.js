
const initialState = {
    products:[],
    recipes:[]
}

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case "GET_ALL":
            return {
                ...state,
                products:action.payload
            };
        case "GET_RECIPES":
            return {
                ...state,
                recipes:action.payload
            };
        // case "DETAIL_PRODUCT":
        //     return {
        //         ...state,
        //         detail:action.payload
        //     }
        // case "CREATE_PRODUCT":
        //     return {
        //         ...state,
        //         products: [...state.products, action.payload]
        //     }   
        default:
            return state;
    }

}

export default rootReducer;