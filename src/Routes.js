import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Form from "./pages/sample/form/Form.jsx";
import Grid from "./pages/sample/grid/Grid.jsx";

const Routes = () => (
	<div className="layout-main">
		<Route path="/" exact component={Dashboard} />
		<Route path="/form" exact component={Form} />
		<Route path="/grid" exact component={Grid} />
	</div>
);
export default Routes;