const packages = [
  {
    tag: 'Essential',
    title: 'Economy Umrah',
    duration: '14 Nights',
    price: 'PKR 285,000',
    featured: false,
    features: [
      '4★ Hotels near Haram',
      'Direct flights',
      'Bus transport throughout',
      'Visa & ticket included',
    ],
  },
  {
    tag: 'Standard',
    title: 'Comfort Umrah',
    duration: '14 Nights',
    price: 'PKR 325,000',
    featured: false,
    features: [
      '4★ Hotels near Haram',
      'JED ⇄ MAK by private car',
      'MAK ⇄ MAD by bus',
      'Visa & ticket included',
    ],
  },
  {
    tag: 'Signature',
    title: 'Premium Family Umrah',
    duration: '14 Nights',
    price: 'PKR 485,000',
    featured: true,
    badge: 'Most chosen',
    features: [
      '5★ Hotels — 400m view',
      'Premium airlines',
      'Private car per pax (Sedan → GMC / Coaster)',
      'Dedicated guide',
    ],
  },
  {
    tag: 'Extended',
    title: 'Economy Umrah — 20 Nights',
    duration: '20 Nights / 21 Days',
    price: 'PKR 345,000',
    featured: false,
    features: [
      '4★ Hotels near Haram',
      'Direct flights',
      'Bus transport throughout',
      'Extended spiritual stay',
    ],
  },
  {
    tag: 'Extended',
    title: 'Premium Umrah — 20 Nights',
    duration: '20 Nights / 21 Days',
    price: 'PKR 595,000',
    featured: false,
    features: [
      '5★ Hotels near Haram',
      'Premium economy flights',
      'Private vehicle for your group',
      'Dedicated guide',
    ],
  },
  {
    tag: 'VIP',
    title: 'Royal Umrah Experience',
    duration: '10 Nights',
    price: 'PKR 1,250,000',
    featured: false,
    features: [
      'Haram-view suites',
      'Business class direct',
      'Chauffeured GMC transfers',
      'Personal mutawif',
    ],
  },
]

function Packages() {
  return (
    <section className="packages" id="packages">
      <div className="container">
        <div className="packages-header reveal">
          <div>
            <p className="section-label">Featured Packages</p>
            <h2 className="section-title">
              Curated journeys to the <em>Holy Cities</em>.
            </h2>
          </div>
          <a href="#packages" className="link-arrow">View all packages</a>
        </div>

        <div className="packages-grid reveal-stagger reveal">
          {packages.map((pkg) => (
            <div className={`package-card ${pkg.featured ? 'featured' : ''}`} key={pkg.title}>
              {pkg.badge && <span className="package-badge">{pkg.badge}</span>}
              <p className="package-tag">{pkg.tag}</p>
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-duration">{pkg.duration}</p>
              <p className="package-price">
                {pkg.price}
                <span className="package-per">/ per person</span>
              </p>
              <ul className="package-features">
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary package-btn">Reserve this journey</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
