import { styled } from "nativewind";
import { FC } from "react";
import {
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
  ImageProps,
} from "react-native";

export type ImageButtonProps = TouchableOpacityProps & {
  source: ImageProps["source"];
  imageStyle?: ImageProps["style"];
};

export const ImageButton: FC<ImageButtonProps> = ({
  source,
  imageStyle,
  ...otherProps
}) => (
  <TouchableOpacity className="content-center items-center" {...otherProps}>
    <Image source={source} style={[imageStyle, { backgroundColor: "red" }]} />
  </TouchableOpacity>
);

// export const ImageButton = styled(ImageButtonOrig, {
//   props: {
//     imageStyle: true,
//   },
// });
