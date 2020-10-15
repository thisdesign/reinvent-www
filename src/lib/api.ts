import client from "./sanity";
import { PageSchema, SiteSchema } from "types";

export const getSite = async (): Promise<SiteSchema | null> => {
  const data = await client.fetch(`
    *[slug.current == 'site'][0]{
      ...,
      primaryNav[]-> { slug, title }
    }    
  `);
  return data;
};

export const getPage = async (slug: string): Promise<PageSchema | null> => {
  const data = await client.fetch(`
    *[_type == 'page' && slug.current == '${slug}'][0]{
      ...,
      modules[]{
        ...,
        content[]{
          ...,
          'video': video.asset->url,
        }
      }
    }
  `);
  return data;
};
