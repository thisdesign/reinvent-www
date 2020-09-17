import { SanityBlockContent } from "types";
const BlockContentToReact = require("@sanity/block-content-to-react");
import S from "./SanityBlockContent.Styled";

const BlockContent: React.FC<{
  blocks: SanityBlockContent;
  serif?: boolean;
}> = ({ blocks, serif, ...props }) => {
  return (
    <S.Wrapper serif={serif}>
      <BlockContentToReact blocks={blocks} {...props} />
    </S.Wrapper>
  );
};

export default BlockContent;
