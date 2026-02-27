import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-brand">
          <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
            <polygon points="24,6 42,42 6,42" fill="var(--color-sage-green)" opacity="0.8"/>
            <polygon points="16,42 28,18 40,42" fill="var(--color-stone)" opacity="0.6"/>
          </svg>
          StoryBook
        </div>
        <div className="nav-links">
          <a href="#explore">Explore</a>
          <a href="#map">Map</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>
            Explore breathtaking trails, hidden valleys, and mountain vistas.
            Your story begins here.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Start Exploring</button>
            <button className="btn btn-secondary">View Map</button>
          </div>
        </div>
        <div className="hero-art">
          <svg viewBox="0 0 400 200" className="mountain-svg">
            <rect width="400" height="200" fill="var(--color-sky-blue)" opacity="0.2" />
            <polygon points="50,200 150,60 250,200" fill="var(--color-sage-green)" opacity="0.7" />
            <polygon points="150,200 280,40 400,200" fill="var(--color-stone)" opacity="0.6" />
            <polygon points="0,200 120,90 200,200" fill="var(--color-sage-green)" opacity="0.5" />
            <circle cx="320" cy="50" r="25" fill="var(--color-sky-blue)" opacity="0.5" />
          </svg>
        </div>
      </header>

      <section className="features" id="explore">
        <h2>What Awaits</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">&#127956;</div>
            <h3>Trails</h3>
            <p>Curated paths through forests, ridgelines, and alpine meadows.</p>
          </div>
          <div className="card">
            <div className="card-icon">&#128506;</div>
            <h3>Maps</h3>
            <p>Interactive topographic maps with elevation and waypoints.</p>
          </div>
          <div className="card">
            <div className="card-icon">&#9978;</div>
            <h3>Camps</h3>
            <p>Find the perfect spot to rest under the stars.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 StoryBook &middot; Built with nature in mind</p>
      </footer>
    </div>
  )
}

export default App
