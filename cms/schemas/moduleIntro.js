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
    {
      title: "Background Image (Optional)",
      name: "image",
      type: "image",
    },
    {
      title: "Background Image Tint (Optional)",
      name: "tint",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "text",
    },
  },
};
