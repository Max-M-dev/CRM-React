import { forwardRef } from "react";
import { useSelector } from "react-redux";

import TableItem from "./itemSelect";
import TableUI from "../../UIKit/table/tableSelect";

const Table = forwardRef(function (props, ref) {
	const { list: clients } = useSelector((state) => state.clients);
	const propsTable = {
		header: ["Клиент", "Компания", "Должность", "Адрес"],
		ref,
	};
	return (
		<TableUI {...propsTable}>
			{clients.map((client) => {
				return (
					<TableItem
						key={client.id}
						idClient={client.id}
						avatar={client.avatar}
						firstName={client.firstName}
						lastName={client.lastName}
						companyName={client.companyName}
						levelInCompany={client.levelInCompany}
						address={client.address}
					/>
				);
			})}
		</TableUI>
	);
});
export default Table;
