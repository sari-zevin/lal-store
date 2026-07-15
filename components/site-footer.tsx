import Link from 'next/link'
import { Logo } from '@/components/logo'
import { categories } from '@/lib/products'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          {/* <Logo className="text-3xl" /> */}
          <Logo className="h-8" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            lal היא קולקציית טיפוח וגוף יוקרתית שנוצרה כדי להפוך את שגרת הטיפוח היומית לרגע של פינוק
            אמיתי. מגע רך, גוונים פסטליים ומרכיבים איכותיים.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">קטגוריות</h3>
          <ul className="mt-4 space-y-2.5">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div>
          <h3 className="text-sm font-semibold text-foreground">שירות לקוחות</h3>
          <ul className="mt-4 space-y-2.5">
            {['אודות lal', 'משלוחים והחזרות', 'צור קשר', 'שאלות נפוצות'].map((label) => (
              <li key={label}>
                <span className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div> */}

        <div>
          <h3 className="text-sm font-semibold text-foreground">שירות לקוחות</h3>
          <ul className="mt-4 space-y-2.5">
            {[
              { label: 'אודות lal', href: '/about' },
              { label: 'משלוחים והחזרות', href: '#' },
              { label: 'צור קשר', href: '/contact' },
              { label: 'שאלות נפוצות', href: '#' },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
      </div>

      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} lal. כל הזכויות שמורות.
      </div>
    </footer>
  )
}
