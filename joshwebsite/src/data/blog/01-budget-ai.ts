
import type {BlogArticle} from "./bloginterfaces";
import heroCheapAiImage from "../../data/blogimages/hero-cheapai.png";
import OpenRouterCheapAiImage from "../../data/blogimages/openrouter-cheapai.png";
import Opencode1CheapAiImage from "../../data/blogimages/opencode-cheapai.png";
import OpencodewebCheapAiImage from "../../data/blogimages/opencodeweb.png";
import OpencodeconnectCheapAiImage from "../../data/blogimages/Opencode-connect.png";
import OpencodequestionCheapAiImage from "../../data/blogimages/opencode-question.png";
import OpencodeactivCheapAiImage from "../../data/blogimages/opencode-activity.png";
import Openagents from "../../data/blogimages/openagents.png";
import OpenagentsAgents from "../../data/blogimages/openagents-agents.png";
import OpenagentsResp from "../../data/blogimages/openagent-response.png";
import Context7 from "../../data/blogimages/context7.png";
import Context7demo from "../../data/blogimages/context7demo.png";
import OpenchamberDark from "../../data/blogimages/openchamberdar.png";
import Secrev1 from "../../data/blogimages/secreview-demo.png";
import Secrev2 from "../../data/blogimages/secreview2.png";





