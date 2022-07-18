import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import { discountReducer } from "./reducers/discountPriceReducer";
import { homeReducer } from "./reducers/homeReducer";
import { productReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userDetailsReducer";
import { userLoginReducer } from "./reducers/userLoginReducer";
const rootReducer=combineReducers({
    hydroponic:homeReducer,
    banner:homeReducer,
    nft:productReducer,
    dutch:productReducer,
    dwc:productReducer,
    micro:productReducer,
    cart:cartReducer,
    cartRemove:cartReducer,
    userDetails:userReducer,
    discount:discountReducer,
    userName:userLoginReducer,
    logout:userLoginReducer
})
export const store=createStore(
    rootReducer,
    applyMiddleware(thunk)
)