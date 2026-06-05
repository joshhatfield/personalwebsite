import type {BlogArticle} from "./bloginterfaces";

const AveArticle: BlogArticle = {
    slug: "ave-context-manager",           // URL: /blog/my-new-article
    title: "Extending context with less overhead",
    date: "2026-06-06",
    author: "Josh Hatfield",
    tags: ["Intelligence", "Context Automation", "AI"],
    menuItems: [
        { id: "intro", label: "Introduction" },
    ],
    content: [
        { type: 'paragraph', props: { content: "hello" } },
        { type: 'header', props: { id: "intro", title: "Introduction" } },
        { type: 'paragraph', props: { content: "hello" } },


    ]
};

export default AveArticle;