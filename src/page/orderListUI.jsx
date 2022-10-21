import { forwardRef } from "react";
import { Link } from "react-router-dom";
import TableItem from "../component/page/orderList/itemSelect";
import TableUI from "../component/UIKit/table/tableSelect";
import timestampToDate from "../utils/timestampToDate";

function getClientNameById(id, clients) {
	const client = getClientById(id, clients);
	if (client === null) return null;
	return `${client.firstName} ${client.lastName}`;
}
function getClientById(id, clients) {
	for (let client of clients) {
		if (client.id === id) return client;
	}
	return null;
}

const OrderListUI = forwardRef((props, ref) => {
	const {
		showBtnAdd,
		handleBtnRemove,
		propsTable,
		orders,
		clients,
		statusOrderList,
	} = props;
	return (
		<div className="col-md-12 grid-margin">
			<div className="card">
				<div className="card-body">
					<div className="d-sm-flex justify-content-between align-items-start">
						<div>
							<h4 className="card-title card-title-dash">Список заказов</h4>
							<p className="card-subtitle card-subtitle-dash">
								You have 50+ new requests
							</p>
						</div>
						<div>
							{showBtnAdd ? (
								<Link to="./add">
									<button
										className="btn btn-outline-info mb-0 me-0"
										type="button"
									>
										<i className="mdi mdi-account-plus me-1"></i>Добавить
									</button>
								</Link>
							) : (
								<button
									onClick={handleBtnRemove}
									className="btn btn-outline-danger mb-0 me-0"
									type="button"
								>
									<i className="mdi mdi-account-minus me-1"></i>Удалить
								</button>
							)}
						</div>
					</div>
					<div className="table-responsive  mt-1">
						<TableUI {...propsTable} ref={ref}>
							{orders.map((order) => {
								return (
									<TableItem
										key={order.id}
										id={order.id}
										dateCreate={timestampToDate(order.dateStart)
											.slice(0, 3)
											.join("-")}
										title={order.title}
										clientName={getClientNameById(order.idClient, clients)}
										status={statusOrderList[order.status.value]}
									/>
								);
							})}
						</TableUI>
					</div>
				</div>
			</div>
		</div>
	);
});

export default OrderListUI;
