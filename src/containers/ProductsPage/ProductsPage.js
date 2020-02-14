import React, { useState, useEffect } from "react";
import Title from "../../components/Title/Title";
import { Row, Col } from "react-bootstrap";
import Products from "../../components/Products/Products";
import ProductImage from "../../assets/images/1.jpg";

const ProductsPage = props => {
	const [ products, setProducts ] = useState([
		{
			id: 0,
			title: "Product0",
			src: ProductImage,
			description: "Description0",
			maxAmount: 7
		},
		{
			id: 1,
			title: "Product1",
			src: ProductImage,
			description: "Description1",
			maxAmount: 5
		},
		{
			id: 2,
			title: "Product2",
			src: ProductImage,
			description: "Description2",
			maxAmount: 7
		},
		{
			id: 3,
			title: "Product3",
			src: ProductImage,
			description: "Description3",
			maxAmount: 5
		}
	]);
	const [ isLoading, setIsLoading ] = useState(true);
	useEffect(() => {
		const productsCopy = products.map(product => {
			return {
				...product,
				amount: 0,
				isMax: false
			};
		});

		setProducts(productsCopy);
		setIsLoading(false);
		// eslint-disable-next-line
	}, []);
	// add to redux
	const addToCartHandler = (event, id) => {
		event.preventDefault();
		console.log(id);
	};
	const plusProductHandler = (event, id) => {
		event.preventDefault();
		const productIndex = products.findIndex(product => {
			return product.id === id;
		});
		const productsCopy = products.slice();
		// if amount is maximum then set isMax to true to disable the plus button
		if (productsCopy[productIndex].amount === productsCopy[productIndex].maxAmount) {
			productsCopy[productIndex].isMax = true;
			return;
		}
		productsCopy[productIndex].isMin = false;

		productsCopy[productIndex].amount++;
		setProducts(productsCopy);
	};
	const minusProductHandler = (event, id) => {
		event.preventDefault();
		const productIndex = products.findIndex(product => {
			return product.id === id;
		});
		const productsCopy = products.slice();
		// if amount is maximum then set isMax to true to disable the plus button
		if (productsCopy[productIndex].amount === 0) {
			productsCopy[productIndex].isMin = true;
			return;
		}
		productsCopy[productIndex].isMax = false;
		productsCopy[productIndex].amount--;
		setProducts(productsCopy);
	};
	const amountChangeHandler = (event, id) => {
		const productIndex = products.findIndex(product => {
			return product.id === id;
		});
		const value = event.target.value;
		const productsCopy = products.slice();
		if (value < 0 || value > productsCopy[productIndex].maxAmount) {
			return;
		}
		productsCopy[productIndex].amount = value;
		setProducts(productsCopy);
	};

	return (
		<React.Fragment>
			<Row>
				<Col>
					<Title>Продукты</Title>
				</Col>
			</Row>
			<Row>
				{!isLoading && (
					<Products
						products={products}
						addToCartClicked={addToCartHandler}
						plusClicked={plusProductHandler}
						minusClicked={minusProductHandler}
						amountChanged={amountChangeHandler}
					/>
				)}
			</Row>
		</React.Fragment>
	);
};

export default ProductsPage;
