export interface IAccordionValues {
	id: number;
	label: string;
	content: string;
}

export interface IAccordion {
	className?: string;
	items: IAccordionValues[];
}
