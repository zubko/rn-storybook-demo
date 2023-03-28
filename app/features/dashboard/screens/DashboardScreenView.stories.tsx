import { ComponentMeta, ComponentStoryObj } from "@storybook/react-native";
import { DashboardScreenView } from "./DashboardScreenView";
import { action } from "@storybook/addon-actions";

const DashboardScreenViewMeta: ComponentMeta<typeof DashboardScreenView> = {
  component: DashboardScreenView,
};
export default DashboardScreenViewMeta;

type DashboardScreenViewStory = ComponentStoryObj<typeof DashboardScreenView>;

export const Basic: DashboardScreenViewStory = {
  args: {
    onShowProfile: action("onShowProfile"),
    onStartQuiz: action("onStartQuiz"),
  },
};
