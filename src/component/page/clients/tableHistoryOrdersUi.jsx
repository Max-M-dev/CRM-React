export default function TableHistoryOrdersUi(props) {
	const { header, body } = props;
	return (
		<table className="table table-hover">
			<thead>
				<tr>
					{header.map((title) => {
						return <th>{title}</th>;
					})}
				</tr>
			</thead>
			<tbody>
				{body.map((item) => (
					<tr>
						{item.map((data) => (
							<td>{data}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
