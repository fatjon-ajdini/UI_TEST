import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "./AlertModal";
import { ThemeProvider } from "next-themes";

type Variant = "solid" | "surface" | "subtle";

type AlertModalProps = React.ComponentProps<typeof AlertModal>;
type VariantStoryArgs = { items: AlertModalProps[] };

const meta: Meta<typeof AlertModal> = {
  title: "Components/AlertModal/Light Mode",
  component: AlertModal,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#e7e7e7" }],
    },
  },
};

export default meta;

const AlertList = (args: VariantStoryArgs) => {
  const items = args.items || [];

  return (
    <div className="space-y-4 w-[400px] mx-auto">
      {items.map((item, index) => (
        <AlertModal key={item.title || index} {...item} />
      ))}
    </div>
  );
};

const generateAlertItemsForVariant = (variant: Variant): AlertModalProps[] => [
  {
    type: "success",
    title: "Payment Processed",
    description: "Your payment was successfully completed",
    showIcon: true,
    closeIcon: true,
    variant,
  },
  {
    type: "warning",
    title: "Scheduled Maintenance",
    description: "System will be offline tomorrow 2-4 AM",
    showIcon: true,
    closeIcon: true,
    variant,
  },
  {
    type: "error",
    title: "Connection Lost",
    description: "Failed to connect to the server",
    showIcon: true,
    closeIcon: true,
    variant,
  },
  {
    type: "info",
    title: "System Update",
    description: "A new update is available. Please restart the application.",
    showIcon: true,
    closeIcon: true,
    variant,
  },
];

// Solid Variant
export const SolidVariantInDarkMode: StoryObj<VariantStoryArgs> = {
  render: (args) => <AlertList {...args} />,
  args: {
    items: generateAlertItemsForVariant("solid"),
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};

// Surface Variant
export const SurfaceVariantInDarkMode: StoryObj<VariantStoryArgs> = {
  render: (args) => <AlertList {...args} />,
  args: {
    items: generateAlertItemsForVariant("surface"),
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};

// Subtle Variant
export const SubtleVariantInDarkMode: StoryObj<VariantStoryArgs> = {
  render: (args) => <AlertList {...args} />,
  args: {
    items: generateAlertItemsForVariant("subtle"),
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};
