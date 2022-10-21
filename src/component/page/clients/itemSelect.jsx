import { Link } from "react-router-dom";
export default function TableItem(props) {
	const {
		idClient,
		avatar,
		firstName,
		lastName,
		companyName,
		levelInCompany,
		address,
	} = props;
	return (
		<tr data-clientid={idClient}>
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
				<Link to={`./${idClient}`}>
					<div className="d-flex ">
						<img src={avatar} alt="" />
						<div>
							<h6>
								{firstName} {lastName}
							</h6>
							<p>{levelInCompany}</p>
						</div>
					</div>
				</Link>
			</td>
			<td>
				<h6>{companyName}</h6>
				{/*
		<p>company type</p>
		*/}
			</td>
			<td>
				<h6>{levelInCompany}</h6>
			</td>
			<td>
				<h6>{address}</h6>
				{/*
		<p>company type</p>
		*/}
			</td>
		</tr>
	);
}
