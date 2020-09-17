import { PureBlockContent, HomepageHeroText } from "components";
import React from "react";
import { ModuleHomepageHero as ModuleHomepageHeroType } from "types";

const ModuleHomepageHero: React.FC<{ data: ModuleHomepageHeroType }> = ({
  data,
}) => {
  return (
    <div>
      {data.content.map((statement) => (
        <div key={statement._key}>
          <HomepageHeroText center>
            <PureBlockContent blocks={statement.text} />
          </HomepageHeroText>
        </div>
      ))}
    </div>
  );
};

export default ModuleHomepageHero;
