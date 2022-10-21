import { useState } from "react";
// [name,setName,isErrorName] = useInputValidation("Alex",{maxlength:15,minlength:5,requ})
export function useInputValidation(initialValue = null, validAttributes = {}) {
	const [value, setValue] = useState(initialValue);
	const [error, setError] = useState();
	const onBlur = (element) => {
		isError();
		/* if (isError()) {
			element.target.style = "border:1px solid red";
			console.log(error);
		} else {
			element.target.style = "";
		} */
	};
	const isError = () => {
		const listErrorMessage = Object.keys(validAttributes)
			.map((key) => {
				return isValid(key, validAttributes[key], value).errorMessage;
			})
			.filter((resultIsValid) => resultIsValid !== undefined);
		setError(listErrorMessage);
		return Boolean(listErrorMessage.length);
	};
	return { value, setValue, isError, error, onBlur };
}

function isMaxLength(currentValue, withValue) {
	return currentValue > withValue ? true : false;
}
function isMinLength(currentValue, withValue) {
	return currentValue < withValue ? true : false;
}

function isValid(nameAttributes, valueAttributes, valueForm) {
	let valid = true,
		errorMessage;
	switch (nameAttributes) {
		case "maxlength":
			let isMaxLengthResult = isMaxLength(valueForm.length, valueAttributes);
			if (isMaxLengthResult === true) {
				valid = false;
				errorMessage = "Превышено количество символов.";
			}
			break;
		case "minlength":
			let isMinLengthResult = isMinLength(valueForm.length, valueAttributes);
			if (isMinLengthResult === true) {
				valid = false;
				errorMessage = "Количество символов меньше, чем положено.";
			}
			break;
		case "required":
			if (valueForm.length === 0 || valueForm === "") {
				valid = false;
				errorMessage = "Это поле обязательное.";
			}
			break;
		default:
			break;
	}
	return { valid, errorMessage };
}
