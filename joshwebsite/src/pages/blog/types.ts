import type { BlogMenuItem } from "../../components/blogcomponents";

export interface BlogContentBlock {
  type: 'header' | 'paragraph' | 'image' | 'menu' | 'code' | 'quote' | 'list';
  props: Record<string, unknown>;
}

export interface BlogArticle {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  menuItems: BlogMenuItem[];
  content: BlogContentBlock[];
}