const BudgetAiArticle: BlogArticle = {
    slug: "smart-ai-on-a-budget",           // URL: /blog/my-new-article
    title: "How I make AI work smarter and faster on a budget",
    date: "2026-05-23",
    author: "Josh Hatfield",
    tags: ["AI", "Agents", "Context Automation"],
    menuItems: [
        { id: "intro", label: "Introduction" },
        { id: "tools-user", label: "My Tools" },
        { id: "getting-started", label: "Getting Started" },
        { id: "working-example", label: "Example" },
    ],
    content: [
        { type: 'paragraph', props: { content: "Something I always strive for is gaining meaningful and cost effective results from AI" } },
        { type: 'paragraph', props: { content: "With a few simple tools and methods you can make even older models perform responsively, in this article i'll share my stack which I use to productively code without burning through expensive tokens and requiring complex tooling setup." } },
        { type: 'image', props: { src: heroCheapAiImage, alt: "my AI Stack"} },
        { type: 'header', props: { id: "intro", title: "Introduction" } },
        { type: 'paragraph', props: { content: "Being an early adopter of AI assisted coding and in my day to day workflow coding projects from home I ran into several issues with excessive cost and excess token usage, moreover I ran into issues where dated libraries or software stacks would get confused with newer versions implementing strange code which I would then have to dial back and redo by hand or spend time excessively diagnosing." } },
        { type: 'paragraph', props: { content: "Over time I created agents, agentic automation, RAG servers, MCP connectors, built \"reminder.md\" files and plans, intermediate vector caches and many other systems but I had issues with quality or context, not to mention when I did get a working system I found it would frequently require excessive context leading to therefore excessive token usage and money spent." } },
        { type: 'paragraph', props: { content: "After experimentation I settled on my current software stack which I found not only saved tokens, but also made cheaper models behave far smarter and more performant than my experiences with even top shelf models, In this article i'll share my workflow and development stack." } },
        { type: 'header', props: { id: "tools-user", title: "My Tools" } },
        { type: 'paragraph', props: { content: "The tools I use are accessible to anyone with a computer, you dont require excessive GPU or a development PC.  Each of these tools builds on one another to add extra capability to my AI usage" } },
        { type: 'list', props: { type: 'ordered', items: ["**Openrouter** - LLM's from all major vendors, Pay as you go", "**Opencode** - An open source coding agent", "**OpenAgents** - Hundreds of AI agent tools for free", "**Context7** - If your LLM doesn't know Context7 Does", "**OpenChamber** - An incredible UI for AI work"] } },
        { type: 'quote', props: { content: "The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities.", author: "Edsger W. Dijkstra" } },
        { type: 'paragraph', props: { content: "With the combined tools listed I have been able to significantly accelerate my workflow and ability to ship results." } },
        { type: 'header', props: { id: "getting-started", title: "Getting Started" } },
        { type: 'paragraph', props: { content: "Lets walk through each of the tools in my stack and its setup" } },
        { type: 'header', props: { title: "OpenRouter" } },
        { type: 'image', props: { src: OpenRouterCheapAiImage, alt: "my AI Stack"} },
        { type: 'paragraph', props: { content: "[https://openrouter.ai](https://openrouter.ai)" } },
        { type: 'paragraph', props: { content: "Started in early 2023 as the first LLM marketplace, OpenRouter has grown to become the largest and most popular AI gateway. They remove the need to subscribe to one service e.g Claude or ChatGPT and provide an API + chat to all major AI providers on Pay as you go terms." } },
        { type: 'paragraph', props: { content: "The process to get up and running here is simple, Create an account and put in some small amount of money for AI token usage I started with $5 which took me a while to get through.  Openrouter is my gateway to multiple AI providers." } },
        { type: 'paragraph', props: { content: "if you already have API access to a AI LLM you may not need this tool however it is a great setup for people who are just starting out." } },
        { type: 'header', props: { title: "OpenCode" } },
        { type: 'image', props: { src: Opencode1CheapAiImage, alt: "my AI Stack"} },
        { type: 'paragraph', props: { content: "[https://opencode.ai](https://opencode.ai)" } },
        { type: 'paragraph', props: { content: "OpenCode is an agent chat tool that helps you write code in your terminal, IDE, Browser, or desktop." } },
        { type: 'paragraph', props: { content: "In addition to supporting coding tools Opencode has a \"web\" mode which will open an easy to use ChatGPT style interface, if you are not familiar with Terminals or IDE's this is a great shortcut to advanced AI usage." } },
        { type: 'paragraph', props: { content: "To launch web mode after installing Opencode simply type into your terminal/CLI," } },
        {
            type: 'code',
            props: {
                language: "shell",
                code: `opencode web`
            }
        },
        { type: 'image', props: { src: OpencodewebCheapAiImage, alt: "my AI Stack"} },
        { type: 'paragraph', props: { content: "This will open up a browser version of Opencode in your default browser, An optional password can be set but we will cover that in a further step" } },
        { type: 'paragraph', props: { content: "From here OpenCode can be connected to OpenRouter which will allow us to speak to multiple AI providers as we need, From the settings > providers menu we can add our OpenRouter API key via the UI which will get us up and running." } },

        { type: 'image', props: { src: OpencodeconnectCheapAiImage, alt: "my AI Stack"} },

        { type: 'paragraph', props: { content: "From here comes the true power of a desktop AI client, not only can I ask Opencode questions like a normal AI, but I can also open a session on a folder in my computer and ask it to read, understand, find and Edit documents, from here I can build a foundation to prototype code, emails, complex scenarios, game development and much more." } },

        { type: 'paragraph', props: { content: "For now  I have chosen Claude Opus 3.8 and asked it to review the source code for this blog article" } },

        { type: 'image', props: { src: OpencodequestionCheapAiImage, alt: "my AI Stack"} },

        { type: 'paragraph', props: { content: "And just like that I now have the ability to review and edit my content inline with my own choice of AI, You can view the usage of your tokens from the Openrouter Billing page to track your spending and place limits where needed however my usage is significantly cheaper due to only playing for tokens used." } },

        { type: 'image', props: { src: OpencodeactivCheapAiImage, alt: "my AI Stack"} },

        { type: 'header', props: { title: "OpenAgents" } },

        { type: 'paragraph', props: { content: "While using tokens only can be cheaper, once you start using these systems on larger projects the prices can add up fast, While Claude models are fantastic they are also expensive, Enter OpenAgentsControl" } },

        { type: 'image', props: { src: Openagents, alt: "my AI Stack"} },

        { type: 'paragraph', props: { content: "[OpenAgents Github](https://github.com/darrenhinde/OpenAgentsControl)" } },

        { type: 'paragraph', props: { content: "Agents are in brief AI personas with rules and instructions about how they can operate there are commonly used to orchestrate workflows. After spending time writing my own agents and skills it occurred to me that peers on the internet had likely also written agents and published them" } },
        { type: 'paragraph', props: { content: "Out of the box OpenCode only comes with two agents, Build and Plan.  One writes content, the other plans and reads content.  Openagents comes with several pre-made agents and hundreds of sub-agent environments which deliver many incredible features, Mainly." } },

        { type: 'list', props: { type: 'list-disc', items: ["Token Efficiency - An 80% reduction in token and spend usage with Minimal Viable Information design. Only load what's needed, when it's needed.",
                "Context Scout - Context aware agents load YOUR patterns before generating content. Code and Language matches your project from the start with no refactoring or retraining needed.",
                "Approval gates - AI on your desktop has valid concerns, This system imposes a Propose → Approve → Execute. workflow. No \"oh no, what did the AI just do?\" moments.",
                "Full control over agent behavior - Edit Agent files directly—no compilation, no vendor lock-in, no \"App\" that cant be modified, you can Change workflows, add constraints, customize for yourself or team.",
                "Works great in teams - Either on your own or with a team, Commit context and files OpenAgent makes to a repo. New contributors inherit team's AI patterns automatically.",
                "Make your own Agents - Once OpenAgents understands your requirements, you can simply ask it to help you make hyper-specific agents for your own needs/"] } },


        { type: 'paragraph', props: { content: "The installation process is a one line command listed on their github page, I recommend the full install with all options, after which you will see multiple new agents in your Opencode console" } },


        { type: 'image', props: { src: OpenagentsAgents, alt: "my AI Stack"} },

        { type: 'paragraph', props: { content: "With these your AI will be noticeably more aware of your usage and projects, Rerunning the same question I asked before shows much deeper detail and comprehension" } },

        { type: 'image', props: { src: OpenagentsResp, alt: "my AI Stack"} },

        { type: 'paragraph', props: { content: "There are many many many tools that come with OpenAgents, I'll talk about them more in this post." } },

        { type: 'header', props: { title: "Context7" } },

        { type: 'image', props: { src: Context7, alt: "my AI Stack"} },

        { type: 'paragraph', props: { content: "[https://context7.com](https://context7.com)" } },

        { type: 'paragraph', props: { content: "Context7 is a great tool that is included in the stack I use, The idea is simple context is the knowledge of your chat and history that is sent to your LLM alongside your main request. Context7 is a bunch of pre-prepared knowledge that can be added to your requests context to add knowledge that your chosen LLM may not have." } },

        { type: 'paragraph', props: { content: "As a working example I chose a cheaper model (Deepseek 3.1) released in late 2025 and asked it a question about an event that happened in 2026, without needing a web scraper, Skills, or a special MCP service I was able to get information through context 7 on how to lookup the latest relevant data and have it fed to my AI to provide a response, no complex configuration needed." } },


        { type: 'image', props: { src: Context7demo, alt: "my AI Stack"} },

        { type: 'paragraph', props: { content: "Tools like this come in extremely useful when it comes to new and old software frameworks and general knowledge gaps, especially using cheaper models." } },


        { type: 'header', props: { title: "OpenChamber" } },

        { type: 'image', props: { src: OpenchamberDark, alt: "my AI Stack"} },

        { type: 'paragraph', props: { content: "[https://openchamber.dev](https://openchamber.dev)" } },

        { type: 'paragraph', props: { content: "Openchamber is a UI for opencode, while opencode's web interface is neat Openchamber takes it to a whole other level with much more detail, better formatting, colour themes and much more. for me this is the tool which brings all of the above components together into a powerful workspace to make the most of my AI systems." } },


        { type: 'header', props: { id: "working-example", title: "Example" } },

        { type: 'paragraph', props: { content: "Now bringing it all together i'll use the codereviewer functionality to do a security review of the source code on this website, I have chosen Minimax M2.5 which is a very cheap model that can be enhanced with my toolset." } },

        { type: 'image', props: { src: Secrev1, alt: "my AI Stack"} },

        { type: 'paragraph', props: { content: "And there it is! for $0.0071 I was able to get a security report on my codebase with no external subscriptions or expensive 3rd party tools needed, I also didnt need to configure any advanced AI settings." } },

        { type: 'paragraph', props: { content: "Directly from the UI I can read the report which thankfully found no critical issues and only minor concerns which have since been remediated, incredibly easy to get a higher quality of security review with minimal effort." } },

        { type: 'image', props: { src: Secrev2, alt: "my AI Stack"} },


    ]
};

export default BudgetAiArticle;