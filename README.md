This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setup

### 1. Install pnpm
First, install pnpm if you haven't already:

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

For other installation methods, visit [pnpm.io/installation](https://pnpm.io/installation)

### 2. Install Dependencies
Once pnpm is installed, install project dependencies:

```bash
pnpm install
```

## Getting Started

Run the development server:

```bash

pnpm dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.




## Deployment

### Deploy on Vercel

1. Install the Vercel CLI:
```bash
pnpm add -g vercel
```

2. Deploy using the Vercel CLI:
```bash
vercel
```

This will guide you through:
- Logging into your Vercel account
- Linking to an existing project or creating a new one
- Setting up environment variables (if needed)
- Deploying your application

For subsequent deployments, you can use:
```bash
vercel --prod
```

For more information, check out:
- [Vercel CLI documentation](https://vercel.com/docs/cli)
- [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
