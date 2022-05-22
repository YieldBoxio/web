import { Provider } from 'react-redux';
// import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import Auth from './layout/Auth';
// import Main from './layout/Main';
// import routes from './routes';
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css"
import MainRoutes from './routes/MainRoutes';

function App() {
	return (
		<>
			<Provider store={store}>
				<MainRoutes />
			</Provider>
		</>
	);
}

export default App;
