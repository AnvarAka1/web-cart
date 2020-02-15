import React from "react";

import { Container } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";

import { connect } from "react-redux";
const Layout = props => {
	return (
		<div>
			<Navbar cartItemsCount={props.cartItemsCount} />
			{/* Categories */}
			<Container className="pt-4">{props.children}</Container>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		cartItemsCount: state.cart.cartItemsCount
	};
};

export default connect(mapStateToProps)(Layout);
