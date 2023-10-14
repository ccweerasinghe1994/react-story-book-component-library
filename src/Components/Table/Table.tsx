const Table = () => {
	const row = () => {
		return (
			<tr>
				<td>João</td>
				<td>25</td>
				<td>Desenvolvedor</td>
			</tr>
		);
	};

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Color</th>
					<th>score</th>
				</tr>
			</thead>
			<tbody>{row()}</tbody>
		</table>
	);
};

export default Table;
