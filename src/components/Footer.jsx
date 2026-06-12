function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <p className="logo-main">Liaqat Haseeb</p>
          <p className="logo-sub">Travel &amp; Tours</p>
          <p className="footer-text">
            "Our company is based on trust and commitment." Fifteen years of guiding pilgrims and
            families to the sacred lands with grace, dignity and uncompromising care.
          </p>
          <p className="footer-text">Office No. 40-41, Fero Centre, 54-Shadman Market, Lahore, Pakistan</p>
          <p className="footer-text">+92 42 3546 6400 · 0328 1887646 · 0302 4358407</p>
          <p className="footer-text">liaqathaseebpk786@gmail.com</p>
          <p className="footer-socials">
            <a href="https://www.instagram.com/liaqathaseebpk?igsh=MTRmZDllaWFyd24=">@liaqathaseebpk</a>
            {' | '}
            <a href="https://www.facebook.com/profile.php?id=61587169725600">Facebook</a>
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#packages">Umrah Packages</a></li>
            <li><a href="#packages">VIP Luxury</a></li>
            <li><a href="#packages">Family &amp; Group</a></li>
            <li><a href="#why-choose">About Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p className="footer-text">Seasonal Umrah offers and pilgrimage guidance, sent occasionally.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Liaqat Haseeb Travel &amp; Tours (Pvt) Ltd. All rights reserved.</p>
        <p className="footer-arabic">بسم الله الرحمن الرحيم</p>
      </div>

      <a href="https://wa.me/923281887646" className="whatsapp-float" aria-label="WhatsApp our advisor">
        WhatsApp our advisor
      </a>
    </footer>
  )
}

export default Footer
