# AI Agent Marketplace Backend

This is a simple Express.js backend for the AI Agent Rental Marketplace.

## Features
- List AI agents by category
- Get agent details
- Mock agent rental endpoint

## Running Locally

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

The API will be available at `http://localhost:3001/api/agents`.

## Endpoints
- `GET /api/agents` — List all agents
- `GET /api/agents/:id` — Get agent details
- `POST /api/rent` — Rent an agent (mock)
