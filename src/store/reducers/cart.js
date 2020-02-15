import * as actionTypes from "../actions/actionTypes";
const initialState = {
	cartItemsCount: 0
};

const incCartItemsCount = (state, action) => {
	return {
		...state,
		cartItemsCount: ++state.cartItemsCount
	};
};
const decCartItemsCount = (state, action) => {
	return {
		...state,
		cartItemsCount: --state.cartItemsCount
	};
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INC_CART_ITEMS_COUNT:
			return incCartItemsCount(state, action);
		case actionTypes.DECR_CART_ITEMS_COUNT:
			return decCartItemsCount(state, action);
		default:
			return state;
	}
};

export default reducer;
