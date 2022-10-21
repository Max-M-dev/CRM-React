import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { clients } from "../api";
import { GET_FULL_LIST, INSERT, REMOVE, RELOAD } from "../actions/clients";

const CURRENT_ENTITY_NAME = "clients";
export const getClients = createAsyncThunk(
	`${CURRENT_ENTITY_NAME}/${GET_FULL_LIST}`,
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const response = await clients[GET_FULL_LIST]();
			if (!response.ok) {
				throw new Error("Error in getClients api");
			}
			let listClients = await response.json();
			dispatch(clearRequestStatus());
			dispatch(add(listClients));
		} catch (e) {
			rejectWithValue(e.message);
		}
	}
);

export const insert = createAsyncThunk(
	`${CURRENT_ENTITY_NAME}/${INSERT}`,
	async (data, { dispatch, rejectWithValue }) => {
		try {
			const response = await clients[INSERT](data);
			if (!response.ok) {
				throw new Error(`Error ${INSERT} client`);
			}
			const resultWithServer = await response.json();
			if (resultWithServer.status === "ok") {
				console.log("Add new client");
				dispatch(clearRequestStatus());
				dispatch(reloadClientsList());
			} else {
				console.log("Error, result server:", INSERT, resultWithServer);
			}
		} catch (e) {
			rejectWithValue(e.message);
		}
	}
);

export const removeInServer = createAsyncThunk(
	`${CURRENT_ENTITY_NAME}/${REMOVE}`,
	async (data, { dispatch, rejectWithValue }) => {
		try {
			const response = await clients[REMOVE](data);
			if (!response.ok) {
				throw new Error(`Error ${REMOVE} client`);
			}
			const resultWithServer = await response.json();
			if (resultWithServer.status === "ok") {
				console.log("Remove client");
				dispatch(clearRequestStatus());
				dispatch(remove(data));
			} else {
				console.log("Error", resultWithServer);
			}
		} catch (e) {
			rejectWithValue(e.message);
		}
	}
);

export const reloadClientsList = createAsyncThunk(
	`${CURRENT_ENTITY_NAME}/${RELOAD}`,
	async (_, { getState, dispatch }) => {
		dispatch(clearListClients());
		dispatch(getClients());
		// console.log(getState((state) => state.clients));
	}
);

const initialState = {
	list: [],
	error: null,
	status: null,
	currentAction: null,
};

const clientsSlice = createSlice({
	name: "clients",
	initialState,
	reducers: {
		add(state, action) {
			if (action.payload instanceof Array) {
				state.list = [...state.list, ...action.payload];
			} else {
				state.list.push(action.payload);
			}
		},
		remove(state, action) {
			console.log("REMOVE LOCAL");
			state.list = state.list.filter((client) => {
				return !action.payload.includes(client.id);
			});
			return state;
		},
		clearRequestStatus(state) {
			state.error = null;
			state.status = null;
			state.currentAction = null;
		},
		clearListClients(state) {
			state.list = [];
		},
	},
	extraReducers: {
		[getClients.pending]: (state) => {
			state.status = "pending";
			state.currentAction = GET_FULL_LIST;
		},
		[getClients.fulfilled]: statusFulfilled,
		[getClients.rejected]: statusRejected,

		[insert.pending]: (state) => {
			state.status = "pending";
			state.currentAction = INSERT;
		},
		[insert.fulfilled]: statusFulfilled,
		[insert.rejected]: statusRejected,

		[removeInServer.pending]: (state) => {
			state.status = "pending";
			state.currentAction = REMOVE;
		},
		[removeInServer.fulfilled]: statusFulfilled,
		[removeInServer.rejected]: statusRejected,
	},
});

function statusFulfilled(state) {
	state.status = "fulfilled";
}
function statusRejected(state) {
	state.status = "fulfilled";
}
export const { add, remove, clearRequestStatus, clearListClients } =
	clientsSlice.actions;
export default clientsSlice.reducer;
