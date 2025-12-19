export const dynamic = "force-dynamic";
import { MetadataRoute } from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 

 
  return [
    {
      url: `https://restruhub.com/`,
      lastModified: new Date(),
    },
    {
      url: `https://restruhub.com/privacy`,
      lastModified: new Date(),
    },
    {
      url: `https://restruhub.com/Terms&Conditions`,
      lastModified: new Date(),
    },
    
    
  ];
}
