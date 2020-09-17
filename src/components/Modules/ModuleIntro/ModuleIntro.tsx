import BlockCOntentToReact from "@sanity/block-content-to-react";
import React from "react";
import { ModuleIntro as ModuleIntroType } from "types";
import S from "./ModuleIntro.Styled";
import { IntroHead } from "components";

const ModuleIntro: React.FC<{ data: ModuleIntroType }> = ({ data }) => {
  return (
    <S.Intro>
      <IntroHead center>
        <BlockCOntentToReact
          blocks={data.text}
          serializers={{
            types: {
              block: (props) => {
                if (props.node.style === "normal") {
                  return <div>{props.children}</div>;
                }
              },
            },
          }}
        />
      </IntroHead>
    </S.Intro>
  );
};

export default ModuleIntro;
