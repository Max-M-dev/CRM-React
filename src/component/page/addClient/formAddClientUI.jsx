import InputImageUpload from "../../UIKit/form/inputImageUpload";
import PropTypes from "prop-types";

import { SwitchFade } from "../../animation";

function inputForm(title, objInpParam) {
	return (
		<>
			<label className="col-sm-3 col-form-label">{title}</label>
			<div className="col-sm-9">
				<input
					type="text"
					className="form-control"
					placeholder={title}
					{...objInpParam}
				/>
				<p className="text-danger error-input">{objInpParam.errormessage}</p>
			</div>
		</>
	);
}

function FormAddClientUI(props) {
	const {
		avatar,
		firstName,
		lastName,
		companyName,
		levelInCompany,
		address,
		showLoadingAddClient,
		handleAddClient,
		handleClearForm,
		refForm,
	} = props;
	return (
		<form ref={refForm} className="form-sample">
			<p className="card-description">Персональная информация</p>
			<div className="row">
				<div className="col-md-12">
					<div className="form-group row">
						<InputImageUpload
							className={`btn ${
								avatar.statusUpload === "reject"
									? "Ошибка загрузки"
									: avatar.statusUpload === "fulfilled"
									? "btn-success"
									: "btn-outline-info"
							}`}
							onChange={avatar.handleImageUpload}
						>
							<SwitchFade stateValue={avatar.statusUpload}>
								<span>
									{avatar.statusUpload === "reject"
										? "Ошибка загрузки"
										: avatar.statusUpload === "fulfilled"
										? "Изображние загружено удачно!"
										: avatar.value?.length !== ""
										? "Загрузить новую фотографию клиента"
										: "Загрузить фотографию клиента"}
								</span>
							</SwitchFade>
						</InputImageUpload>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<div className="form-group row">
						{inputForm("Имя", {
							value: firstName.value,
							onChange: (e) => firstName.setValue(e.target.value),
							onBlur: firstName.onBlur,
							errormessage:
								firstName?.error instanceof Array
									? firstName.error.join(" ")
									: "",
						})}
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group row">
						{inputForm("Фамилия", {
							value: lastName.value,
							onChange: (e) => lastName.setValue(e.target.value),
							onBlur: lastName.onBlur,
							errormessage:
								lastName?.error instanceof Array
									? lastName.error.join(" ")
									: "",
						})}
					</div>
				</div>
			</div>
			<p className="card-description">Информация о кампании</p>
			<div className="row">
				<div className="col-md-6">
					<div className="form-group row">
						{inputForm("Название компании", {
							value: companyName.value,
							onChange: (e) => companyName.setValue(e.target.value),
							onBlur: companyName.onBlur,
							errormessage:
								companyName?.error instanceof Array
									? companyName.error.join(" ")
									: "",
						})}
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group row">
						{inputForm("Должность", {
							value: levelInCompany.value,
							onChange: (e) => levelInCompany.setValue(e.target.value),
							onBlur: levelInCompany.onBlur,
							errormessage:
								levelInCompany?.error instanceof Array
									? levelInCompany.error.join(" ")
									: "",
						})}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
					<div className="form-group row">
						{inputForm("Адрес", {
							value: address.value,
							onChange: (e) => address.setValue(e.target.value),
							onBlur: address.onBlur,
							errormessage:
								address?.error instanceof Array ? address.error.join(" ") : "",
						})}
					</div>
				</div>
			</div>
			{showLoadingAddClient ? (
				<button type="button" disabled={true} className="btn me-3">
					<span className="spinner-border spinner-border-sm"></span>
				</button>
			) : (
				<button
					type="button"
					onClick={handleAddClient}
					className="btn me-3 btn-success"
				>
					Добавить
				</button>
			)}
			<button onClick={handleClearForm} type="button" className="btn btn-info">
				Очистить форму
			</button>
		</form>
	);
}
export default FormAddClientUI;
/* 
const schemeAllInputPropTypes = {
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
};
const schemeInputPropTypes = {
	...schemeAllInputPropTypes,
	onBlur: PropTypes.func.isRequired,
	error: PropTypes.arrayOf(PropTypes.string),
};
const schemeAvatarPropTypes = {
	...schemeAllInputPropTypes,
	statusUpload: PropTypes.oneOf([null, "fulfilled", "reject", "pending"]),
};
export default FormAddClientUI.propTypes = {
	firstName: PropTypes.shape(schemeAvatarPropTypes).isRequired,
	firstName: PropTypes.shape(schemeInputPropTypes).isRequired,
	lastName: PropTypes.shape(schemeInputPropTypes).isRequired,
	companyName: PropTypes.shape(schemeInputPropTypes).isRequired,
	levelInCompany: PropTypes.shape(schemeInputPropTypes).isRequired,
	address: PropTypes.shape(schemeInputPropTypes).isRequired,

	showLoadingAddClient: PropTypes.bool.isRequired,

	handleClearForm: PropTypes.func.isRequired,
	handleAddClient: PropTypes.func.isRequired,
	handleImageUpload: PropTypes.func.isRequired,
};
 */
