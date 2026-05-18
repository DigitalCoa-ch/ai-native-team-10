# DECISIONS.md — Key Architectural & Business Decisions

## SoloOps AI — Key Decisions

### Problem Definition
Solo business owners lose significant time on repetitive operational tasks (scheduling, follow-ups, reminders, invoicing, task management). Existing tools are too complex or expensive for one-person businesses.

### Target User
Solo entrepreneurs, freelancers, coaches, consultants, creators, and one-person online businesses.

### AI-Native Direction
- **Current:** AI-first (manual fallback possible, but AI provides core value)
- **Future:** AI-native (workflows fully orchestrated by AI with human approval checkpoints)

### AI Capabilities
- Generate follow-up messages
- Summarize conversations
- Recommend next actions
- Monitor recurring tasks
- Route reminders
- Organize workflows automatically

### Human Control Point (HITL)
User reviews and approves AI-generated follow-ups, reminders, and task suggestions before execution. No fully automated sends without human sign-off.

### Deployment Path
OpenClaw edits → commits to GitHub → Vercel deploys → published app URL

### First Build Decision: Dashboard MVP
Start with a Next.js dashboard where users can:
1. See today's tasks and priorities
2. See AI-generated recommendations
3. Approve/reject AI suggestions