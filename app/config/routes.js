var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
		</Route>
	</Router>
);

module.exports = routes;
