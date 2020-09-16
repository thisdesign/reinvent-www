const headingPair = [
  {
    title: "Section Title",
    name: "eyebrow",
    type: "string",
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

    { type: "companies", name: "companies" },

    {
      name: "imageBreak",
      type: "image",
      hidden: true,
      validation: (Rule) => Rule.required(),
    },

    { type: "team", name: "team" },

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
    {
      name: "terms",
      title: "Terms of Service",
      type: "richTextStandard",
    },
  ],
};
