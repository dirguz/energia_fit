
import datos from "../../../assets/Productos/datos.json"

export const get_All = () => {
    return {type: "GET_ALL", payload:datos.result}
}

export const detail_Product = (id) => {
    return {type: "DETAIL_PRODUCT", payload: info}
}

export const create_Product = (data) => {
    return {type: "CREATE_PRODUCT", payload:data}
}
