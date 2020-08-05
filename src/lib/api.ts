import client from "./sanity";
import { SiteSchema } from "types";

export const getSite = async (): Promise<SiteSchema | null> => {
  const data = await client.fetch(`*[slug.current == 'site'][0]`);
  return data;
};
