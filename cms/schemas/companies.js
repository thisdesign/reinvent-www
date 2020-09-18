export default {
  type: "object",
  name: "companies",

  fields: [
    {
      name: "logos",
      type: "array",
      of: [
        {
          type: "object",
          name: "company",
          fields: [
            {
              name: "name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "statement",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              type: "image",
              name: "image",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare: (selection) => ({
      ...selection,
      title: "Companies",
      subtitle: "A grid of logos",
    }),
  },
};
