.PHONY: install install-be install-fe dev dev-be dev-fe test test-be test-fe clean

# ── Install ──────────────────────────────────────────────
install: install-be install-fe

install-be:
	cd backend && uv venv .venv && . .venv/bin/activate && uv pip install -e ".[dev]"

install-fe:
	cd frontend && npm install

# ── Development ──────────────────────────────────────────
dev:
	$(MAKE) dev-be & $(MAKE) dev-fe & wait

dev-be:
	cd backend && . .venv/bin/activate && uvicorn app.main:app --reload --port 8000

dev-fe:
	cd frontend && npm run dev

# ── Test ─────────────────────────────────────────────────
test: test-be test-fe

test-be:
	cd backend && . .venv/bin/activate && python -m pytest || test $$? -eq 5

test-fe:
	cd frontend && npm test

# ── Clean ────────────────────────────────────────────────
clean:
	rm -rf backend/.venv backend/__pycache__ backend/*.egg-info
	rm -rf frontend/node_modules frontend/dist
