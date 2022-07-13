import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

import None from "../../assets/people/week.png";

export interface GuyProps {
  x: number;
}
export const GuyMediumForce = (props: GuyProps) => {
  const { x } = props;
  const [image] = useImage(None);
  return (<Image x={x} y={40} scale={{x: 0.1, y:0.1}} image={image} />);
};
