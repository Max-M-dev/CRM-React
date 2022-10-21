import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import "./style/style.css";
import reportWebVitals from "./reportWebVitals";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { getClients } from "./store/clients";

function InitialData({ children }) {
	const isLoad = useRef(false);
	const dispatch = useDispatch();
	useEffect(() => {
		if (isLoad.current === false) {
			isLoad.current = true;
			dispatch(getClients());
		}
	}, []);
	return <>{children}</>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<InitialData>
				<Router />
			</InitialData>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
