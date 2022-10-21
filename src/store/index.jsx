import { configureStore } from "@reduxjs/toolkit";
import clients from "./clients";
import orders from "./orders";
import statusOrderList from "./statusOrderList";
export const store = configureStore({
	reducer: {
		clients,
		orders,
		statusOrderList,
	},
});
