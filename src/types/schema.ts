import { SanityImage, SanitySlug } from "types";
import { SanityBlockContent } from "./sanity";

export type HeadingPair = {
  eyebrow: string;
  main: string;
  support: string;
};

export type TeamMember = {
  _key: string;
  _type: string;
  bio: SanityBlockContent;
  image: SanityImage;
  jobTitle: string;
  name: string;
};

export type SiteSchema = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  companies: { logos: [] } & HeadingPair;
  slug: SanitySlug;
  imageBreak: SanityImage;
  introImage: SanityImage;
  team: {
    members: TeamMember[];
  } & HeadingPair;
  title: string;
};
