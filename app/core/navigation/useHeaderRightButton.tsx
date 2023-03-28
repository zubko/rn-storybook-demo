import { useState, useEffect, useLayoutEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { HeaderButton } from "./components/HeaderButton";
import { ImageProps } from "react-native";

type RootStackParamList = {
  Home: undefined;
};

type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  string
>;
type ScreenRouteProp = RouteProp<RootStackParamList, string>;

type Props = {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
  onPress: () => void;
  imageSource: ImageProps["source"];
};

export const useHeaderRightButton = ({
  navigation,
  onPress,
  imageSource,
}: Props) => {
  const [headerRightButton, setHeaderRightButton] =
    useState<JSX.Element | null>(null);

  useLayoutEffect(() => {
    const headerButton = (
      <HeaderButton onPress={onPress} source={imageSource} />
    );

    navigation.setOptions({
      headerRight: () => headerButton,
      headerTitle: "Welcome",
    });

    setHeaderRightButton(headerButton);
  }, [navigation, onPress, imageSource]);

  return headerRightButton;
};
