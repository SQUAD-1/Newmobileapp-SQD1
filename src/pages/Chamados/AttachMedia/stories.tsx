import { AttachMidia } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AttachMidia> = {
    title: "AttachMidia",
    component: AttachMidia,
};

export default meta;

type Story = StoryObj<typeof AttachMidia>;

export const Primary: Story = {
    render: () => <AttachMidia />,
};
