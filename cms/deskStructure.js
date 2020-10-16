import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(MdSettings)
        .child(S.editor().schemaType("site").documentId("site")),
      ...S.documentTypeListItems(),
    ]);
