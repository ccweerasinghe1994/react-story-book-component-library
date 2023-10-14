import type { Meta, StoryObj } from '@storybook/react';

import Heading from '../Components/Header/Header';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Example/Heading',
	component: Heading,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered'
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		children: { control: 'text' },
		level: {
			control: 'select',
			options: [1, 2, 3, 4, 5, 6]
		}
		// backgroundColor: { control: 'color' }
	}
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Level1: Story = {
	args: {
		level: 1,
		children: `Heading Text 1`
	}
};

export const Level2: Story = {
	args: {
		level: 2,
		children: `Heading Text 2`
	}
};

export const Level3: Story = {
	args: {
		level: 3,
		children: `Heading Text 3`
	}
};

export const Level4: Story = {
	args: {
		level: 4,
		children: `Heading Text 4`
	}
};

export const Level5: Story = {
	args: {
		level: 5,
		children: `Heading Text 5`
	}
};

export const Level6: Story = {
	args: {
		level: 6,
		children: `Heading Text 6`
	}
};
