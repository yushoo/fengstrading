import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

function getLastUpdatedDate() {
  try {
    return execSync('git log -1 --format=%cd --date=format:%Y-%m-%d').toString().trim()
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __LAST_UPDATED__: JSON.stringify(getLastUpdatedDate()),
  },
})
