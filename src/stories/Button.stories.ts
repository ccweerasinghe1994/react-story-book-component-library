import type { Meta, StoryObj } from '@storybook/react';

import Button from '../Components/Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Example/Button',
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		children: { control: 'text' },
		rounded: {
			control: 'boolean',
			description: 'this can be used to make the button rounded',
			defaultValue: false
		},
		type: {
			control: 'select',
			options: [
				'primary',
				'secondary',
				'none',
				'danger',
				'warning',
				'success',
				'info',
				'light',
				'dark',
				'link'
			]
		},
		size: {
			control: 'inline-radio',
			options: ['small', 'medium', 'large']
		},
		className: {
			control: 'text',
			description: 'this can be used to override button state',
			defaultValue: ''
		}
		// backgroundColor: { control: 'color' }
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
	args: {
		outlined: false,
		type: 'none',
		children: 'Button Text',
		rounded: false,
		size: 'medium'
	}
};

export const Primary: Story = {
	args: {
		outlined: false,
		type: 'primary',
		children: 'Button Text',
		rounded: false,
		size: 'medium'
	}
};

export const Rounded: Story = {
	args: {
		outlined: false,
		type: 'none',
		children: 'Button Text',
		rounded: true,
		size: 'medium'
	}
};
