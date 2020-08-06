const headingPair = [
  {
    name: "eyebrow",
    type: "string",
  },
  {
    name: "main",
    type: "text",
    rows: 2,
  },
  {
    name: "support",
    type: "text",
    rows: 2,
  },
];

export default {
  name: "site",
  title: "Site Settings",
  type: "object",
  fields: [
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      readOnly: true,
    },
    {
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "introImage",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },

    {
      type: "object",
      name: "companies",

      fields: [
        ...headingPair,
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
                  type: "image",
                  name: "image",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "imageBreak",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },

    {
      type: "object",
      name: "team",
      fields: [
        ...headingPair,
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
    },
  ],
};
