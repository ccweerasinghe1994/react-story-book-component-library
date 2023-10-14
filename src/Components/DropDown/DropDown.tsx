import { FC, useEffect, useRef, useState } from 'react';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';
import Panel from '../Panel/Panel';
import { IDropDownInputs, IDropDownProps } from './types';

const DropDown: FC<IDropDownProps> = ({ inputs, value, onChange }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const divEl = useRef<null | HTMLDivElement>(null);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	const handleClickOption = (option: IDropDownInputs) => {
		setIsOpen(false);
		onChange(option);
	};
	useEffect(() => {
		const handler = (event: MouseEvent) => {
			if (!divEl.current) {
				return;
			}
			if (!divEl.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handler, true);

		return () => {
			document.removeEventListener('click', handler);
		};
	}, []);
	const options = inputs.map((item) => (
		<div onClick={() => handleClickOption(item)} key={item.value}>
			{item.label}
		</div>
	));
	return (
		<div ref={divEl} className={'w-48 relative'}>
			<Panel
				className={'flex justify-between items-center cursor-pointer'}
				onClick={handleClick}
			>
				{value?.label || 'Select ...'}
				{isOpen ? (
					<GoChevronRight className={'text-2xl'} />
				) : (
					<GoChevronDown className={'text-2xl'} />
				)}
			</Panel>
			{isOpen && (
				<Panel className={'absolute top-full  cursor-pointer '}>
					{options}
				</Panel>
			)}
		</div>
	);
};

export default DropDown;
