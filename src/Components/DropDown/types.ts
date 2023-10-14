export interface IDropDownInputs {
	label: string;
	value: string;
}

export interface IDropDownProps {
	inputs: IDropDownInputs[];
	value: IDropDownInputs | null;
	onChange: (selectItem: IDropDownInputs) => void;
}
