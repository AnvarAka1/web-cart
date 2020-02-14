import React from "react";
import Product from "./Product/Product";
import { Col } from "react-bootstrap";
const products = ({ products, addToCartClicked, amountChanged, plusClicked, minusClicked }) => {
	const productsList = products.map(product => {
		return (
			<Col md={4} key={product.id} className="mb-4">
				<Product
					product={product}
					clicked={event => addToCartClicked(event, product.id)}
					changed={event => amountChanged(event, product.id)}
					plus={event => plusClicked(event, product.id)}
					minus={event => minusClicked(event, product.id)}
				/>
			</Col>
		);
	});
	return <React.Fragment>{productsList}</React.Fragment>;
};

export default products;
