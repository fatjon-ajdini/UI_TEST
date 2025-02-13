import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "./MultiSelect";

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelectDropdown",
  component: MultiSelect,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    selectedValues: {
      control: {
        type: "multi-select",
      },
    },
    disabledValues: {
      control: {
        type: "multi-select",
      },
    },
    isLoading: { control: "boolean" },
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {
    placeholder: "Select countries...",
    selectedValues: [],
    disabledValues: [],
    isLoading: false,
  },
};

export const WithLoadingState: Story = {
  args: {
    placeholder: "Loading countries...",
    selectedValues: [],
    disabledValues: [],
    isLoading: true,
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: "Choose your favorite countries...",
    selectedValues: [],
    disabledValues: [],
    isLoading: false,
  },
};

export const WithPreSelectedOptions: Story = {
  args: {
    placeholder: "Select countries...",
    selectedValues: ["United States", "Canada"],
    disabledValues: [],
    isLoading: false,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    placeholder: "Select countries...",
    selectedValues: [],
    disabledValues: ["United States", "Canada", "Brazil"],
    isLoading: false,
  },
};

export const AllFeatures: Story = {
  args: {
    placeholder: "Select countries (with all features)...",
    selectedValues: ["Germany", "France"],
    disabledValues: ["United States", "Canada"],
    isLoading: false,
  },
};
