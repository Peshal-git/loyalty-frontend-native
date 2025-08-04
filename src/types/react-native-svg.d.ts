import { RefAttributes } from "react";
import { SvgProps } from "react-native-svg";

declare module "react-native-svg" {
  interface SvgXmlProps extends SvgProps {
    xml: string | null;
    ref?: RefAttributes<any>["ref"];
  }
  export const SvgXml: React.FC<SvgXmlProps>;
}
