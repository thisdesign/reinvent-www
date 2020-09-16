import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const options = {
  dataset: "2020-09",
  projectId: "07nl0hko",
  useCdn: false,
  token:
    "skRDRLncak5pDNjpTxtAP6qPHYwyI0y0wUVQjPBsyAeQBSbzU4Mhb9Uj3bj2iobJMXMvV694QrWw28P6WpgiR8JAdtArBeHtL5zk216OI1DxCAO6kHgG5uyqjiOJMTG0jP8kqhZzl3NUrMszDOVhEP9mTsdJVAtFGxM3Zr7WZHX4PRGR1iMb",
};

const client = sanityClient(options);

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

export default client;
