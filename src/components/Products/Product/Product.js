import React from "react";
import classes from "./Product.module.scss";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AmountController from "../../AmountController/AmountController";

const product = ({ product, hasAmountController, clicked, changed, plus, minus }) => {
	const { id, title, src, description, price, amount, maxAmount } = product;
	return (
		<Card className={classes.Product}>
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
				<Card.Text>
					<strong>Цена: ${price}</strong>
				</Card.Text>
				<Card.Text>
					<strong>Стоимость: ${price * amount}</strong>
				</Card.Text>
				<Card.Text>В наличии: {maxAmount}</Card.Text>
				{hasAmountController && (
					<AmountController amount={amount} clicked={clicked} plus={plus} minus={minus} changed={changed} />
				)}
			</Card.Body>
		</Card>
	);
};

export default product;
