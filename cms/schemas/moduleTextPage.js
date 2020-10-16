export default {
  name: "textPage",
  type: "object",
  title: "Text Page",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            {
              title: "Normal",
              value: "normal",
            },
            {
              title: "Heading",
              value: "h2",
            },
          ],
          lists: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
