import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Routes } from 'react-router-dom';
import Auth from './layout/Auth';
import Main from './layout/Main';
import routes from './routes';
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						{routes.map(route => {
							switch (route.layout) {
								case 'main':
									return (
										<Route exact path={route.path}>
											<Main>
												<route.component />
											</Main>
										</Route>
									);
								case 'auth':
									return (
										<Route exact path={route.path}>
											<Auth>
												<route.component />
											</Auth>
										</Route>
									);
							}
						})}
						<Redirect to="/" />
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
