import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_FULL_LIST, INSERT, REMOVE, RELOAD } from "../actions/orders";
import { orders as ordersApi } from "../api";

const CURRENT_ENTITY_NAME = "orders";
const initialState = [];

export const getFullList = createAsyncThunk(
	`${CURRENT_ENTITY_NAME}/${GET_FULL_LIST}`,
	async (_, { dispatch, rejectWithValue }) => {
		console.log("GET_FULL_LIST ORDERS");
		try {
			const response = await ordersApi[GET_FULL_LIST]();
			if (!response.ok) throw new Error("Response not ok!");
			const data = await response.json();
			console.log(data);
		} catch (errorMesage) {
			console.log(`Error orders get full list api`, errorMesage);
		}
	}
);

export const addOrderInServer = createAsyncThunk(
	`${CURRENT_ENTITY_NAME}/${INSERT}`,
	async (data, { dispatch, rejectWithValue }) => {
		const response = await ordersApi[INSERT](data);
	}
);

const orders = createSlice({
	name: "orders",
	initialState,
	reducers: {
		add(state, action) {
			state.push(action.payload);
		},
		remove(state, action) {
			return state.filter((item) => {
				return !action.payload.includes(item.id);
			});
		},
	},
});

export const { remove, add } = orders.actions;
export default orders.reducer;
