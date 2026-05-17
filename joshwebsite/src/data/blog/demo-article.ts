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

const demoArticle: BlogArticle = {
  slug: "demo-article",
  title: "Building a CI/CD Pipeline with GitHub Actions",
  date: "2025-05-17",
  author: "Josh Hatfield",
  tags: ["DevOps", "CI/CD", "GitHub Actions"],
  menuItems: [
    { id: "introduction", label: "Introduction" },
    { id: "setup", label: "Setting Up the Workflow" },
    { id: "deployment", label: "Deployment Stage" },
    { id: "conclusion", label: "Conclusion" }
  ],
  content: [
    {
      type: 'paragraph',
      props: {
        content: "Continuous Integration and Continuous Deployment (CI/CD) are essential practices in modern software development. They help teams automate the process of building, testing, and deploying code changes. In this guide, we'll walk through creating a robust CI/CD pipeline using GitHub Actions."
      }
    },
    {
      type: 'header',
      props: {
        id: "introduction",
        title: "Introduction"
      }
    },
    {
      type: 'paragraph',
      props: {
        content: "A well-configured CI/CD pipeline catches issues early, reduces manual work, and enables faster iteration. GitHub Actions provides a flexible way to define workflows using YAML files that integrate seamlessly with your repository."
      }
    },
    {
      type: 'quote',
      props: {
        content: "The best deployment is the one you never have to think about.",
        author: "DevOps Wisdom"
      }
    },
    {
      type: 'header',
      props: {
        id: "setup",
        title: "Setting Up the Workflow"
      }
    },
    {
      type: 'paragraph',
      props: {
        content: "Let's create a basic workflow file that runs on every push to the main branch. This will handle linting, testing, and building your application."
      }
    },
    {
      type: 'code',
      props: {
        filename: ".github/workflows/ci.yml",
        language: "yaml",
        code: `name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run ESLint
        run: npm run lint
  
  test:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
  
  build:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v4
      - name: Build application
        run: npm run build`
      }
    },
    {
      type: 'image',
      props: {
        src: "https://picsum.photos/800/400",
        alt: "CI/CD Pipeline Diagram",
        caption: "Figure 1: Overview of the CI/CD pipeline flow"
      }
    },
    {
      type: 'header',
      props: {
        id: "deployment",
        title: "Deployment Stage"
      }
    },
    {
      type: 'paragraph',
      props: {
        content: "Once our tests pass and the build succeeds, we can automatically deploy to our target environment. Here's how to add a deployment job:"
      }
    },
    {
      type: 'code',
      props: {
        filename: ".github/workflows/deploy.yml",
        language: "yaml",
        code: `deploy:
  runs-on: ubuntu-latest
  needs: build
  if: github.ref == 'refs/heads/main'
  
  steps:
    - name: Deploy to Server
      uses: appleboy/scp-action@v0.1.4
      with:
        host: \${{ secrets.SERVER_HOST }}
        username: \${{ secrets.SERVER_USER }}
        key: \${{ secrets.SSH_KEY }}
        source: "dist/*"
        target: "/var/www/app"`
      }
    },
    {
      type: 'list',
      props: {
        type: 'unordered',
        items: [
          "Always use secrets for sensitive credentials",
          "Test your deployment process in a staging environment first",
          "Monitor your deployments with logging and alerts"
        ]
      }
    },
    {
      type: 'header',
      props: {
        id: "conclusion",
        title: "Conclusion"
      }
    },
    {
      type: 'paragraph',
      props: {
        content: "With GitHub Actions, you can create sophisticated CI/CD pipelines that automate your entire development workflow. Start with simple workflows and gradually add more complexity as your needs grow. Remember to always test your pipeline changes in pull requests before merging to main."
      }
    }
  ]
};

export default demoArticle;