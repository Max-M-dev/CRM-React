import { hostApiServer, pathNameApi } from "./config";
import { response, wrappSchemeForSend } from "./utils";
import { GET_FULL_LIST, INSERT, REMOVE } from "../actions/clients";
const CURRENT_ENTITY_NAME = "clients";

const clients = {
	[GET_FULL_LIST]: async () => {
		return await response(
			`${hostApiServer}/${pathNameApi}/?action=${CURRENT_ENTITY_NAME}-${GET_FULL_LIST}`
		);
	},
	[INSERT]: async (data) => {
		return await response(`${hostApiServer}/${pathNameApi}`, {
			method: "put",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(
				wrappSchemeForSend(`${CURRENT_ENTITY_NAME}-${INSERT}`, data)
			),
		});
	},
	[REMOVE]: async (id) => {
		console.log("REMOVE IN SERVER", id);
		return await response(`${hostApiServer}/${pathNameApi}`, {
			method: "DELETE",
			headers: {
				contentType: "application/json",
			},
			body: JSON.stringify(
				wrappSchemeForSend(`${CURRENT_ENTITY_NAME}-${REMOVE}`, id)
			),
		});
	},
};

export default clients;
