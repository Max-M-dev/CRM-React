import { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeInServer } from "../store/clients";
import listCheckedInTable from "../utils/listCheckedInTable";
import ClientsUI from "./clientsUI";

export default function Clients() {
	const [showBtnAddClient, setShowBtnAddClient] = useState(true);
	const refTable = useRef();
	const dispatch = useDispatch();
	const {
		list: clients,
		status: statusResponseClients,
		error: errorResponseClients,
	} = useSelector((state) => state.clients);

	const handleBtnRemoveClients = useCallback(() => {
		const listTrIsChecked = listCheckedInTable(refTable.current);
		const listIdRemove = listTrIsChecked.map((tr) => +tr.dataset.clientid);
		dispatch(removeInServer(listIdRemove));
		setShowBtnAddClient(true);
	}, [refTable]);

	useEffect(() => {
		if (refTable?.current) {
			const refTableCurrent = refTable.current;
			const handlerChangeBtnAddClient = (event) => {
				if (event.target.tagName !== "INPUT") return;
				setShowBtnAddClient(!listCheckedInTable(refTableCurrent).length);
			};
			refTableCurrent.addEventListener("click", handlerChangeBtnAddClient);
			return () =>
				refTableCurrent.removeEventListener("click", handlerChangeBtnAddClient);
		}
	}, [setShowBtnAddClient, refTable?.current]);

	const isLoading = statusResponseClients === "pending";
	const isError = errorResponseClients !== null;

	const propsForUI = {
		refTable,
		clients,
		showBtnAddClient,
		handleBtnRemoveClients,
		isLoading,
		isError,
	};
	return <ClientsUI {...propsForUI} />;
}
