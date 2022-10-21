export default function listCheckedInTable(table) {
	const listTrIsChecked = [...table.querySelectorAll("tr")].filter((tr) => {
		return tr.querySelector("input:checked");
	});
	return listTrIsChecked;
}
