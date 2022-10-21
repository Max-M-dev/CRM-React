import { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, getFullList } from "../store/orders";
import listCheckedInTable from "../utils/listCheckedInTable";
import OrderListUI from "./orderListUI.jsx";

export default function OrderList() {
	const [showBtnAdd, setShowBtnAdd] = useState(true);
	const refTable = useRef();

	const dispatch = useDispatch();
	const orders = useSelector((state) => state.orders);
	const { list: clients } = useSelector((state) => state.clients);
	const statusOrderList = useSelector((state) => state.statusOrderList);

	const propsTable = {
		header: ["Дата создания", "Название", "Клиент", "Статус"],
	};

	const handleBtnRemove = useCallback(() => {
		const listTrIsChecked = listCheckedInTable(refTable.current);
		const listIdRemove = listTrIsChecked.map((tr) => +tr.dataset.id);
		dispatch(remove(listIdRemove));
		setShowBtnAdd(true);
	}, [refTable]);

	useEffect(() => {
		dispatch(getFullList());
	});

	useEffect(() => {
		if (refTable?.current) {
			const refTableCurrent = refTable.current;
			const handlerChangeBtnAdd = (event) => {
				if (event.target.tagName !== "INPUT") return;
				setShowBtnAdd(!listCheckedInTable(refTableCurrent).length);
			};
			refTableCurrent.addEventListener("click", handlerChangeBtnAdd);
			return () => {
				refTableCurrent.removeEventListener("click", handlerChangeBtnAdd);
			};
		}
	});

	const propsForUI = {
		orders,
		clients,
		propsTable,
		statusOrderList,
		showBtnAdd,
		handleBtnRemove,
	};
	return <OrderListUI {...propsForUI} ref={refTable} />;
}
