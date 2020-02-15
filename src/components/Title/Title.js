import React from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../UI/Header/Header";
const title = ({ children }) => {
	return (
		<Row className="mb-4">
			<Col>
				<Header h={3}>{children}</Header>
			</Col>
		</Row>
	);
};

export default title;
