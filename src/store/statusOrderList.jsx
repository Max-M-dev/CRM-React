import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	active: { label: "Активный", prefixClassName: "info", value: "active" },
	process: {
		label: "В процессе",
		prefixClassName: "warning",
		value: "process",
	},
	end: { label: "Завершен", prefixClassName: "success", value: "end" },
};

const statusOrderList = createSlice({
	name: "statusList",
	initialState,
	reducers: {},
});

export default statusOrderList.reducer;
