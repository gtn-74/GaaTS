
## vitest.setup.ts
```typescript
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

vi.mock('next/image', () => ({
  default: vi.fn((props) => <img {...props} />),
}))
```

## vite.config.mts
```typescript

import 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default {
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      './**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      './**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    setupFiles: ['../../../../vitest.setup.tsx'],
  },
}
```