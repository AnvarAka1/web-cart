import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter, Switch, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";

import ProductsPage from "./containers/ProductsPage/ProductsPage";
function App() {
	const routes = (
		<Switch>
			<Route path="/" component={ProductsPage} />
		</Switch>
	);
	return <Layout>{routes}</Layout>;
}

export default withRouter(App);
