import React from 'react';
import { Redirect } from 'react-router-dom';

const routes = [
	{
		path: '/',
		component: () => <Redirect to="/" />
	}
];

export default routes;
