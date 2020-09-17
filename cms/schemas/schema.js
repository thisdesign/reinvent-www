import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import site from "./site";
import page from "./page";
import team from "./team";
import richTextStandard from "./richTextStandard";
import companies from "./companies";
import moduleAbout from "./moduleAbout";
import moduleBullets from "./moduleBullets";
import moduleIntro from "./moduleIntro";
import ModuleHomepageHero from "./ModuleHomepageHero";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    ModuleHomepageHero,
    moduleIntro,
    moduleBullets,
    moduleAbout,
    companies,
    site,
    page,
    team,
    richTextStandard,
  ]),
});
