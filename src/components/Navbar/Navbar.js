import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
const navbar = ({ items }) => {
	return (
		<React.Fragment>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Магазин</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Продукты</Nav.Link>
					<Nav.Link href="#features">Продано</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="#pricing">Корзина ({items})</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-info">Search</Button>
				</Form>
			</Navbar>
		</React.Fragment>
	);
};

export default navbar;
