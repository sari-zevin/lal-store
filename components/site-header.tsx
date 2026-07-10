'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { useCart } from '@/components/cart/cart-provider'
import { categories } from '@/lib/products'
import { cn } from '@/lib/utils'

// const navLinks = [
//   { href: '/', label: 'בית' },
//   { href: '/shop', label: 'כל המוצרים' },
//   ...categories.map((c) => ({ href: `/category/${c.slug}`, label: c.name })),
// ]

const navLinks = [
  { href: '/', label: 'בית' },
  { href: '/shop', label: 'כל המוצרים' },
  ...categories.map((c) => ({ href: `/category/${c.slug}`, label: c.name })),
  { href: '/about', label: 'אודות' },
]

export function SiteHeader() {
  const { totalItems, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="bg-primary py-2 text-center text-xs font-medium tracking-wide text-primary-foreground">
        משלוח חינם בהזמנה מעל ₪199 · פינוק יומיומי מבית lal
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-foreground/70 transition hover:bg-secondary lg:hidden"
          aria-label={menuOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <Link href="/" className="shrink-0">
          {/* <Logo className="text-3xl" /> */}
          <Logo className="h-9" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="ניווט ראשי">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={openCart}
          className="relative inline-flex items-center justify-center rounded-full p-2 text-foreground/80 transition hover:bg-secondary"
          aria-label="פתיחת עגלת קניות"
        >
          <ShoppingBag className="size-5" />
          {totalItems > 0 && (
            <span className="absolute -left-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border/60 lg:hidden',
          menuOpen ? 'max-h-96' : 'max-h-0',
          'transition-[max-height] duration-300 ease-in-out',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="ניווט נייד">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
