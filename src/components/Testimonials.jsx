const testimonials = [
  {
    text: '"Alhamdulillah, our entire family — including my 78-year-old mother — was looked after like royalty. Wheelchair, hotel near the Haram, every prayer arranged. May Allah reward them."',
    name: 'Dr. Ahmed Raza',
    meta: 'Family of 8 · Lahore',
  },
  {
    text: '"I have travelled with many agencies. None match the warmth and discipline of Liaqat Haseeb. Our VIP Umrah was flawless from Islamabad to Madinah."',
    name: 'Mrs. Fatima Ali',
    meta: 'VIP Package · London',
  },
  {
    text: '"Booked three times now. Their guide in Makkah, brother Faisal, made our parents feel safe at every step. This is our family\'s Umrah company for life."',
    name: 'Imran Sheikh',
    meta: 'Returning client · Karachi',
  },
]

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <p className="section-label reveal">Voices of Our Pilgrims</p>
        <h2 className="section-title reveal">
          Trusted by families across <em>three continents</em>.
        </h2>

        <div className="testimonials-grid reveal-stagger reveal">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p className="testimonial-text">{t.text}</p>
              <p className="testimonial-name">{t.name}</p>
              <p className="testimonial-meta">{t.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
