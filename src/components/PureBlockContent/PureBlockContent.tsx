/* eslint-disable react/display-name */
import { Fragment } from "react";
import BlockContentToReact from "@sanity/block-content-to-react";
import { SanityBlockContent } from "types";

const PureBlockContent: React.FC<{
  component?: React.FC | string;
  blocks: SanityBlockContent;
}> = ({ blocks, component: Component = Fragment }) => (
  <BlockContentToReact
    blocks={blocks}
    serializers={{
      types: {
        block: (props) => {
          return <Component>{props.children}</Component>;
        },
      },
    }}
  />
);

export default PureBlockContent;
