'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Check, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/cart/cart-provider'
import { formatPrice, type Product } from '@/lib/products'
import { cn } from '@/lib/utils'

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [activeVariant, setActiveVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const hasVariants = product.variants.length > 1

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Gallery */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary/60">
          <Image
            src={activeVariant.image || '/placeholder.svg'}
            alt={`${product.name} — ${activeVariant.name}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {product.badge && (
            <span className="absolute right-4 top-4 rounded-full bg-card/90 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
              {product.badge}
            </span>
          )}
        </div>

        {hasVariants && (
          <div className="mt-4 flex gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                onClick={() => setActiveVariant(variant)}
                className={cn(
                  'relative size-16 overflow-hidden rounded-xl border-2 transition sm:size-20',
                  activeVariant.id === variant.id ? 'border-primary' : 'border-transparent',
                )}
                aria-label={`תמונת גוון ${variant.name}`}
              >
                <Image
                  src={variant.image || '/placeholder.svg'}
                  alt={variant.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <p className="text-sm font-medium tracking-wide text-primary">{product.tagline}</p>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
          {product.name}
        </h1>

        <div className="mt-4 flex items-center gap-3">
          <span className="font-serif text-2xl text-foreground">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-base text-muted-foreground line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        <p className="mt-5 leading-relaxed text-foreground/75">{product.description}</p>

        {hasVariants && (
          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold text-foreground">
              בחירת גוון: <span className="font-normal text-muted-foreground">{activeVariant.name}</span>
            </p>
            <div className="flex flex-wrap gap-2.5">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setActiveVariant(variant)}
                  className={cn(
                    'flex items-center gap-2 rounded-full border py-1.5 pe-4 ps-1.5 text-sm transition',
                    activeVariant.id === variant.id
                      ? 'border-primary bg-primary/5 text-foreground'
                      : 'border-border text-foreground/70 hover:border-primary/40',
                  )}
                  aria-pressed={activeVariant.id === variant.id}
                >
                  <span
                    className="size-6 rounded-full border border-border"
                    style={{ backgroundColor: variant.swatch }}
                  />
                  {variant.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity + add to cart */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <div className="flex items-center justify-between rounded-full border border-border px-2 sm:w-36">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="flex size-10 items-center justify-center text-foreground/70 transition hover:text-primary"
              aria-label="הפחתת כמות"
            >
              <Minus className="size-4" />
            </button>
            <span className="min-w-8 text-center text-sm font-semibold">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="flex size-10 items-center justify-center text-foreground/70 transition hover:text-primary"
              aria-label="הגדלת כמות"
            >
              <Plus className="size-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() =>
              addItem(
                {
                  productSlug: product.slug,
                  variantId: activeVariant.id,
                  name: product.name,
                  variantName: activeVariant.name,
                  price: product.price,
                  image: activeVariant.image,
                },
                quantity,
              )
            }
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <ShoppingBag className="size-4" />
            הוספה לעגלה · {formatPrice(product.price * quantity)}
          </button>
        </div>

        {/* Details */}
        <div className="mt-9 rounded-2xl border border-border bg-secondary/40 p-5">
          <h2 className="text-sm font-semibold text-foreground">
            {product.isBundle ? 'מה כלול במארז' : 'פרטי המוצר'}
          </h2>
          <ul className="mt-3 space-y-2">
            {product.details.map((detail) => (
              <li key={detail} className="flex items-center gap-2 text-sm text-foreground/75">
                <Check className="size-4 shrink-0 text-primary" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
