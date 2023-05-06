import { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from ".";

const meta: Meta<typeof NavigationBar> = {
	title: "NavigationBar",
	component: NavigationBar,
};

export default meta;

type Story = StoryObj<typeof NavigationBar>;

export const Primary: Story = {
	render: () => <NavigationBar />,
};
