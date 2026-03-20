// Google Sheets public CSV fetcher
// Set VITE_GOOGLE_SHEET_ID in your .env file to connect live data

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID

function sheetUrl(tabName) {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tabName)}`
}

// Parse CSV properly — handles quoted fields that contain commas or newlines
function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    const next = text[i + 1]

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"'
        i++
      } else if (ch === '"') {
        inQuotes = false
      } else {
        field += ch
      }
    } else {
      if (ch === '"') {
        inQuotes = true
      } else if (ch === ',') {
        row.push(field.trim())
        field = ''
      } else if (ch === '\r' && next === '\n') {
        row.push(field.trim())
        rows.push(row)
        row = []
        field = ''
        i++
      } else if (ch === '\n' || ch === '\r') {
        row.push(field.trim())
        rows.push(row)
        row = []
        field = ''
      } else {
        field += ch
      }
    }
  }
  if (field || row.length > 0) {
    row.push(field.trim())
    rows.push(row)
  }

  return rows
}

function rowsToObjects(rows) {
  if (rows.length < 2) return []
  const headers = rows[0].map(h => h.trim())
  return rows.slice(1).filter(r => r.some(cell => cell !== '')).map(row => {
    const obj = {}
    headers.forEach((h, i) => { obj[h] = row[i] ?? '' })
    return obj
  })
}

async function fetchTab(tabName) {
  const res = await fetch(sheetUrl(tabName))
  if (!res.ok) throw new Error(`Failed to fetch tab "${tabName}": ${res.status}`)
  const text = await res.text()
  return rowsToObjects(parseCsv(text))
}

// ── Fallback sample data ──────────────────────────────────────────────────────

export const SAMPLE_SHOWS = [
  {
    'Show Name': 'Denver Gem & Mineral Show',
    'City': 'Denver, CO',
    'Venue': 'Denver Mart',
    'Booth': 'B-24',
    'Start Date': 'Mar 14, 2026',
    'End Date': 'Mar 16, 2026',
    'Status': 'Now',
    'Notes': 'Largest show of the spring season!',
  },
  {
    'Show Name': 'Tucson Gem & Mineral Showcase',
    'City': 'Tucson, AZ',
    'Venue': 'Tucson Convention Center',
    'Booth': 'Hall D — Table 12',
    'Start Date': 'Apr 4, 2026',
    'End Date': 'Apr 6, 2026',
    'Status': 'Upcoming',
    'Notes': 'Huge turquoise selection this year',
  },
  {
    'Show Name': 'Dallas Bead & Gem Expo',
    'City': 'Dallas, TX',
    'Venue': 'Market Center',
    'Booth': 'Row 7, Table 3',
    'Start Date': 'May 9, 2026',
    'End Date': 'May 11, 2026',
    'Status': 'Upcoming',
    'Notes': '',
  },
  {
    'Show Name': 'Atlanta Rock & Gem Festival',
    'City': 'Atlanta, GA',
    'Venue': 'Infinite Energy Center',
    'Booth': 'Booth 118',
    'Start Date': 'Jun 20, 2026',
    'End Date': 'Jun 22, 2026',
    'Status': 'Upcoming',
    'Notes': 'New fossil collection debuting here',
  },
]

export const SAMPLE_ARRIVALS = [
  {
    'Item Name': 'Amethyst Geode Clusters',
    'Description': 'Deep purple cathedral geodes from Uruguay, stunning centerpieces',
    'Category': 'Minerals',
    'Quantity': '18 pieces',
    'Date Arrived': 'Mar 10, 2026',
    'Badge': 'New',
  },
  {
    'Item Name': 'Freshwater Pearl Strands',
    'Description': 'AA-grade baroque and round pearls, 16" strands in white & lavender',
    'Category': 'Pearls',
    'Quantity': '45 strands',
    'Date Arrived': 'Mar 8, 2026',
    'Badge': 'Popular',
  },
  {
    'Item Name': 'Labradorite Cabochons',
    'Description': 'Blue-green flash labradorite, hand-shaped, perfect for pendants',
    'Category': 'Gemstones',
    'Quantity': '60 pieces',
    'Date Arrived': 'Mar 5, 2026',
    'Badge': 'New',
  },
  {
    'Item Name': 'Trilobite Fossils',
    'Description': 'Authentic Moroccan trilobites, museum-quality specimens',
    'Category': 'Fossils',
    'Quantity': '12 pieces',
    'Date Arrived': 'Feb 28, 2026',
    'Badge': 'Popular',
  },
]

export const SAMPLE_UPDATES = [
  {
    'Title': 'We\'re at Denver Mart this weekend!',
    'Body': 'Come find us at Booth B-24. We\'ve brought a full display of new spring arrivals including amethyst geodes, labradorite, and our freshwater pearl collection.',
    'Date': 'Mar 14, 2026',
    'Type': 'Show',
  },
  {
    'Title': 'Spring Shipment Has Arrived',
    'Body': 'Our biggest shipment of the year just landed — amethyst geodes, pearl strands, labradorite cabs, and trilobite fossils are now in stock. First picks go to show customers.',
    'Date': 'Mar 10, 2026',
    'Type': 'Shipment',
  },
  {
    'Title': 'Tucson Recap — Thank You!',
    'Body': 'What an incredible show! We sold out of our turquoise collection and met so many wonderful collectors. Thank you to everyone who stopped by our booth this year.',
    'Date': 'Feb 12, 2026',
    'Type': 'Show',
  },
  {
    'Title': '2026 Show Season Announced',
    'Body': 'We\'re excited to share our full 2026 show schedule. This year we\'re expanding to 8 shows across the country — our most ambitious season yet!',
    'Date': 'Jan 5, 2026',
    'Type': 'Announcement',
  },
]

// ── Main export ───────────────────────────────────────────────────────────────

export async function fetchAllSheetData() {
  if (!SHEET_ID) {
    return { shows: SAMPLE_SHOWS, arrivals: SAMPLE_ARRIVALS, updates: SAMPLE_UPDATES, source: 'sample' }
  }

  try {
    const [shows, arrivals, updates] = await Promise.all([
      fetchTab('Shows'),
      fetchTab('Arrivals'),
      fetchTab('Updates'),
    ])
    return { shows, arrivals, updates, source: 'sheets' }
  } catch (err) {
    console.warn('Google Sheets fetch failed, using sample data:', err.message)
    return { shows: SAMPLE_SHOWS, arrivals: SAMPLE_ARRIVALS, updates: SAMPLE_UPDATES, source: 'sample' }
  }
}
