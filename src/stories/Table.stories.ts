import { Meta, StoryObj } from '@storybook/react';
import Table from '../Components/Table/Table';

const meta = {
	title: 'Example/Table',
	component: Table
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
