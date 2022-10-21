export default function removeSelectedRecordsInTable(ref, dispatchRemove) {
	const refTableCurrent = ref.current;
	const trIsChecked = [...refTableCurrent.querySelectorAll("tr")].filter(
		(tr) => {
			return tr.querySelector("input:checked");
		}
	);
	const listIdRemove = trIsChecked.map((tr) => +tr.dataset.clientid);
	dispatchRemove(listIdRemove);
}
