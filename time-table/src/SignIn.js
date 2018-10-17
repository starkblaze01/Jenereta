import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const SignIn = (props) => {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<div id="sign-in-page">
						<div className="sign-in">
							<div className="sign-in-title">Sign In</div>
							<br />
							<form className="sign-in-form">
								<div>Email</div>
								<input type="text" className="sign-in-email" />
								<div>Password</div>
								<input type="password" className="sign-in-password" />
								<br />
								<input type="submit" value="Sign In" className="sign-in-button" />
								<input type="button" value="Cancel" className="sign-in-cancel-button" />
							</form>
						</div>
					</div>
				</div>
			</Router>
		</Provider>
	)
};

export default SignIn;