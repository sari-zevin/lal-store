'use client'

import { useMemo, useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { categories, products } from '@/lib/products'
import { cn } from '@/lib/utils'

export default function ShopPage() {
  const [active, setActive] = useState<string>('all')

  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.categorySlug === active)),
    [active],
  )

  const filters = [{ slug: 'all', name: 'הכל' }, ...categories]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="font-serif text-4xl text-foreground">כל המוצרים</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          קולקציית הטיפוח המלאה של lal — {products.length} מוצרים
        </p>
      </header>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter.slug}
            type="button"
            onClick={() => setActive(filter.slug)}
            className={cn(
              'rounded-full border px-5 py-2 text-sm font-medium transition',
              active === filter.slug
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary',
            )}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
