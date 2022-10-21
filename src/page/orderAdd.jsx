import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocalStore } from "../hooks/useLocalStorage";

import DatePicker from "react-datepicker";
import Select from "react-select";
import "../component/UIKit/datapicker/react-datepicker.css";

import { add } from "../store/orders";
import { useLocation } from "react-router-dom";

export default function OrderAdd() {
	const { list: clients } = useSelector((store) => store.clients);
	const statusOrderList = useSelector((store) => store.statusOrderList);
	const [showButtonAdd, setShowButtonAdd] = useState(false);
	const dispatch = useDispatch();
	const currentLocation = useLocation();
	const options = clients.map((client) => ({
		value: client.id,
		label: `${client.firstName} ${client.lastName}`,
	}));
	const optionsStatus = Object.values(statusOrderList);
	const customStyles = {
		control: (provided, state) => ({
			...provided,
			minHeight: "auto",
			border: "1px solid #dee2e6",
			borderRadius: "4px",
			height: "2rem",
			fontSize: "0.875rem",
			fontWeight: 400,
			lineHeight: 1,
			color: "#212529",
			backgroundColor: "white",
			backgroundClip: "padding-box",
			transition:
				"border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
		}),
	};
	function parseDate(date) {
		if (date instanceof String && date !== "") {
			return Date.parse(date);
		}
		return null;
	}
	const [storageLocal, setStorageLocal] = useLocalStore(
		`form-${currentLocation.pathname}`
	);
	const [stateForm, setStateForm] = useState({
		dateStart: parseDate(storageLocal?.dateStart) || +new Date(),
		dateEnd: parseDate(storageLocal?.dateEnd) || +new Date(),
		idClient: storageLocal?.idClient || null,
		status: storageLocal?.status || optionsStatus[0],
		title: storageLocal?.title,
		comment: storageLocal?.comment,
	});
	useEffect(() => {
		setStorageLocal(stateForm);
	}, [stateForm]);

	const clearForm = useCallback(() => {
		const emptyStateForm = {};
		Object.keys(stateForm).forEach((key) => {
			emptyStateForm[key] = "";
		});
		setStateForm(emptyStateForm);
	}, [stateForm]);

	const handlerClearForm = useCallback(() => {
		clearForm();
	});

	const handlerBtnAdd = useCallback(() => {
		const newOrder = {
			id: Date.now(),
			...stateForm,
			idClient: stateForm.idClient.value,
			status: stateForm.status,
		};
		dispatch(add(newOrder));
		clearForm();
	}, [stateForm, clearForm]);

	const disabledButtonAdd = () => {
		const listValuesForm = Object.values(stateForm);
		const countEmptyValue = listValuesForm.filter((value) => {
			return !!value === false;
		}).length;
		const isEmptyFields = !!countEmptyValue;
		setShowButtonAdd(!isEmptyFields);
	};
	useEffect(disabledButtonAdd, [stateForm]);

	return (
		<div className="col-md-12 grid-margin">
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">Добавить заказ</h4>
					<form className="form-sample">
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>Дата создания:</label>
									<DatePicker
										id="dateStart"
										dateFormat="yyyy-MM-d"
										className="form-control"
										selected={stateForm.dateStart}
										onChange={(date) =>
											setStateForm({
												...stateForm,
												dateStart: Date.parse(date),
											})
										}
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label>Дата окончания:</label>
									<DatePicker
										id="dateEnd"
										dateFormat="yyyy-MM-d"
										className="form-control"
										selected={stateForm.dateEnd}
										onChange={(date) =>
											setStateForm({ ...stateForm, dateEnd: Date.parse(date) })
										}
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>Заказчик:</label>
									<Select
										id="idClient"
										styles={customStyles}
										options={options}
										value={stateForm.idClient}
										onChange={(val) =>
											setStateForm({ ...stateForm, idClient: val })
										}
										placeholder="Выберите клиента"
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label htmlFor="title">Название заказа</label>
									<input
										type="text"
										className="form-control"
										id="title"
										placeholder="Название заказа"
										value={stateForm.title}
										onChange={(e) =>
											setStateForm({
												...stateForm,
												title: e.target.value,
											})
										}
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>Статус заказа</label>
									<Select
										id="status"
										value={stateForm.status}
										onChange={(value) =>
											setStateForm({ ...stateForm, status: value })
										}
										styles={customStyles}
										options={optionsStatus}
										placeholder="Выберите статус"
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="form-group">
									<label htmlFor="comment">Комментарий</label>
									<textarea
										style={{ height: "auto" }}
										className="form-control"
										id="comment"
										rows="10"
										value={stateForm.comment}
										onChange={(e) =>
											setStateForm({
												...stateForm,
												comment: e.target.value,
											})
										}
									></textarea>
								</div>
							</div>
						</div>

						<button
							type="button"
							disabled={!showButtonAdd}
							className={`btn me-3 ${
								showButtonAdd ? "btn-success" : "btn-secondary"
							}`}
							onClick={handlerBtnAdd}
						>
							Добавить
						</button>

						<button
							type="button"
							className="btn btn-primary"
							onClick={handlerClearForm}
						>
							Очистить
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
