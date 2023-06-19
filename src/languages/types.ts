export type SectionTypes = SectionType[];

export type SectionType = {
  section: string;
  order: number;
  topics: {
    order: number;
    slug: string;
    name: string;
    isActive: boolean;
  }[];
};
