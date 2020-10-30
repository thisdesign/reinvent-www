import React from "react";
import { ModuleIntro as ModuleIntroType } from "types";
import S from "./ModuleIntro.Styled";
import { PureBlockContent } from "components";
import { IntroHead } from "components/Type/Type";
import Image from "next/image";
import { urlFor } from "lib/sanity";

const ModuleIntro: React.FC<{ data: ModuleIntroType }> = ({ data }) => {
  const isCentered = data.alignment === "left" ? false : true;

  return (
    <S.Container hasImage={!!data.image} tint={data.tint || 0}>
      {data.image && <Image src={urlFor(data.image).url() || ""} unsized />}
      <S.Intro>
        <IntroHead center={isCentered}>
          {data.text && (
            <PureBlockContent
              blocks={data.text}
              component={(children) => (
                <IntroHead center={isCentered} margin-bottom>
                  {children}
                </IntroHead>
              )}
            />
          )}
        </IntroHead>
      </S.Intro>
    </S.Container>
  );
};

export default ModuleIntro;
