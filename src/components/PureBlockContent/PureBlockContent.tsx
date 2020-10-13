/* eslint-disable react/display-name */
import { Fragment } from "react";
const BlockContentToReact = require("@sanity/block-content-to-react");
import { SanityBlockContent } from "types";

const PureBlockContent: React.FC<{
  component?: (children: any) => any;
  blocks: SanityBlockContent;
}> = ({ blocks, component }) => (
  <BlockContentToReact
    blocks={blocks}
    serializers={{
      types: {
        block: (props: any) => {
          return component ? component(props.children) : <>{props.children}</>;
        },
      },
    }}
  />
);

export default PureBlockContent;
