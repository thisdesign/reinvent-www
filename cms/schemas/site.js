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
      name: "primaryNav",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
        },
      ],
    },

    {
      name: "intro",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    },

    {
      type: "object",
      name: "contact",
      fields: [
        {
          title: "Section Title",
          name: "eyebrow",
          type: "string",
        },

        {
          name: "ctaText",
          type: "string",
          validation: (Rule) => Rule.required(),
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
