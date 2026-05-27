import type { BlogMenuItem } from "../../components/blogcomponents";
import type {BlogContentBlock} from "./demo-article.ts";

export interface BlogArticle {
    slug: string;
    title: string;
    date: string;
    author: string;
    tags: string[];
    menuItems: BlogMenuItem[];
    content: BlogContentBlock[];
}

const BudgetAiArticle: BlogArticle = {
    slug: "smart-ai-on-a-budget",           // URL: /blog/my-new-article
    title: "How I make AI work smarter and faster on a budget",
    date: "2025-05-23",
    author: "Josh Hatfield",
    tags: ["AI", "Agents", "Context Automation"],
    menuItems: [
        { id: "intro", label: "Introduction" },
        { id: "tools-user", label: "My Tools" },
        { id: "getting-started", label: "Getting Started" },
    ],
    content: [
        { type: 'paragraph', props: { content: "With a few simple tools and methods you can make even older models perform responsively, in this article i'll share my stack which I use to productively code without burning through expensive tokens." } },
        { type: 'header', props: { id: "intro", title: "Introduction" } },
        { type: 'paragraph', props: { content: "Being an early adopter of AI assisted coding and in my day to day workflow coding projects from home I ran into several issues with excessive cost and excess token usage, moreover I ran into issues where dated libraries or software stacks would get confused with newer versions implementing strange code which I would then have to dial back and redo by hand or spend time excessively diagnosing." } },
        { type: 'paragraph', props: { content: "Over time I created agents, agentic automation, RAG servers, MCP connectors, built \"reminder.md\" files and plans, intermediate vector caches and many other systems but I had issues with quality or context, not to mention when I did get a working system I found it would frequently require excessive context leading to therefore excessive token usage and money spent." } },
        { type: 'paragraph', props: { content: "After experimentation I settled on my current software stack which I found not only saved tokens, but also made cheaper models behave far smarter and more performant than my experiences with even top shelf models, In this article i'll share my workflow and development stack." } },
        { type: 'header', props: { id: "tools-user", title: "My Tools" } },
        { type: 'paragraph', props: { content: "The tools I use are accessible to anyone with a computer, you dont require excessive GPU or a development PC" } },
        { type: 'list', props: { type: 'ordered', items: ["Openrouter - LLM's from all major vendors, Pay as you go", "Opencode - An open source coding agent", "OpenAgents - Hundreds of AI agent tools for free", "Context7 - If your model doesn't know Context7 Does", "OpenChamber - An incredible UI for AI work"] } },
        { type: 'quote', props: { content: "The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities.", author: "Edsger W. Dijkstra" } },
        { type: 'paragraph', props: { content: "With the combined tools listed I have been able to significantly accelerate my workflow and ability to ship results." } },

        { type: 'header', props: { id: "getting-started", title: "Getting Started" } },

        { type: 'image', props: { src: "https://...", alt: "Description", caption: "Optional caption" } },
    ]
};

export default BudgetAiArticle;