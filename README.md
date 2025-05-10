
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
        attribution: "- Optional Author Name" # optional
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

## Built With

- Next.js
- TypeScript
- YAML for joke data
