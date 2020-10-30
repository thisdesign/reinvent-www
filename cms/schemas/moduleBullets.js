export default {
  type: "object",
  name: "bullets",
  title: "Bullets",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "content",
      type: "array",
      of: [
        {
          type: "object",
          name: "bullet",
          fields: [
            {
              type: "string",
              name: "title",
            },
            {
              type: "image",
              name: "icon",
            },
            {
              type: "richTextStandard",
              name: "text",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare: (selection) => ({
      ...selection,
      title: "Bullets",
      subtitle: "A list of bullets",
    }),
  },
};
