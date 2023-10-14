import { FC } from 'react';

export type TParagraphProps = {
	children: React.ReactNode;
};

const Paragraph: FC<TParagraphProps> = ({ children }) => {
	return <p>{children}</p>;
};

export default Paragraph;
