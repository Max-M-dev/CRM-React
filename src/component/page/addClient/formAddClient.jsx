import { useCallback, useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insert } from "../../../store/clients";
import { useLocalStore, useInputValidation } from "../../../hooks";
import { useLocation } from "react-router-dom";
import { INSERT } from "../../../actions/clients";

import {
	hostApiServer,
	pathNameUploadFile,
	pathNameUploadFolder,
} from "../../../api/config";
import { useMemo } from "react";
import FormAddClientUI from "./formAddClientUI";
import { useImageUpload } from "../../../hooks/useImageUpload";

export default function FormAddClient() {
	const dispatch = useDispatch();
	const currentLocation = useLocation();
	const clientsState = useSelector((state) => state.clients);
	const refForm = useRef();
	const avatar = useImageUpload(
		"DefStatus",
		`${hostApiServer}/${pathNameUploadFile}`,
		`${hostApiServer}/${pathNameUploadFolder}`
	);
	{
		/* LocalStorage */
	}
	const [storageLocal, setStorageLocal] = useLocalStore(
		`form-${currentLocation.pathname}`
	);

	const firstName = useInputValidation(storageLocal.firstName || "", {
		minlength: 4,
		maxlength: 15,
		required: true,
	});
	const lastName = useInputValidation(storageLocal.lastName || "", {
		minlength: 4,
		maxlength: 15,
		required: true,
	});
	const levelInCompany = useInputValidation(storageLocal.levelInCompany || "", {
		minlength: 4,
		maxlength: 15,
		required: true,
	});
	const companyName = useInputValidation(storageLocal.companyName || "", {
		minlength: 4,
		maxlength: 15,
		required: true,
	});
	const address = useInputValidation(storageLocal.address || "", {
		minlength: 4,
		maxlength: 15,
		required: true,
	});
	const fieldsList = [
		avatar,
		firstName,
		lastName,
		levelInCompany,
		companyName,
		address,
	];
	useEffect(
		() => {
			setStorageLocal({
				avatar: avatar.value,
				firstName: firstName.value,
				lastName: lastName.value,
				levelInCompany: levelInCompany.value,
				companyName: companyName.value,
				address: address.value,
			});
		},
		fieldsList.map((field) => field.value)
	);

	const handleClearForm = useCallback(
		() => {
			fieldsList.forEach((field) => {
				field.setValue("");
			});
		},
		fieldsList.map((field) => field.value)
	);
	const handleAddClient = useCallback(() => {
		const isHaveError =
			fieldsList.filter((field) =>
				"isError" in field ? field.isError() === true : false
			).length > 0;
		if (isHaveError) {
			console.log("Валидацию не прошли");
			return;
		}
		const client = {
			avatar:
				avatar.value ||
				"https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg",
			firstName: firstName.value,
			lastName: lastName.value,
			levelInCompany: levelInCompany.value,
			companyName: companyName.value,
			address: address.value,
		};
		dispatch(insert(client));
		handleClearForm();
	}, [firstName, lastName, levelInCompany, companyName, address, avatar]);

	const showLoadingAddClient =
		clientsState.currentAction === INSERT && clientsState.status === "pending"
			? true
			: false;
	const propsForUI = {
		avatar,
		firstName,
		lastName,
		companyName,
		levelInCompany,
		address,

		showLoadingAddClient,
		refForm,

		handleAddClient,
		handleClearForm,
	};
	return <FormAddClientUI {...propsForUI} />;
}
