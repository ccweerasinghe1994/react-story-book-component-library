import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps {
	children?: ReactNode;
	rounded?: boolean;
	outlined?: boolean;
	type?:
		| 'primary'
		| 'secondary'
		| 'danger'
		| 'success'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark'
		| 'link'
		| 'none';
	size?: 'small' | 'medium' | 'large';
}

enum ButtonOutlineTextColors {
	primary = 'text-blue-800',
	secondary = 'text-blue-600',
	danger = 'text-red-800 ',
	success = 'text-green-800 ',
	warning = 'text-yellow-800 ',
	info = 'text-blue-400 ',
	light = 'text-gray-400 ',
	dark = 'text-gray-800 ',
	link = 'text-slate-900',
	none = 'text-black text-neutral-1'
}

enum ButtonOutlineBackgroundColors {
	primary = 'bg-blue-800 border-blue-800',
	secondary = 'bg-blue-600 border-blue-600',
	danger = 'bg-red-800 border-red-800',
	success = 'bg-green-800 border-green-800',
	warning = 'bg-yellow-800 border-yellow-800',
	info = 'bg-blue-400 border-blue-400',
	light = 'bg-gray-400 border-gray-400',
	dark = 'bg-gray-800 border-gray-800',
	link = 'bg-transparent border-2',
	none = 'bg-transparent'
}

enum ButtonSizes {
	small = 'text-sm px-3 py-2',
	medium = 'text-base px-4 py-2',
	large = 'text-lg px-6 py-3'
}

const Button: FC<ButtonProps> = ({
	children,
	rounded,
	outlined,
	type = 'none',
	size = 'medium'
}) => {
	const classes = classNames(
		{
			'border px-4 py-2': true,
			'bg-transparent border-transparent text-slate-900 underline':
				type === 'link',
			'bg-transparent font-bold ': outlined,
			'rounded-full': rounded,
			'text-white': !outlined && type !== 'link' && type !== 'none'
		},
		ButtonSizes[size],
		ButtonOutlineBackgroundColors[type],
		outlined && ButtonOutlineTextColors[type]
	);
	return <button className={classes}>{children}</button>;
};

export default Button;
