'use client'

import Image from 'next/image'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/components/cart/cart-provider'
import { formatPrice } from '@/lib/products'
import { cn } from '@/lib/utils'

const FREE_SHIPPING_THRESHOLD = 199

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, totalItems } = useCart()

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  return (
    <>
      <div
        onClick={closeCart}
        className={cn(
          'fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!isOpen}
      />

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-full max-w-md flex-col bg-card shadow-2xl transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="עגלת קניות"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="flex items-center gap-2 font-serif text-xl text-foreground">
            <ShoppingBag className="size-5 text-primary" />
            העגלה שלי
            {totalItems > 0 && (
              <span className="text-sm font-normal text-muted-foreground">({totalItems})</span>
            )}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full p-2 text-foreground/60 transition hover:bg-secondary"
            aria-label="סגירת עגלה"
          >
            <X className="size-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="size-7 text-primary" />
            </div>
            <p className="font-serif text-lg text-foreground">העגלה ריקה</p>
            <p className="text-sm text-muted-foreground">הוסיפו מוצרים מפנקים והתחילו את חוויית הפינוק</p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              המשך לקנייה
            </button>
          </div>
        ) : (
          <>
            <div className="border-b border-border bg-secondary/50 px-5 py-3">
              {remaining > 0 ? (
                <p className="text-xs text-foreground/70">
                  הוסיפו עוד{' '}
                  <span className="font-semibold text-primary">{formatPrice(remaining)}</span> וקבלו
                  משלוח חינם
                </p>
              ) : (
                <p className="text-xs font-medium text-primary">קיבלתם משלוח חינם!</p>
              )}
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
              {items.map((item) => (
                <li key={`${item.productSlug}-${item.variantId}`} className="flex gap-4 py-4">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-secondary">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium leading-snug text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.variantName}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productSlug, item.variantId)}
                        className="rounded-full p-1 text-foreground/40 transition hover:bg-secondary hover:text-destructive"
                        aria-label="הסרת פריט"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.productSlug, item.variantId, item.quantity - 1)
                          }
                          className="flex size-7 items-center justify-center text-foreground/70 transition hover:text-primary"
                          aria-label="הפחתת כמות"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.productSlug, item.variantId, item.quantity + 1)
                          }
                          className="flex size-7 items-center justify-center text-foreground/70 transition hover:text-primary"
                          aria-label="הגדלת כמות"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-border px-5 py-4">
              <div className="flex items-center justify-between pb-3">
                <span className="text-sm text-muted-foreground">סכום ביניים</span>
                <span className="font-serif text-lg text-foreground">{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                מעבר לתשלום
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full rounded-full py-2.5 text-sm font-medium text-foreground/70 transition hover:text-primary"
              >
                המשך לקנייה
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
