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
      name: "previewImage",
      type: "image",
      description:
        "Image that shows when shared on iMessage, twitter, slack, etc.",
    },

    {
      name: "metaDescription",
      type: "text",
      description:
        "The meta description is a snippet of up to about 155 characters which summarizes a page's content for SEO purposes",
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
      name: "footerText",
      type: "richTextStandard",
      description: "Adds text to the site's footer",
    },
    {
      name: "terms",
      title: "Terms of Service",
      type: "richTextStandard",
    },
  ],
};
