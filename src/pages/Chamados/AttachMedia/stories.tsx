import { AttachMedia } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AttachMedia> = {
    title: "AttachMedia",
    component: AttachMedia,
};

export default meta;

type Story = StoryObj<typeof AttachMedia>;

export const Primary: Story = {
    render: () => <AttachMedia />,
};
