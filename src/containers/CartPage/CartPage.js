import React, { useState } from "react";
import CartList from "../../components/CartList/CartList";
import ProductImage from "../../assets/images/1.jpg";
import Product from "../../components/Products/Product/Product";
import { Row, Col, Button } from "react-bootstrap";
import Header from "../../components/UI/Header/Header";
import Title from "../../components/Title/Title";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
const CartPage = props => {
	let isRemoveClicked = false;
	const [ selectedCartItem, setSelectedCartItem ] = useState(null);
	const [ cartItems, setCartItems ] = useState([
		{
			id: 0,
			title: "Product0",
			src: ProductImage,
			description: "Description0",
			price: 10,
			amount: 2,
			maxAmount: 7
		},
		{
			id: 1,
			title: "Product1",
			src: ProductImage,
			description: "Description1",
			price: 5,
			amount: 3,
			maxAmount: 5
		},
		{
			id: 2,
			title: "Product2",
			src: ProductImage,
			description: "Description2",
			price: 13,
			amount: 4,
			maxAmount: 7
		}
	]);
	const cartItemHandler = (event, id) => {
		setSelectedCartItem(null);
		// console.log(isRemoveClicked);
		if (!isRemoveClicked) {
			console.log("Selected", id);

			setSelectedCartItem(id);
		}
		isRemoveClicked = false;
	};

	const cartItemRemoveHandler = (event, id) => {
		isRemoveClicked = true;
		let cartItemsCopy = cartItems.slice();
		const index = cartItemsCopy.findIndex(cartItem => {
			return cartItem.id === id;
		});
		cartItemsCopy.splice(index, 1);
		setCartItems(cartItemsCopy);
		props.onDecCartItems();
	};
	const getSum = () => {
		return cartItems.reduce((sum, arr) => {
			return sum + arr.price * arr.amount;
		}, 0);
	};
	const getCartItem = id => {
		return cartItems.find(cartItem => {
			return cartItem.id === id;
		});
	};
	return (
		<React.Fragment>
			<Title>Корзина</Title>
			<Row className="">
				<Col md={6}>
					{cartItems.length ? (
						<CartList
							cartItems={cartItems}
							clicked={cartItemHandler}
							selectedCartItem={selectedCartItem}
							removeClicked={cartItemRemoveHandler}
						/>
					) : (
						<Header h={5} className="text-danger">
							Корзина пуста
						</Header>
					)}

					<Header h={5} className="mt-3">
						Сумма: <strong>${getSum()}</strong>
					</Header>
					<Button variant="success" disabled={!cartItems.length} className="w-100">
						Купить
					</Button>
				</Col>

				<Col md={6}>
					{selectedCartItem !== null ? (
						<Product product={getCartItem(selectedCartItem)} />
					) : (
						<Header h={4}>Выберите продукт чтобы увидеть его описание</Header>
					)}
				</Col>
			</Row>
		</React.Fragment>
	);
};
const mapDispatchToProps = dispatch => {
	return {
		onDecCartItems: () => dispatch(actions.decCartItemsCount())
	};
};
export default connect(null, mapDispatchToProps)(CartPage);
