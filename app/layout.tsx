import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Assistant, Frank_Ruhl_Libre } from 'next/font/google'
import { CartProvider } from '@/components/cart/cart-provider'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  variable: '--font-assistant',
  display: 'swap',
})

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-frank-ruhl',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'lal — מוצרי טיפוח וגוף יוקרתיים',
  description:
    'lal — קולקציית טיפוח וגוף יוקרתית. מגבות ענן, שמני גוף, סבונים בעבודת יד ואביזרי רחצה בגוונים פסטליים רכים.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f2ea',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`light bg-background ${assistant.variable} ${frankRuhl.variable}`}
    >
      <body className="font-sans antialiased">
        <CartProvider>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
