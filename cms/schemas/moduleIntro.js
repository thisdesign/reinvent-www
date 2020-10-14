export default {
  name: "intro",
  type: "object",
  title: "Page Intro",
  fields: [
    {
      name: "text",
      type: "richTextStandard",
    },
    {
      title: "Text alignment",
      name: "alignment",
      type: "string",
      options: {
        list: ["left", "center"],
      },
    },
  ],
  preview: {
    select: {
      title: "text",
    },
  },
};
