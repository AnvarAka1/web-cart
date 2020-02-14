import React, { useState } from "react";

import { Container } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";

const Layout = props => {
	const [ cartItemCount, setCartItemCount ] = useState(0);
	return (
		<div>
			<Navbar items={cartItemCount} />
			{/* Categories */}
			<Container>{props.children}</Container>
		</div>
	);
};

export default Layout;
