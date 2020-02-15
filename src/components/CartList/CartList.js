import React from "react";
import { ListGroup, Button } from "react-bootstrap";
const cartList = ({ cartItems, selectedCartItem, clicked, removeClicked }) => {
	const list = cartItems.map(cartItem => {
		return (
			<ListGroup.Item
				active={selectedCartItem === cartItem.id}
				key={cartItem.id}
				style={{ cursor: "pointer" }}
				className="d-flex align-items-center justify-content-between"
				onClick={event => clicked(event, cartItem.id)}
			>
				<p className="mb-0">
					{cartItem.title} ({cartItem.amount + ", $" + cartItem.amount * cartItem.price})
				</p>
				<Button variant="danger" className="float-right" onClick={event => removeClicked(event, cartItem.id)}>
					Удалить
				</Button>
			</ListGroup.Item>
		);
	});
	return <ListGroup>{list}</ListGroup>;
};

export default cartList;
