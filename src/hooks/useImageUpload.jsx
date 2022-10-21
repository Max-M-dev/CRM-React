import { useState } from "react";
export function useImageUpload(
	defaultValue = "",
	urlDownloadImage,
	urlServerFolderUploadImage
) {
	const [urlImage, setUrlImage] = useState(defaultValue);
	const [error, setError] = useState(null);
	const [statusUpload, setStatusUpload] = useState(null);

	/* INPUT IMAGE UPLOAD */
	const handleImageUpload = async (e) => {
		e.preventDefault();
		const uploadData = e.target?.files[0];
		if (!uploadData) {
			alert("Не выбрали картинку!");
			return;
		}
		const dataForm = new FormData();
		dataForm.append("file", uploadData);
		setStatusUpload("pending");
		try {
			const response = await fetch(urlDownloadImage, {
				method: "POST",
				body: dataForm,
			});
			if (!response.ok) {
				throw new Error("Upload image: Не получилось загрузить страницу");
			} else {
				const responseData = await response.json();
				if (!("file" in responseData)) {
					throw new Error("Upload file: return bad object from server");
				}
				const imageNameInServer = responseData.file;
				setUrlImage(`${urlServerFolderUploadImage}/${imageNameInServer}`);
				setStatusUpload("fulfilled");
			}
		} catch (e) {
			setStatusUpload("reject");
			setError(e.message);
		} finally {
			await new Promise((resolve) => {
				setTimeout(() => resolve(setStatusUpload(null)), 3e3);
			});
		}
	};

	return {
		value: urlImage,
		setValue: setUrlImage,
		statusUpload,
		setStatusUpload,
		handleImageUpload,
		error,
		setError,
	};
}
