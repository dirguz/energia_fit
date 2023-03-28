
import datos from "../../../assets/Productos/datos.json"
import BDRecipe from "../../../assets/Productos/BDRecipe.json"


export const get_All = () => {
    return {type: "GET_ALL", payload:datos.result}
}

export const get_Recipes = () => {
    return {type: "GET_RECIPES", payload:BDRecipe.results}
}

// Actions que se usaran mas adelante
// export const detail_Product = (id) => {
//     return {type: "DETAIL_PRODUCT", payload: info}
// }

// export const create_Product = (data) => {
//     return {type: "CREATE_PRODUCT", payload:data}
// }
