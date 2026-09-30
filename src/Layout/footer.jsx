





function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-column footer-about">
          <div className="footer-logo">
            <strong>Addis Eats</strong>
          </div>

          <p>
            Addis Eats is the meal popular and renowned delicious
            food preparing platform in Addis Ababa, specializing
            in authentic Ethiopian culinary heritage with freshly
            prepared meals delivered directly to your door.
          </p>

          <div className="footer-socials">
            
            <span>◉</span>
            <span>◎</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/menu">Our Full Menu</a>
          <a href="/orders">Orders</a>
          <a href="/cart">Cart</a>
          
        </div>

        {/* Locations */}
        <div className="footer-column">
          <h4>Locations & Hours</h4>
          <p>Addis Ababa, Ethiopia</p>

          <div className="hours">
            <span>◷</span>
            <strong>14 hours open</strong>
          </div>
        </div>

        {/* Payment */}
        <div className="footer-column">
          <h4>Payment</h4>

          <p>
            We accept secure and convenient
            payment options.
          </p>

          <div className="payment-methods">
            <span>Telebirr</span>
            <span>CBE birr</span>
            <span>Bank Transfer</span>
            <span>m-Pesa</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Addis Eats. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;