const stats = [
  { number: '15+', label: 'Years of trusted service' },
  { number: '12,000+', label: 'Pilgrims served' },
  { number: '98%', label: 'Returning families' },
  { number: '24/7', label: 'Saudi ground support' },
]

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <p className="section-label reveal">Our Promise</p>
        <h2 className="section-title reveal">
          A legacy built on <em>trust</em>, perfected over fifteen years.
        </h2>

        <div className="stats-grid reveal-stagger reveal">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <p className="stat-number">{s.number}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
