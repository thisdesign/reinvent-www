/* eslint-disable react/display-name */
import { Fragment } from "react";
const BlockContentToReact = require("@sanity/block-content-to-react");
import { SanityBlockContent } from "types";

const PureBlockContent: React.FC<{
  component?: React.FC | string;
  blocks: SanityBlockContent;
}> = ({ blocks, component: Component = Fragment }) => (
  <BlockContentToReact
    blocks={blocks}
    serializers={{
      types: {
        block: (props: any) => {
          return <Component>{props.children}</Component>;
        },
      },
    }}
  />
);

export default PureBlockContent;
