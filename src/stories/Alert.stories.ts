import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "./AlertModal";

const meta: Meta<typeof AlertModal> = {
  title: "Components/Alert",
  component: AlertModal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["success", "info", "warning", "error"],
    },
    variant: {
      control: "radio",
      options: ["subtle", "solid", "surface"],
    },
    showIcon: { control: "boolean" },
    closeIcon: { control: "boolean" },
    onClose: { action: "closed" },
  },
  args: {
    title: "Order Update",
    description: "Your order has been processed successfully",
    showIcon: true,
    closeIcon: false,
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof AlertModal>;

export const Mode: Story = {
  name: "Mode/Description + Icon",
  args: {
    type: "info",
    showIcon: true,
    description: "New features available next week",
  },
};

export const ModeWithDescription: Story = {
  name: "Mode/Title + Description + Icon",
  args: {
    type: "info",
    title: "System Update",
    description: "New features available next week",
    showIcon: true,
  },
};

export const ModeDescriptionOnly: Story = {
  name: "Mode/Description Only",
  args: {
    type: "info",
    description: "Meeting reminder at 2 PM",
    showIcon: false,
  },
};

export const ModeWithCloseIcon: Story = {
  name: "Mode/Title + Description + Icon + CloseIcon",
  args: {
    type: "info",
    title: "System Update",
    description: "New features available next week",
    showIcon: true,
    closeIcon: true,
  },
};
