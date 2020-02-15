import * as actionTypes from "./actionTypes";

export const incCartItemsCount = () => {
	return {
		type: actionTypes.INC_CART_ITEMS_COUNT
	};
};
export const decCartItemsCount = () => {
	return {
		type: actionTypes.DECR_CART_ITEMS_COUNT
	};
};
