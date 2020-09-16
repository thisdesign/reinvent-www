export default {
  type: "object",
  name: "team",
  fields: [
    {
      name: "members",
      type: "array",
      of: [
        {
          type: "object",
          name: "member",
          fields: [
            {
              type: "string",
              name: "name",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "jobTitle",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              type: "image",
              name: "image",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "bio",
              type: "richTextStandard",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
