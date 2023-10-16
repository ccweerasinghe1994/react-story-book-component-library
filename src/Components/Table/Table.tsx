import {FC, Fragment, ReactNode} from 'react';

export interface TData {
	key: string;
	[key: string]: any;
}

export type TTableConfig = {
	label: string;
	render?: (item: TData) => ReactNode;
	header?: (label: string) => ReactNode;
	sortValue?:(item: TData) => string|number;
};
export type TTableProps = {
	items: Array<TData>;
	config: Array<TTableConfig>;
};

export type Test<T> =Record<string, T>



const Table: FC<TTableProps> = ({ items, config }) => {
	const renderRow = (item: TData) => {
		return config.map(({ label, render }) => (
			<td className="p-3" key={label}>
				{render ? render(item) : item[label]}
			</td>
		));
	};

	const renderRows = items.map((item) => (
		<tr className="border-b" key={item.key}>
			{renderRow(item)}
		</tr>
	));

	const renderHeaders = config.map(({ label,header }) => {

		if (header){
			return (
				<Fragment key={label}>
					{header(label)}
				</Fragment>
			)
		}

		return (
			<th key={label}>{label}</th>
		)
	});

	return (
		<table className="table-auto border-spacing-2">
			<thead>
				<tr className="border-b-2">{renderHeaders}</tr>
			</thead>
			<tbody>{renderRows}</tbody>
		</table>
	);
};

export default Table;
