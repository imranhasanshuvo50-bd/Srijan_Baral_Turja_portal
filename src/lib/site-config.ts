import { profile } from "@/data/profile";
import { siteData } from "@/data/site";

export const siteConfig = {
  name: siteData.name,
  url: siteData.url,
  description: siteData.description,
  owner: profile,
  keywords: siteData.keywords
};
