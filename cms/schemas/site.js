const headingPair = [
  {
    title: "Section Title",
    name: "eyebrow",
    type: "string",
    validation: (Rule) => Rule.required(),
  },
  {
    name: "main",
    type: "text",
    rows: 2,
    // validation: (Rule) => Rule.required(),
  },
  {
    name: "support",
    type: "text",
    rows: 2,
    // validation: (Rule) => Rule.required(),
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
      name: "contactEmail",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "url",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "intro",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    },

    {
      name: "introImage",
      type: "image",
      hidden: true,
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
      hidden: true,
      validation: (Rule) => Rule.required(),
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

    {
      type: "object",
      name: "contact",
      fields: [
        ...headingPair,

        {
          name: "ctaText",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "backgroundImage",
          type: "image",
          hidden: true,
          validation: (Rule) => Rule.required(),
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
