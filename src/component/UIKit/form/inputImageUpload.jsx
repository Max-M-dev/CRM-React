import { useRef } from "react";
export default function InputImageUpload(props) {
	const { children, onChange: handleSendImg, ...otherProps } = props;
	const refInput = useRef();
	const openModal = () => refInput.current.click();
	return (
		<>
			<input
				ref={refInput}
				onChange={handleSendImg}
				type="file"
				accept="image/*"
				hidden
			/>
			<button onClick={openModal} type="button" {...otherProps}>
				{children}
			</button>
		</>
	);
}
