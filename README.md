# FlowPilot AI

**AI-powered workflow automation SaaS for modern operations teams.**

FlowPilot turns natural-language business instructions into observable, repeatable workflows with AI-agent execution, approval checkpoints, analytics, and team workspaces.

## Why this project

A review of current public GitHub SaaS projects shows strong momentum around AI workflow automation, agentic execution, multi-tenant architecture, and operations dashboards. FlowPilot combines those patterns into one portfolio-grade product instead of another generic CRUD app.

Research references included public projects such as `ticketpilot-ai-workflow-saas`, `ai-creativeops-studio`, `AI-Automation`, and `AI-Powered-Multi-Tenant-SaaS-Builder-with-Agentic-Workflow-Generation`.

## Product surface

- Multi-tenant workspaces
- AI agent workflow execution
- Workflow run history and success metrics
- Human approval checkpoints
- Team and role-ready architecture
- PostgreSQL persistence through Prisma
- REST-style Next.js API routes
- Production-oriented dashboard UX

## Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- AI integration boundary ready for OpenAI/Claude
- Docker / GitHub Actions / AWS-ready deployment architecture

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Set `DATABASE_URL` before running Prisma migrations.

## Roadmap

1. Authentication + RBAC
2. Real PostgreSQL workflow persistence
3. OpenAI/Claude agent orchestration
4. Redis-backed job queue
5. Webhook + Slack/email integrations
6. Usage metering and billing
7. Observability with OpenTelemetry
8. Docker + CI/CD deployment
