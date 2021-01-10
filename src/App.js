import React from 'react';
import MomentUtils from '@date-io/moment';
import history from '@history';
import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { create } from 'jss';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
import Provider from 'react-redux/es/components/Provider';
import { Router } from 'react-router-dom';
import AppContext from './AppContext';
import routes from './Roots';
// import store from './store';

const jss = create({
	...jssPreset(),
	plugins: [...jssPreset().plugins, jssExtend(), rtl()],
	insertionPoint: document.getElementById('jss-insertion-point')
});

const generateClassName = createGenerateClassName();

const App = () => {
	return (
		<AppContext.Provider
			value={{
				routes
			}}
		>
			<StylesProvider jss={jss} generateClassName={generateClassName}>
				{/* <Provider store={store}> */}
				{/*	<MuiPickersUtilsProvider utils={MomentUtils}> */}
				{/*		<Router history={history} /> */}
				{/*	</MuiPickersUtilsProvider> */}
				{/* </Provider> */}
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<Router history={history} />
				</MuiPickersUtilsProvider>
			</StylesProvider>
		</AppContext.Provider>
	);
};

export default App;
