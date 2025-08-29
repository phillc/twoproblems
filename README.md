
# Programming Jokes Collection

A collection of programming-related jokes rendered with Next.js. View the live site at [twoproblems.dev](https://twoproblems.dev).

## Contributing Jokes

We welcome contributions! To add a new programming joke:

1. Fork this project in GitHub
2. Add your joke to `data/jokes.yml` following this format:
```yaml
  - topic: "your programming topic"
    punchlines:
      - text: "your punchline"
        attribution: "Optional Author Name" # optional
        url: "https://optional-source-url" # optional
```
3. Create a pull request

### Guidelines for Jokes

- Keep jokes programming/technology-related
- Avoid offensive or inappropriate content
- Multiple punchlines are allowed per topic

### Example Joke Entry
```yaml
  - topic: "python"
    punchlines:
      - text: "Now they have indentation problems."
      - text: "Now they have snake problems."
```

## Local Development

First, run the development server:

```bash
npm run dev
```

Open [http://0.0.0.0:3000](http://0.0.0.0:3000) in your browser to see the result.

## Deployment (GitHub Pages)

This site is statically exported with Next.js and deployed to GitHub Pages.

- The workflow in `.github/workflows/pages.yml` builds the site and publishes the `out/` directory.
- It automatically sets a `BASE_PATH` for project pages (e.g., `username.github.io/repo-name`).
- For user/organization pages (`username.github.io`), `BASE_PATH` is empty.

To enable Pages:

1. Push the repository to GitHub with a `main` branch.
2. In the GitHub repo, go to Settings → Pages.
3. Set Source to "GitHub Actions".
4. Push to `main` to trigger deployment.

Notes:

- We include `public/.nojekyll` to prevent GitHub Pages from processing files that start with underscores (used by Next.js assets).
- If you fork under a different repo name, the workflow will adapt the base path automatically.

## Built With

- Next.js
- TypeScript
- YAML for joke data
