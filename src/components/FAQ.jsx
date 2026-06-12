import { useState } from 'react'

const faqs = [
  {
    q: 'How early should I book my Umrah?',
    a: 'We recommend booking 6–8 weeks in advance for standard packages, and 3–4 months for Ramadan or VIP packages where premium hotels sell out quickly.',
  },
  {
    q: 'Do you handle Umrah visas?',
    a: 'Yes — full visa processing, biometrics coordination and Saudi MoFA approvals are included in every package. Our visa team has a 99% approval rate.',
  },
  {
    q: 'Can elderly parents travel comfortably?',
    a: 'Absolutely. Wheelchair assistance, dedicated guides, ground-floor hotel rooms and direct flights are standard on our family and VIP packages.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Bank Transfer, JazzCash, Easypaisa and Cash. A partial advance reserves your package; the balance is settled before departure.',
  },
  {
    q: 'Do you arrange custom group Umrah?',
    a: 'Yes — for masajid, schools, corporate groups and extended families of 15+, we design fully customised itineraries with dedicated mutawif and ground support.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="container">
        <p className="section-label reveal">Common Questions</p>
        <h2 className="section-title reveal">Everything you need to know.</h2>

        <div className="faq-list reveal">
          {faqs.map((item, index) => (
            <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={item.q}>
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{item.q}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && <p className="faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
