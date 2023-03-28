import { ScreenContainer } from "@app/core/components/ScreenContainer";
import { ProportionalSpacer } from "@app/core/components/ProportionalSpacer";
import { FC } from "react";
import { StartButton } from "../components/StartButton";

type ScreenViewProps = {
  onStartQuiz: () => void;
  onShowProfile: () => void;
};

export const DashboardScreenView: FC<ScreenViewProps> = ({
  onStartQuiz,
  onShowProfile,
}) => {
  return (
    <ScreenContainer>
      <ProportionalSpacer ratioOfFreeSpaceAtTop={1.7}>
        <StartButton onPress={onStartQuiz} title="Start" />
      </ProportionalSpacer>
    </ScreenContainer>
  );
};

// const handleShowProfile = () => {
//   Navigation.navigate("profile");
// };

// DashboardScreen.navigationOptions = {
//   title: "Welcome",
//   headerRight: (
//     <HeaderButton
//       onPress={handleShowProfile}
//       source={getAsset("user")}
//       style={{ padding: 4 }}
//     />
//   ),
// };
