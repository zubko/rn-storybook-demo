import { CoolComponent } from "./CoolComponent";

export default {
  title: "components/CoolComponent",
  component: CoolComponent,
};

export const Basic = (args) => <CoolComponent {...args} />;

Basic.args = {
  text: "Hello World",
};
