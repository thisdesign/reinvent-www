import BlockContentToReact from "@sanity/block-content-to-react";
import { SanityBlockContent } from "types";

const PureBlockContent: React.FC<{ blocks: SanityBlockContent }> = ({
  blocks,
}) => (
  <BlockContentToReact
    blocks={blocks}
    serializers={{
      types: {
        block: (props) => {
          if (props.node.style === "normal") {
            return <>{props.children}</>;
          }
        },
      },
    }}
  />
);

export default PureBlockContent;
