import { Link } from "react-router-dom";
import { SwitchFade } from "../component/animation";
import Table from "../component/page/clients/table";

export default function ClientsUI(props) {
	const {
		refTable,
		clients,
		showBtnAddClient,
		handleBtnRemoveClients,
		isLoading,
		isError,
	} = props;

	return (
		<div className="col-md-12 grid-margin">
			<div className="card">
				<div className="card-body">
					<div className="d-sm-flex justify-content-between align-items-start">
						<div>
							<h4 className="card-title card-title-dash">Список клиентов</h4>
							<p className="card-subtitle card-subtitle-dash">
								You have 50+ new requests
							</p>
						</div>
						<div>
							<SwitchFade stateValue={showBtnAddClient}>
								<>
									{showBtnAddClient ? (
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
											onClick={handleBtnRemoveClients}
											className="btn btn-outline-danger mb-0 me-0"
											type="button"
										>
											<i className="mdi mdi-account-minus me-1"></i>Удалить
										</button>
									)}
								</>
							</SwitchFade>
						</div>
					</div>

					<div className="table-responsive  mt-1">
						{clients?.length ? (
							<Table ref={refTable} />
						) : isLoading ? (
							<div className="d-flex align-items-center justify-content-center">
								<>
									<strong>Подгружаем данные...</strong>
									<div className="spinner-border"></div>
								</>
							</div>
						) : isError ? (
							<>Ошибка загрузки данных</>
						) : (
							<>
								<div className="d-flex flex-column align-items-center justify-content-center">
									<i className="ti-package icon-lg text-warning"></i>
									<p className="mb-0 ms-1">Список клиентов пуст</p>
									<p className="mb-0 ms-1">
										Но Вы можете <Link to="./add">добавить нового клиента</Link>
									</p>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
