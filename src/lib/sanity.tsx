import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const options = {
  dataset: "2020-09",
  projectId: "07nl0hko",
  useCdn: false,
};

const client = sanityClient(options);

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

export default client;
