# SQL AI Query Agent

An intelligent SQL query generator powered by AI. Ask natural language questions and get SQL queries in return.

## Demo

Try it out here: [https://sql-ai-query-agent.vercel.app/](https://sql-ai-query-agent.vercel.app/)

## Features

- Natural language to SQL query conversion
- AI-powered query generation using Claude
- Real-time query processing
- Clean and intuitive user interface

## Tech Stack

- **Frontend**: Next.js, React
- **AI**: Anthropic Claude API via `@ai-sdk`
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd sql-agent
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file with:
```env
ANTHROPIC_API_KEY=your_api_key_here
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Usage

1. Visit the application
2. Enter your natural language question about SQL
3. The AI will generate an appropriate SQL query
4. View and copy the generated query

## Development

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## License

MIT
