# Template nextjs

Stack: Next.js, TypeScript, TailwindCSS, Shadcn, Drizzle, Turso, Authjs, Hono

if you want to use the server actions, just delete the folders:
- `/server`
- `/app/api/[[...route]]]`

and create the `/actions` folder instead

## Getting Started

> Complete the .env file with the necessary information

```bash
# Install dependencies
bun i

# Run the development database
bun dev:db:turso

# Run the drizzle generator
bun db:generate

# Run the migrations
bun db:migrate

# Run the development server
bun dev
```
