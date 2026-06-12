const reasons = [
  {
    title: 'Licensed & Trusted',
    text: 'Saudi MoFA approved with full IATA accreditation and complete travel insurance for every pilgrim.',
  },
  {
    title: 'Premium Experience',
    text: 'Hand-picked 5★ hotels, premium airlines and chauffeured ground transport — every detail considered.',
  },
  {
    title: 'Family First',
    text: 'Dedicated arrangements for elders, women and children — wheelchairs, meals and prayer guidance.',
  },
  {
    title: 'Best Airlines',
    text: 'Direct flights via Saudia, Emirates and Qatar Airways with business-class options on VIP packages.',
  },
  {
    title: 'Haram-View Hotels',
    text: 'Partnerships with Fairmont, Hilton Suites and Pullman Zamzam — many within 200m of the Haram.',
  },
  {
    title: 'Personal Guidance',
    text: 'Multilingual Pakistani mutawif on the ground in Makkah and Madinah, available 24/7 for your group.',
  },
]

function WhyChooseUs() {
  return (
    <section className="why-choose" id="why-choose">
      <div className="container">
        <p className="section-label reveal">Why Liaqat Haseeb</p>
        <h2 className="section-title reveal">
          Six reasons families return to us, year after year.
        </h2>

        <div className="why-grid reveal-stagger reveal">
          {reasons.map((r) => (
            <div className="why-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
