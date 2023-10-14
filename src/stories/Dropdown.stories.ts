import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../Components/DropDown/DropDown.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Example/Dropdown',
	component: Dropdown,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		inputs: {
			control: 'object',
			description: 'this can be used to override button state',
			defaultValue: [
				{
					label: 'Dropdown 1',
					value: 'Dropdown 1'
				},
				{
					label: 'Dropdown 2',
					value: 'Dropdown 2'
				},
				{
					label: 'Dropdown 3',
					value: 'Dropdown 3'
				}
			]
		},
		value: {
			control: 'object',
			description: 'this can be used to override button state',
			defaultValue: {
				label: 'Dropdown 1',
				value: 'Dropdown 1'
			}
		}
	}
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
	args: {
		inputs: [
			{
				label: 'Dropdown 1',
				value: 'Dropdown 1'
			},
			{
				label: 'Dropdown 2',
				value: 'Dropdown 2'
			},
			{
				label: 'Dropdown 3',
				value: 'Dropdown 3'
			}
		],
		value: {
			label: 'Dropdown 1',
			value: 'Dropdown 1'
		}
	}
};
