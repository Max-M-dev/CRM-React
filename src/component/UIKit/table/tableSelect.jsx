import { forwardRef } from "react";

const Table = forwardRef(function (props, ref) {
	const { header, children } = props;

	return (
		<table ref={ref} className="table select-table">
			<thead>
				<tr>
					<th></th>
					{header.map((item, index) => {
						return <th key={index}>{item}</th>;
					})}
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
});

export default Table;
