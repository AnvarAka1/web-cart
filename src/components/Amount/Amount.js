import React from "react";
import classes from "./Amount.module.scss";
import { Button, Form } from "react-bootstrap";
const Amount = ({ amount, clicked, changed, plus, minus }) => {
	return (
		<div className={[ classes.Amount ].join(" ")}>
			<div className="d-flex align-items-center">
				<Button onClick={minus}>-</Button>
				<Form.Control value={amount} type="number" onChange={changed} />
				<Button onClick={plus}>+</Button>
			</div>
			<Button onClick={clicked} className="mt-2">
				Добавить в корзину
			</Button>
		</div>
	);
};

export default Amount;
