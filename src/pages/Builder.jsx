import './Builder.css'

export default function Builder() {
  return (
    <div className="builder-page">
      <div className="builder-card">
        <div className="builder-photo-wrap">
          <img src="/website_builder.jpg" alt="Henry" className="builder-photo" />
        </div>
        <h1>Henry Feng</h1>
        <p className="builder-sub">Son of the owners. Website guy.</p>
        <p className="builder-bio">
          Have a suggestion or update for the website? Feel free to reach out on LinkedIn.
        </p>
        <a
          href="https://www.linkedin.com/in/henry-feng-9a11b0129/"
          target="_blank"
          rel="noreferrer"
          className="builder-linkedin"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}
