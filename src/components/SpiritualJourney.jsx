function SpiritualJourney() {
  return (
    <section className="spiritual">
      <div className="spiritual-bg">
        <img
          src="https://images.unsplash.com/photo-1722966678621-5eb1eb46beda?auto=format&fit=crop&w=1600&q=80"
          alt="Pilgrims walking near Masjid Nabawi in Madinah"
        />
        <div className="spiritual-overlay"></div>
      </div>

      <div className="container spiritual-content reveal">
        <p className="spiritual-arabic">السلام عليكم</p>
        <p className="section-label">A journey of the heart</p>
        <p className="spiritual-eyebrow">The Spiritual Journey</p>
        <h2 className="section-title">
          More than travel — a <em>sacred passage</em>.
        </h2>
        <p className="spiritual-text">
          Every Umrah we arrange is treated as one we would book for our own parents. From the
          moment you sign your contract to your safe return home, our team in Lahore and Saudi
          Arabia surrounds you with quiet, attentive care — so your heart is free to focus on
          what matters.
        </p>

        <blockquote className="spiritual-quote">
          <p>"We treat every pilgrim as our honoured guest, and every family as our own."</p>
          <cite>— Jam Liaqat Fareed, Founder &amp; CEO</cite>
        </blockquote>

        <div className="spiritual-cards reveal-stagger reveal">
          <div className="spiritual-card">
            <img
              src="https://images.unsplash.com/photo-1692977579997-948328cdb7d2?auto=format&fit=crop&w=600&q=80"
              alt="Al-Masjid an-Nabawi green dome in Madinah"
            />
            <p className="spiritual-card-tag">Madinah Munawwarah</p>
            <h3>Eight nights at the City of the Prophet ﷺ</h3>
          </div>
          <div className="spiritual-card">
            <img
              src="https://images.unsplash.com/photo-1565330770968-0240c0046ce3?auto=format&fit=crop&w=600&q=80"
              alt="Masjid al-Haram and the Kaaba in Makkah"
            />
            <p className="spiritual-card-tag">VIP Stays</p>
            <h3>Suites with a view of the Haram</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpiritualJourney
