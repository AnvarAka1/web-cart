import React from "react";
import classes from "./Product.module.scss";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Amount from "../../Amount/Amount";

const product = ({ product, clicked, changed, plus, minus }) => {
	const { id, title, src, description, amount, maxAmount } = product;
	return (
		<div className={classes.Product}>
			<NavLink to={`/products/${id}`}>
				<Card.Img variant="top" src={src} alt={title} />
			</NavLink>
			<Card.Body>
				<Card.Title>
					<NavLink to={`/products/${id}`}>{title}</NavLink>
				</Card.Title>
				<Card.Text>
					<NavLink to={`/products/${id}`}>{description}</NavLink>
				</Card.Text>
				<Card.Text>В наличии: {maxAmount}</Card.Text>
				<Amount amount={amount} clicked={clicked} plus={plus} minus={minus} changed={changed} />
			</Card.Body>
		</div>
	);
};

export default product;
