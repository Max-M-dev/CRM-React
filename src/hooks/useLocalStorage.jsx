import { useState } from "react";
export function useLocalStore(key) {
	const [storageData, setStorageDate] = useState(
		JSON.parse(localStorage.getItem(key)) || {}
	);
	function setStorage(value) {
		localStorage.setItem(key, JSON.stringify({ ...storageData, ...value }));
		setStorageDate(value);
	}
	return [storageData, setStorage];
}
