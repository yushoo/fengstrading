import { useState, useEffect } from 'react'
import { fetchAllSheetData } from '../utils/sheetsData'
import './NewsEvents.css'

const UPDATE_ICONS = {
  Show: '🗺️',
  Shipment: '📦',
  Announcement: '📣',
}

function formatDateRange(start, end) {
  if (!start) return ''
  if (!end || start === end) return start
  return `${start} – ${end}`
}

function getMonthDay(dateStr) {
  if (!dateStr) return { month: '', day: '' }
  const d = new Date(dateStr)
  if (isNaN(d)) {
    // Try to extract from human-readable like "Apr 4, 2026"
    const parts = dateStr.split(' ')
    return { month: parts[0] ?? '', day: parts[1]?.replace(',', '') ?? '' }
  }
  return {
    month: d.toLocaleDateString('en-US', { month: 'short' }),
    day: String(d.getDate()),
  }
}

export default function NewsEvents() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')

  useEffect(() => {
    fetchAllSheetData().then(d => {
      setData(d)
      setLoading(false)
    })
  }, [])

  const shows = data?.shows ?? []
  const arrivals = data?.arrivals ?? []
  const updates = data?.updates ?? []

  const currentShow = shows.find(s => s['Status'] === 'Now')
  const upcomingShows = shows.filter(s => s['Status'] === 'Upcoming')

  const totalShows = shows.filter(s => s['Status'] !== 'Past').length
  const totalArrivals = arrivals.length

  return (
    <div className="news-events-page">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="ne-hero">
        <div className="container">
          <span className="ne-season-badge">✦ 2026 Season</span>
          <h1>News &amp; Events</h1>
          <p className="ne-hero-sub">
            Stay up to date on where we&apos;ll be, what just arrived,<br className="ne-br" />
            and the latest from Feng&apos;s Trading.
          </p>
        </div>
      </section>

      {/* ── Currently At banner ──────────────────────────────────────────────── */}
      {!loading && currentShow && (
        <div className="ne-currently-at">
          <div className="container ne-currently-inner">
            <div className="ne-currently-left">
              <span className="ne-pulse-dot" />
              <div>
                <div className="ne-currently-label">We&apos;re currently at</div>
                <div className="ne-currently-name">{currentShow['Show Name']}</div>
                <div className="ne-currently-detail">
                  {currentShow['Venue']} &nbsp;·&nbsp; Booth {currentShow['Booth']}
                  &nbsp;·&nbsp; {formatDateRange(currentShow['Start Date'], currentShow['End Date'])}
                </div>
              </div>
            </div>
            <a
              className="btn btn-outline ne-directions-btn"
              href={`https://maps.google.com/?q=${encodeURIComponent(currentShow['Venue'] + ' ' + currentShow['City'])}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions ↗
            </a>
          </div>
        </div>
      )}

      {/* ── Upcoming Shows ───────────────────────────────────────────────────── */}
      <section className="section ne-shows-section">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Shows</h2>
            <div className="divider" />
            <p>Find us at these gem &amp; mineral shows across the country</p>
          </div>

          {loading ? (
            <div className="ne-loading">Loading show schedule…</div>
          ) : upcomingShows.length === 0 ? (
            <p className="ne-empty">No upcoming shows scheduled yet — check back soon!</p>
          ) : (
            <ul className="ne-shows-list">
              {upcomingShows.map((show, i) => {
                const { month, day } = getMonthDay(show['Start Date'])
                return (
                  <li key={i} className="ne-show-card">
                    <div className="ne-date-block">
                      <span className="ne-date-month">{month}</span>
                      <span className="ne-date-day">{day}</span>
                    </div>
                    <div className="ne-show-info">
                      <h3 className="ne-show-name">{show['Show Name']}</h3>
                      <div className="ne-show-meta">
                        <span className="ne-show-venue">{show['Venue']}</span>
                        <span className="ne-show-sep">·</span>
                        <span className="ne-show-city">{show['City']}</span>
                      </div>
                      {show['Notes'] && (
                        <p className="ne-show-notes">{show['Notes']}</p>
                      )}
                    </div>
                    <div className="ne-show-tags">
                      {show['Booth'] && (
                        <span className="ne-tag ne-tag-booth">Booth {show['Booth']}</span>
                      )}
                      <span className="ne-tag ne-tag-upcoming">Upcoming</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>

      {/* ── New Arrivals ─────────────────────────────────────────────────────── */}
      <section className="section ne-arrivals-section">
        <div className="container">
          <div className="section-header">
            <h2>New Arrivals</h2>
            <div className="divider" />
            <p>Fresh inventory just in — first picks available at shows</p>
          </div>

          {loading ? (
            <div className="ne-loading">Loading arrivals…</div>
          ) : (
            <div className="ne-arrivals-grid">
              {arrivals.map((item, i) => (
                <div key={i} className="ne-arrival-card">
                  <div className="ne-arrival-img">
                    <span className="ne-arrival-category">{item['Category']}</span>
                  </div>
                  {item['Badge'] && (
                    <span className={`ne-badge ne-badge-${item['Badge'].toLowerCase()}`}>
                      {item['Badge']}
                    </span>
                  )}
                  <div className="ne-arrival-body">
                    <h4 className="ne-arrival-name">{item['Item Name']}</h4>
                    <p className="ne-arrival-desc">{item['Description']}</p>
                    <div className="ne-arrival-footer">
                      <span className="ne-arrival-qty">{item['Quantity']}</span>
                      <span className="ne-arrival-date">{item['Date Arrived']}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Updates feed + sidebar ───────────────────────────────────────────── */}
      <section className="section ne-updates-section">
        <div className="container">
          <div className="ne-updates-layout">

            {/* Timeline feed */}
            <div className="ne-updates-feed">
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                <h2>Recent Updates</h2>
                <div className="divider" style={{ margin: '0.75rem 0 1rem' }} />
              </div>

              {loading ? (
                <div className="ne-loading">Loading updates…</div>
              ) : (
                <div className="ne-timeline">
                  {updates.map((update, i) => (
                    <div key={i} className="ne-timeline-item">
                      <div className="ne-timeline-icon">
                        {UPDATE_ICONS[update['Type']] ?? '📌'}
                      </div>
                      <div className="ne-timeline-content">
                        <div className="ne-timeline-meta">
                          <span className={`ne-type-pill ne-type-${(update['Type'] ?? '').toLowerCase()}`}>
                            {update['Type']}
                          </span>
                          <span className="ne-timeline-date">{update['Date']}</span>
                        </div>
                        <h3 className="ne-timeline-title">{update['Title']}</h3>
                        <p className="ne-timeline-body">{update['Body']}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="ne-sidebar">

              <div className="ne-sidebar-box">
                <h4 className="ne-sidebar-heading">At a Glance</h4>
                <ul className="ne-glance-list">
                  <li>
                    <span className="ne-glance-num">{totalShows}</span>
                    <span className="ne-glance-label">Shows this season</span>
                  </li>
                  <li>
                    <span className="ne-glance-num">{totalArrivals}</span>
                    <span className="ne-glance-label">New arrivals</span>
                  </li>
                  <li>
                    <span className="ne-glance-num">{currentShow ? '1' : '0'}</span>
                    <span className="ne-glance-label">Active show right now</span>
                  </li>
                </ul>
              </div>

              <div className="ne-sidebar-box">
                <h4 className="ne-sidebar-heading">Quick Links</h4>
                <ul className="ne-quick-links">
                  <li><a href="/gallery">Browse the Gallery →</a></li>
                  <li><a href="/contact">Contact Us →</a></li>
                  <li><a href="/about">About Feng&apos;s Trading →</a></li>
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ── Email notify banner ──────────────────────────────────────────────── */}
      <section className="ne-notify-banner">
        <div className="container ne-notify-inner">
          <div className="ne-notify-text">
            <h2>Get Show Alerts</h2>
            <p>We&apos;ll let you know when we&apos;re coming to a city near you.</p>
          </div>
          <form className="ne-notify-form" onSubmit={e => { e.preventDefault(); setEmail('') }}>
            <input
              type="email"
              className="ne-email-input"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary ne-notify-btn">
              Notify Me
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}
