import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Form from "./pages/sample/form/Form.jsx";
import Grid from "./pages/sample/grid/Grid.jsx";
import Changes from "./pages/Changes.jsx";

import Chart from './pages/trashcomponents/ChartsDemo.js';
import Empty from './pages/trashcomponents/EmptyPage.js';
import FormsDemo from './pages/trashcomponents/FormsDemo.js';
import MenusDemo from './pages/trashcomponents/MenusDemo.js';
import PanelsDemo from './pages/trashcomponents/PanelsDemo.js';
import SampleDemo from './pages/trashcomponents/SampleDemo.js';
// import MessagesDemo from './pages/trashcomponents/MessagesDemo.js';
// import DashboardDemo from './pages/trashcomponents/DashboardDemo.js';
// import OverlaysDemo from './pages/trashcomponents/OverlaysDemo.js';

const Routes = () => (
	<div className="layout-main">
		<Route path="/" exact component={Dashboard} />
		<Route path="/form" exact component={Form} />
		<Route path="/grid" exact component={Grid} />
		<Route path="/changes" exact component={Changes} />

		{/* <Route path="/dashboard" exact component={DashboardDemo} /> */}
		<Route path="/charts" exact component={Chart} />
		<Route path="/forms" exact component={FormsDemo} />
		<Route path="/menus" exact component={MenusDemo} />
		
		{/* <Route path="/messages" exact component={MessagesDemo} /> */}
		{/* <Route path="/overlay" exact component={OverlaysDemo} /> */}
		<Route path="/panels" exact component={PanelsDemo} />
		<Route path="/samples" exact component={SampleDemo} />
		<Route path="/menus" exact component={MenusDemo} />
		<Route path="/menus" exact component={MenusDemo} />



		<Route path="/empty-page" exact component={Empty} />
	</div>
);
export default Routes;