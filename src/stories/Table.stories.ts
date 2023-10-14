import { Meta, StoryObj } from '@storybook/react';
import Table, { TData } from '../Components/Table/Table';
import { configArray, sampleTableData } from '../App';

const meta = {
	title: 'Example/Table',
	component: Table,

	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: {
		items: {
			control: 'object',
			description: 'items to be shown in the table',
			defaultValue: sampleTableData
		},
		config: {
			control: 'object',
			description: 'config for the table'
		}
	}
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
	args: {
		items: sampleTableData,
		config: configArray
	}
};
