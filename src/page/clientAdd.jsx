import FormAddClient from "../component/page/addClient/formAddClient";
export default function AddClient() {
	return (
		<div className="col-md-12 grid-margin">
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">Добавить клиента</h4>
					<FormAddClient />
				</div>
			</div>
		</div>
	);
}
