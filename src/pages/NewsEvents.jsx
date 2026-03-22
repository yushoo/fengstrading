import { useState, useEffect } from 'react'
import { fetchAllSheetData } from '../utils/sheetsData'
import './NewsEvents.css'

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d)) return dateStr
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function formatDateRange(start, end) {
  if (!start) return ''
  if (!end || start === end) return formatDate(start)
  return `${formatDate(start)} – ${formatDate(end)}`
}

function getMonthDay(dateStr) {
  if (!dateStr) return { month: '', day: '' }
  const d = new Date(dateStr)
  if (isNaN(d)) {
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

  useEffect(() => {
    fetchAllSheetData().then(d => {
      setData(d)
      setLoading(false)
    })
  }, [])

  const shows = data?.shows ?? []
  const updates = (data?.updates ?? []).filter(u => u['Show on Website']?.trim().toLowerCase() === 'yes')

  const activeShows = shows
    .filter(s => s['Status'] === 'Now' || s['Status'] === 'Upcoming')
    .sort((a, b) => {
      const da = new Date(a['Start Date'])
      const db = new Date(b['Start Date'])
      if (isNaN(da) && isNaN(db)) return 0
      if (isNaN(da)) return 1
      if (isNaN(db)) return -1
      return da - db
    })
  const currentShow = shows.find(s => s['Status'] === 'Now')

  return (
    <div className="news-events-page">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}

      {/* ── Currently At banner ──────────────────────────────────────────────── */}
      {!loading && currentShow && (
        <div className="ne-currently-at">
          <div className="container ne-currently-inner">
            <div className="ne-currently-left">
              <span className="ne-pulse-dot" />
              <div>
                <div className="ne-currently-label">We&apos;re currently at</div>
                <div className="ne-currently-name">{currentShow['Event']}</div>
                <div className="ne-currently-detail">
                  {currentShow['Venue']} &nbsp;·&nbsp; {(currentShow['Booth'] || currentShow['Booth #']) ? `Booth ${currentShow['Booth'] || currentShow['Booth #']} ·` : ''}
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

      {/* ── Shows ────────────────────────────────────────────────────────────── */}
      <section className="section ne-shows-section">
        <div className="container">
          <div className="section-header">
            <h2>Gem Shows</h2>
            <div className="divider" />
            <p>Our Houston store remains open while we travel to gem and trunk shows across the country</p>
          </div>

          {loading ? (
            <div className="ne-loading">Loading show schedule…</div>
          ) : activeShows.length === 0 ? (
            <p className="ne-empty">No upcoming shows scheduled yet — check back soon!</p>
          ) : (
            <ul className="ne-shows-list">
              {activeShows.map((show, i) => {
                const { month, day } = getMonthDay(show['Start Date'])
                return (
                  <li key={i} className="ne-show-card">
                    <div className="ne-date-block">
                      <span className="ne-date-month">{month}</span>
                      <span className="ne-date-day">{day}</span>
                    </div>
                    <div className="ne-show-info">
                      <h3 className="ne-show-name">{show['Event']}</h3>
                      <div className="ne-show-meta">
                        <span className="ne-show-venue">{show['Venue']}</span>
                        <span className="ne-show-sep">·</span>
                        <span className="ne-show-city">{show['City']}</span>
                        {show['Start Date'] && (
                          <>
                            <span className="ne-show-sep">·</span>
                            <span className="ne-show-dates">{formatDateRange(show['Start Date'], show['End Date'])}</span>
                          </>
                        )}
                      </div>
                      {show['Notes'] && (
                        <p className="ne-show-notes">{show['Notes']}</p>
                      )}
                    </div>
                    <div className="ne-show-tags">
                      {(show['Booth'] || show['Booth #']) && (
                        <span className="ne-tag ne-tag-booth">Booth {show['Booth'] || show['Booth #']}</span>
                      )}
                      <span className={`ne-tag ne-tag-${(show['Status'] ?? 'upcoming').toLowerCase()}`}>
                        {show['Status'] === 'Now' ? 'Now' : 'Upcoming'}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>

      {/* ── Updates ──────────────────────────────────────────────────────────── */}
      <section className="section ne-updates-section">
        <div className="container">
          <div className="section-header">
            <h2>Updates</h2>
            <div className="divider" />
          </div>

          {loading ? (
            <div className="ne-loading">Loading updates…</div>
          ) : (
            <div className="ne-timeline">
              {updates.map((update, i) => (
                <div key={i} className="ne-timeline-item">
                  <div className="ne-timeline-content">
                    <div className="ne-timeline-meta">
                      <span className={`ne-type-pill ne-type-${(update['Type'] ?? '').toLowerCase()}`}>
                        {update['Type']}
                      </span>
                      <span className="ne-timeline-date">{formatDate(update['Date'])}</span>
                    </div>
                    <h3 className="ne-timeline-title">{update['Title']}</h3>
                    <p className="ne-timeline-body">{update['Body']}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>


    </div>
  )
}
