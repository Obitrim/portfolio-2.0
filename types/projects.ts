import { StaticImageData } from 'next/image';
export type Project = {
  name: string;
  image: string | StaticImageData;
  url: string;
  description: string;
  stack: string[];
  isHyperlink?: boolean;
};
