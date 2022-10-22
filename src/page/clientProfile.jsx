import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";

import { ORDERS as orderPathName } from "../constants/router";
import TableHistoryOrdersUi from "../component/page/clients/tableHistoryOrdersUi";
import Status from "../component/UIKit/table/status";

function ClientCardInfo({
	avatar,
	firstName,
	lastName,
	levelInCompany,
	address,
	companyName,
}) {
	return (
		<>
			<h4 className="display-3">
				Клиент {firstName} {lastName}
			</h4>
			<div className="row">
				<div className="col-md-6">
					<img src={avatar} />
				</div>
				<div className="col-md-6">
					{InfoLineInClient("Должность", levelInCompany)}
					{InfoLineInClient("Компания", companyName)}
					{InfoLineInClient("Адрес", address)}
				</div>
			</div>
		</>
	);
}

function InfoLineInClient(title, value) {
	return (
		<p>
			<span className="fw-bold">{title}: </span>
			{value}
		</p>
	);
}
export default function ClientProfile(props) {
	const { id: idClientUrlParams } = useParams();
	const { list: clients } = useSelector((state) => state.clients);
	const orders = useSelector((state) => state.orders);

	const currentClient = clients.filter((client) => {
		return client.id === +idClientUrlParams;
	})[0];
	const currentCustomerOrders = orders.filter((order) => {
		return order.idClient === +idClientUrlParams;
	});
	const isHaveCurrentCustemerOrders = !!currentCustomerOrders.length;
	let propsTableHistoryOrdersUi;
	if (isHaveCurrentCustemerOrders) {
		const dataForTable = currentCustomerOrders.map((order) => {
			return [
				order.dateStart,
				<Link to={`/${orderPathName}/${order.id}`}>{order.title}</Link>,
				<Status key={order.id} value={order.status.value} />,
			];
		});

		propsTableHistoryOrdersUi = {
			header: ["Дата создания", "Название", "Статус"],
			body: dataForTable,
		};
	}

	return (
		<div className="col-md-12 grid-margin">
			<div className="card">
				{!currentClient ? (
					<>Запись не найдена</>
				) : (
					<div className="card-body">
						<ClientCardInfo {...currentClient} />
						<div className="row">
							<div className="col-md-12 grid-margin stretch-card">
								<div className="card-body">
									<h4 className="card-title">История заказов</h4>
									<div className="table-responsive">
										{isHaveCurrentCustemerOrders ? (
											<TableHistoryOrdersUi {...propsTableHistoryOrdersUi} />
										) : (
											<>Записей еще нет</>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
