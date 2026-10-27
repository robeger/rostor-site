# rostor-site

Rostor static landing page.

Current entry point: `index.html`

## Deployment and preview

Cloudflare Workers Builds is connected to `robeger/rostor-site`.
Settings verified in the authenticated dashboard on 2026-10-28:

- Production branch: `main`.
- Build command: empty; repository root: `/`.
- Production command: `npx wrangler deploy`.
- Non-production command: `npx wrangler versions upload`.
- Builds for non-production branches: enabled.
- Preview URLs: enabled and publicly accessible; no Cloudflare Access restriction.
- Production domain: `https://rostor.ro`.
- Worker URL: `https://rostor-site.robert-minciunescu.workers.dev`.

Use a branch such as `preview/<topic>`, push it and open a pull request. Inspect
the successful Workers Builds check and its generated version URL before review.
The current project uses version uploads; the newer Worker Previews setup has
not been enabled. A version upload does not promote that version to production.

Only merge into `main` when ready to publish. Do not run `wrangler deploy` while
trying to create a preview. `.assetsignore` keeps deployment configuration,
documentation and local secret files out of the published static assets.

Keep preview content free of secrets and customer data. Future payment,
authentication and provisioning integrations require separate sandbox settings;
an isolated preview URL alone does not isolate external services.
