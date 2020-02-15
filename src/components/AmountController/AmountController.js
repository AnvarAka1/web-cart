import React from "react";
import classes from "./AmountController.module.scss";
import { Button, Form, InputGroup } from "react-bootstrap";
const AmountController = ({ amount, clicked, changed, plus, minus }) => {
	return (
		<div className={[ classes.Amount ].join(" ")}>
			<div className="d-flex align-items-center">
				<InputGroup>
					<InputGroup.Prepend>
						<Button variant="danger" onClick={minus}>
							-
						</Button>
					</InputGroup.Prepend>
					<Form.Control value={amount} type="number" onChange={changed} />
					<InputGroup.Append>
						<Button variant="success" onClick={plus}>
							+
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</div>
			<Button disabled={amount === 0} variant="dark" onClick={clicked} className="mt-2 w-100">
				Добавить в корзину
			</Button>
		</div>
	);
};

export default AmountController;
