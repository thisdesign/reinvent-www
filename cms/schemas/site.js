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
  ],
};
