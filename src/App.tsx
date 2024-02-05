import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s  - pizza.shop" />
        <ThemeProvider storageKey="pizzashop-theme">
          <QueryClientProvider client={queryClient} />
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
      <Toaster richColors />
    </>
  )
}
