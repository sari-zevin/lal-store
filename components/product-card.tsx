'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useCart } from '@/components/cart/cart-provider'
import { formatPrice, type Product } from '@/lib/products'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [activeVariant, setActiveVariant] = useState(product.variants[0])
  const hasVariants = product.variants.length > 1

  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-secondary/60">
        <Link href={`/product/${product.slug}`} aria-label={product.name}>
          <div className="relative aspect-[4/5]">
            <Image
              src={activeVariant.image || '/placeholder.svg'}
              alt={`${product.name} — ${activeVariant.name}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {product.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-card/90 px-3 py-1 text-[11px] font-semibold text-primary shadow-sm backdrop-blur">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() =>
            addItem({
              productSlug: product.slug,
              variantId: activeVariant.id,
              name: product.name,
              variantName: activeVariant.name,
              price: product.price,
              image: activeVariant.image,
            })
          }
          className="absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-full bg-card text-primary shadow-md transition hover:bg-primary hover:text-primary-foreground"
          aria-label={`הוספת ${product.name} לעגלה`}
        >
          <Plus className="size-5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col px-1 pt-3">
        {hasVariants && (
          <div className="mb-2 flex items-center gap-1.5">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                onClick={() => setActiveVariant(variant)}
                className={cn(
                  'size-4 rounded-full border transition',
                  activeVariant.id === variant.id
                    ? 'ring-2 ring-primary ring-offset-1 ring-offset-background'
                    : 'border-border',
                )}
                style={{ backgroundColor: variant.swatch }}
                aria-label={`בחירת גוון ${variant.name}`}
                aria-pressed={activeVariant.id === variant.id}
                title={variant.name}
              />
            ))}
          </div>
        )}

        <Link href={`/product/${product.slug}`} className="flex flex-1 flex-col">
          <h3 className="text-sm font-semibold leading-snug text-foreground text-pretty">
            {product.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{product.tagline}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  )
}
