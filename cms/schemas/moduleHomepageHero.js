export default {
  type: "object",
  name: "homepageHero",
  title: "Homepage Hero",
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
              type: "richTextStandard",
              name: "text",
            },
          ],
          preview: {
            select: {
              title: "text",
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare: (selection) => ({
      ...selection,
      title: "Homepage Hero",
      subtitle: "A carousel of statements",
    }),
  },
};
