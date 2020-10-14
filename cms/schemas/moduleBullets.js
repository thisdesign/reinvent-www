export default {
  type: "object",
  name: "bullets",
  title: "Bullets",
  fields: [
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
