import { SanityImage, SanitySlug } from "types";
import { SanityBlockContent } from "./sanity";

export type HeadingPair = {
  eyebrow: string;
  main?: string;
  support?: string;
};

export type TeamMember = {
  _key: string;
  _type: string;
  bio: SanityBlockContent;
  image: SanityImage;
  jobTitle: string;
  name: string;
};

export type CompaniesSchema = {
  logos: {
    _key: string;
    image: SanityImage;
    name: string;
  }[];
} & HeadingPair;

export type ContactSchema = {
  backgroundImage: SanityImage;
  ctaText: string;
} & HeadingPair;

export type SiteSchema = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  primaryNav: { slug: SanitySlug; title: string }[];
  url: string;
  intro: string;
  contactEmail: string;
  companies: CompaniesSchema;
  contact: ContactSchema;
  slug: SanitySlug;
  imageBreak: SanityImage;
  introImage: SanityImage;
  team: {
    members: TeamMember[];
  } & HeadingPair;
  title: string;
  terms: SanityBlockContent;
};

export type PageSchema = {
  title: string;
  slug: SanitySlug;
  modules?: Module[];
};

export type Module = ModuleTeam | ModuleCompanies;

export type ModuleTeam = {
  _type: "team";
  _key: string;
  members: TeamMember[];
};

export type ModuleCompanies = {
  _type: "companies";
  _key: string;
  logos: {
    _key: string;
    image: SanityImage;
    name: string;
  }[];
};
