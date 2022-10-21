import { useRouteError } from "react-router-dom";
export default function NotFount() {
	const error = useRouteError();
	console.error(error);
	return (
		<>
			<div>
				Ooops!..
				<p>{error.statusText || error.message}</p>
			</div>
		</>
	);
}
