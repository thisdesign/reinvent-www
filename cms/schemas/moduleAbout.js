export default {
  name: "moduleAbout",
  type: "object",
  title: "About",
  fields: [
    {
      type: "image",
      name: "featuredImage",
      options: {
        hotspot: true,
      },
    },
    {
      name: "statement",
      type: "richTextStandard",
    },
    {
      type: "image",
      name: "signature",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
  preview: {
    select: {
      media: "featuredImage",
      title: "statement",
    },
  },
};
