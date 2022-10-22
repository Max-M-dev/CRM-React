import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_FULL_LIST, INSERT, REMOVE, RELOAD } from "../actions/orders";
import { orders as ordersApi } from "../api";
import { useSelector } from "react-redux";

const CURRENT_ENTITY_NAME = "orders";
const initialState = [];

export const getFullList = createAsyncThunk(
	`${CURRENT_ENTITY_NAME}/${GET_FULL_LIST}`,
	async (_, { getState, dispatch, rejectWithValue }) => {
		console.log("GET_FULL_LIST ORDERS");
		try {
			const response = await ordersApi[GET_FULL_LIST]();
			if (!response.ok) throw new Error("Response not ok!");
			const data = await response.json();
			console.log(getState());
			data.map((item) => {
				item.status = getState().statusOrderList[item.status] || "";
			});
			console.log(data);
			dispatch(add(data));
		} catch (error) {
			console.log(`Error => get full list api:`, error.message);
		}
	}
);

export const addOrderInServer = createAsyncThunk(
	`${CURRENT_ENTITY_NAME}/${INSERT}`,
	async (data, { dispatch, rejectWithValue }) => {
		try {
			const response = await ordersApi[INSERT](data);
			if (!response.ok) throw new Error("Response addOrderInServer is not ok");
		} catch (error) {
			console.log(`Error:`, error.message);
		}
	}
);

const orders = createSlice({
	name: "orders",
	initialState,
	reducers: {
		add(state, action) {
			if (action.payload instanceof Array) {
				return (state = [...state, ...action.payload]);
			} else {
				state.push(action.payload);
			}
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
