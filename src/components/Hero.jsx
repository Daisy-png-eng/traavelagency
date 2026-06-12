function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1513072064285-240f87fa81e8?auto=format&fit=crop&w=1920&q=80"
          alt="Pilgrims praying around the Kaaba in Masjid al-Haram, Mecca"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <p className="hero-arabic">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p className="hero-tagline">Since 2009 · House of Trust</p>
        <h1 className="hero-title">
          Experience Umrah with <em>Trust, Luxury</em> &amp; Peace of Mind
        </h1>
        <p className="hero-subtitle">
          Crafted journeys to Makkah and Madinah for families, elders, and VIP travellers —
          guided by Lahore's most trusted Umrah house since 2009.
        </p>

        <div className="hero-buttons">
          <a href="#packages" className="btn btn-primary">Explore Packages</a>
          <a href="#contact" className="btn btn-outline">Book Consultation</a>
          <a href="https://wa.me/923281887646" className="btn btn-outline">WhatsApp</a>
        </div>

        <div className="hero-meta">
          <p>4.9 / 5 from 2,400+ pilgrim families</p>
          <p>IATA approved · Saudi MoFA licensed</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
