import { FC, ReactNode } from 'react';

export type HeaderProps = {
	level?: number;
	children: string;
};
const Heading: FC<HeaderProps> = ({ children, level, ...restOfTheProps }) => {
	const levels = new Set([1, 2, 3, 4, 5, 6]);
	let Element = 'h1';

	if (levels.has(level)) {
		Element = `h${level}`;
	}

	return <Element {...restOfTheProps}>{children}</Element>;
};

export default Heading;
