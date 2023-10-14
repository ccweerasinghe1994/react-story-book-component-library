import { FC, useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import classNames from 'classnames';
import { IAccordion } from './types';

const Accordion: FC<IAccordion> = ({ items, className, ...otherProps }) => {
	const [expandedIndex, setExpandedIndex] = useState<number>(-1);
	const classes = classNames(
		'flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer',
		className
	);
	const handleClick = (nextIndex: number) => {
		console.log('stale value', expandedIndex);
		setExpandedIndex((currentExpandedIndex) => {
			console.log('up to date value', currentExpandedIndex);
			if (nextIndex === currentExpandedIndex) {
				return -1;
			} else {
				return nextIndex;
			}
		});
	};
	const itemsToRender = items.map((item, index) => {
		const { id, label, content } = item;
		const isExpanded = index === expandedIndex;
		const icon = (
			<span className={'text-xl'}>
				{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
			</span>
		);

		return (
			<div key={id}>
				<div className={classes} onClick={() => handleClick(index)}>
					{label}
					{icon}
				</div>
				{isExpanded && <div className={'border-b p-5'}>{content}</div>}
			</div>
		);
	});
	return (
		<div {...otherProps} className={'border-x border-t rounded'}>
			{itemsToRender}
		</div>
	);
};

export default Accordion;
