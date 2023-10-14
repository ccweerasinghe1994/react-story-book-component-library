import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from '../Components/Paragraph/Paragraph';

const meta: Meta<typeof Paragraph> = {
	title: 'Example/Paragraph',
	component: Paragraph,
	argTypes: {
		children: {
			control: 'text',
			description: 'text to show i',
			defaultValue: 'Hello World'
		}
	}
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
	args: {
		children: 'Hello World'
	}
};
