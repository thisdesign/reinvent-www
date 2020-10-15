export default {
  type: "object",
  name: "homepageHero",
  title: "Homepage Hero",
  fields: [
    {
      name: "content",
      type: "array",
      of: [
        {
          type: "object",
          name: "bullet",
          fields: [
            {
              type: "richTextStandard",
              name: "text",
            },
            {
              type: "image",
              name: "background",
              options: {
                hotspot: true,
              },
            },
            {
              type: "file",
              name: "video",
              title: "Video (Optional)",
              description: "For load times, make sure video is under 10mb",
            },
          ],
          preview: {
            select: {
              title: "text",
              media: "background",
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare: (selection) => ({
      ...selection,
      title: "Homepage Hero",
      subtitle: "A carousel of statements",
    }),
  },
};
