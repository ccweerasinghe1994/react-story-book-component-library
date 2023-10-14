import { FC } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import {
	ButtonOutlineStyles,
	ButtonProps,
	ButtonSizes,
	ButtonTypeStyles
} from './types';

const Button: FC<ButtonProps> = ({
	children,
	rounded = false,
	outlined,
	type = 'none',
	size = 'medium',
	className,
	onClick,
	...props
}) => {
	const classes = classNames(
		'border font-semibold flex items-center gap-2',
		ButtonTypeStyles[type],
		ButtonSizes[size],
		outlined && ButtonOutlineStyles[type],
		outlined && 'bg-transparent font-bold',
		rounded && 'rounded-full',
		className
	);
	return (
		<button onClick={onClick} {...props} className={twMerge(classes)}>
			{children}
		</button>
	);
};

export default Button;
