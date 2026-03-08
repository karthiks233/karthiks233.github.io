const contacts = [
  {
    icon: '/assets/email.png',
    label: 'Email',
    value: 'karthiks233@gmail.com',
    href: 'mailto:karthiks233@gmail.com',
  },
  {
    icon: '/assets/linkedin.png',
    label: 'LinkedIn',
    value: 'karthikrajasubramanian99',
    href: 'https://www.linkedin.com/in/karthik-raja-b22459171/',
    external: true,
  },
  {
    icon: '/assets/github.png',
    label: 'GitHub',
    value: 'karthiks233',
    href: 'https://github.com/karthiks233/',
    external: true,
  },
  {
    icon: '/assets/phone.png',
    label: 'Phone',
    value: '+1 (781) 921-6685',
    href: 'tel:+17819216685',
  },
];

const Contact = () => (
  <div className="page contact-page">
    <div className="section-header">
      <p className="section-label">Get in Touch</p>
      <h1 className="section-title">Contact Me</h1>
      <p className="contact-tagline">
        I'm currently open to new opportunities — feel free to reach out!
      </p>
    </div>
    <div className="contact-cards">
      {contacts.map(c => (
        <a
          key={c.label}
          href={c.href}
          className="contact-card"
          {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <img src={c.icon} alt={c.label} />
          <div className="contact-card-info">
            <div className="label">{c.label}</div>
            <div className="value">{c.value}</div>
          </div>
          <span className="contact-arrow">→</span>
        </a>
      ))}
    </div>
  </div>
);

export default Contact;
