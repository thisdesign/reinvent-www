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

export type ContactSchema = {
  backgroundImage: SanityImage;
  ctaText: string;
} & HeadingPair;

/** NOTE: this is out of date now */
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
  contact: ContactSchema;
  slug: SanitySlug;
  imageBreak: SanityImage;
  introImage: SanityImage;
  team: {
    members: TeamMember[];
  } & HeadingPair;
  title: string;
  terms: SanityBlockContent;
  previewImage: SanityImage;
  metaDescription: string;
};

export type PageSchema = {
  title: string;
  slug: SanitySlug;
  modules?: Module[];
};

export type Module =
  | ModuleTeam
  | ModuleCompanies
  | ModuleAbout
  | ModuleIntro
  | ModuleBullets
  | ModuleHomepageHero
  | ModuleTextPage;

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
    href: string;
  }[];
};

export type ModuleAbout = {
  _key: string;
  _type: "moduleAbout";
  statement?: SanityBlockContent;
};

export type ModuleIntro = {
  _key: string;
  _type: "intro";
  text: SanityBlockContent;
};

export type ModuleBullets = {
  _key: string;
  _type: "bullets";
  content: {
    _key: string;
    _type: "bullet";
    icon: SanityImage;
    text: SanityBlockContent[];
    title: string;
  }[];
};

export type ModuleHomepageHero = {
  _key: string;
  _type: "homepageHero";
  content: {
    _key: string;
    _type: "bullet";
    text: SanityBlockContent;
  }[];
};

export type ModuleTextPage = {
  _type: "textPage";
  _key: string;
  text?: SanityBlockContent;
  title?: string;
};
