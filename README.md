# StoryBook

A nature and travel themed web application with maps and mountains.

## Tech Stack

- **Backend**: Python (FastAPI) — managed with Poetry + uv
- **Frontend**: React + TypeScript (Vite)

## Quick Start

```bash
make install    # Install all dependencies
make dev        # Start both backend and frontend dev servers
```

## Project Structure

```
backend/     - FastAPI application (Python)
frontend/    - React + Vite application (TypeScript)
design/      - Design previews and mockups
```

## Available Commands

| Command        | Description                          |
|----------------|--------------------------------------|
| `make install` | Install backend and frontend deps    |
| `make dev`     | Start both dev servers               |
| `make dev-be`  | Start backend dev server only        |
| `make dev-fe`  | Start frontend dev server only       |
| `make test`    | Run all tests                        |
| `make clean`   | Remove build artifacts and caches    |

## Design

Open `design/preview.html` in a browser to see the color palette, typography, and layout mockups.

## License

GPL-3.0 — see [LICENSE](LICENSE)
