/** @jsx jsx */
import * as React from "react";
import { SerializedStyles } from "@emotion/core";
import { LoaderSizeProps } from "./interfaces";
declare class Loader extends React.PureComponent<LoaderSizeProps> {
    static defaultProps: Required<LoaderSizeProps>;
    style: (i: number) => SerializedStyles;
    wrapper: () => SerializedStyles;
    render(): JSX.Element | null;
}
export default Loader;
