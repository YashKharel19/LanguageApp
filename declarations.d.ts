// declarations.d.ts
declare module "*.svg" {
    import * as React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}

declare module "*.mp3" {
    const src: string;
    export default src;
}

declare module "*.m4a" {
    const src: string;
    export default src;
}

declare module '*.png' {
    const value: import("react-native").ImageSourcePropType;
    export default value;
}