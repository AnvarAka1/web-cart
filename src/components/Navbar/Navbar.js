import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const navbar = ({ cartItemsCount }) => {
	return (
		<React.Fragment>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Магазин</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Item className="mr-2">
						<NavLink to="/">Продукты</NavLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink to="/sold">Продано</NavLink>
					</Nav.Item>
				</Nav>
				<Nav>
					<Nav.Item className="mr-2">
						<NavLink to="/cart">Корзина ({cartItemsCount})</NavLink>
					</Nav.Item>
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
