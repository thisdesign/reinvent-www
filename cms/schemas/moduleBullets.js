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
            {
              type: "image",
              name: "icon",
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
