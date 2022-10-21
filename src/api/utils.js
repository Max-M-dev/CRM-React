async function response(url, props = {}) {
	return await fetch(url, props);
}
function wrappSchemeForSend(nameAction, data) {
	return {
		action: nameAction,
		payload: data,
	};
}

export { response, wrappSchemeForSend };
