export default {
  type: "document",
  name: "page",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "The slug is a unique identifier that determines the page's URL. Example: `about`",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "modules",
      type: "array",
      of: [
        //
        { type: "team" },
        { type: "companies" },
        { type: "moduleAbout" },
        { type: "bullets" },
      ],
    },
  ],
};
