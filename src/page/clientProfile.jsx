import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

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

	const currentClient = clients.filter((client) => {
		return client.id === +idClientUrlParams;
	})[0];

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
										<table className="table table-hover">
											<thead>
												<tr>
													<th>User</th>
													<th>Product</th>
													<th>Sale</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Jacob</td>
													<td>Photoshop</td>
													<td className="text-danger">
														{" "}
														28.76% <i className="ti-arrow-down"></i>
													</td>
													<td>
														<label className="badge badge-danger">
															Pending
														</label>
													</td>
												</tr>
												<tr>
													<td>Messsy</td>
													<td>Flash</td>
													<td className="text-danger">
														{" "}
														21.06% <i className="ti-arrow-down"></i>
													</td>
													<td>
														<label className="badge badge-warning">
															In progress
														</label>
													</td>
												</tr>
												<tr>
													<td>John</td>
													<td>Premier</td>
													<td className="text-danger">
														{" "}
														35.00% <i className="ti-arrow-down"></i>
													</td>
													<td>
														<label className="badge badge-info">Fixed</label>
													</td>
												</tr>
												<tr>
													<td>Peter</td>
													<td>After effects</td>
													<td className="text-success">
														{" "}
														82.00% <i className="ti-arrow-up"></i>
													</td>
													<td>
														<label className="badge badge-success">
															Completed
														</label>
													</td>
												</tr>
												<tr>
													<td>Dave</td>
													<td>53275535</td>
													<td className="text-success">
														{" "}
														98.05% <i className="ti-arrow-up"></i>
													</td>
													<td>
														<label className="badge badge-warning">
															In progress
														</label>
													</td>
												</tr>
											</tbody>
										</table>
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
