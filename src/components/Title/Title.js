import React from "react";
import { Row } from "react-bootstrap";
import Header from "../UI/Header/Header";
const title = ({ children }) => {
	return (
		<Row className="mt-4 mb-4">
			<Header h={3}>{children}</Header>
		</Row>
	);
};

export default title;
