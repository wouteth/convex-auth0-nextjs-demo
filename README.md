## Setup & Running Locally

1. Copy the example environment file and fill in your values:

	```bash
	cp .env.example .env.local
	# Then edit .env.local with your Auth0 and Convex credentials
	```

2. Install dependencies:

	```bash
	pnpm install
	# or
	npm install
	# or
	yarn install
	```

3. Run the development server:

	```bash
	pnpm dev
	# or
	npm run dev
	# or
	yarn dev
	```

---

## Auth0 Working, but Convex Shows Unauthenticated

Auth0 authentication is working correctly in this project, but Convex is still showing users as unauthenticated. This issue is being tracked and discussed in the Convex Discord:

- [Convex Discord Issue Thread](https://discord.com/channels/1019350475847499849/1432677929606840331)

If you are experiencing this, please refer to the thread above for updates and possible solutions.
