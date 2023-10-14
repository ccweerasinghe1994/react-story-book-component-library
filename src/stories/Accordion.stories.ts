import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../Components/Accordion/Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Example/Accordion',
	component: Accordion,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		className: {
			control: 'text',
			description: 'this can be used to override button state',
			defaultValue: ''
		},
		items: {
			control: 'object',
			description: 'this can be used to override button state',
			defaultValue: [
				{
					id: 1,
					label: 'Accordion 1',
					content: 'Accordion 1 content'
				},
				{
					id: 2,
					label: 'Accordion 2',
					content: 'Accordion 2 content'
				},
				{
					id: 3,
					label: 'Accordion 3',
					content: 'Accordion 3 content'
				}
			]
		}
	}
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
	args: {
		className: '',
		items: [
			{
				id: 1,
				label: 'Accordion 1',
				content: 'Accordion 1 content'
			},
			{
				id: 2,
				label: 'Accordion 2',
				content: 'Accordion 2 content'
			},
			{
				id: 3,
				label: 'Accordion 3',
				content: 'Accordion 3 content'
			}
		]
	}
};
