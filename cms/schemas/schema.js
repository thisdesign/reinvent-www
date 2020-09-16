import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import site from "./site";
import page from "./page";
import team from "./team";
import richTextStandard from "./richTextStandard";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    //
    site,
    page,
    team,
    richTextStandard,
  ]),
});
