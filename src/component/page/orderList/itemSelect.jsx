import { Link } from "react-router-dom";
export default function TableItem(props) {
	const { id, dateCreate, title, clientName, status } = props;
	return (
		<tr data-id={id}>
			<td>
				<div className="form-check form-check-flat mt-0">
					<label className="form-check-label">
						<input
							type="checkbox"
							className="form-check-input checkbox-client"
							aria-checked="false"
						/>
						<i className="input-helper"></i>
					</label>
				</div>
			</td>
			<td>
				<h6>{dateCreate}</h6>
			</td>
			<td>
				<h6>{title}</h6>
				{/*
		<p>company type</p>
		*/}
			</td>
			<td>
				<h6>{clientName}</h6>
			</td>
			<td>
				<div className={`badge badge-opacity-${status?.prefixClassName}`}>
					{status.label}
				</div>
			</td>
		</tr>
	);
}
