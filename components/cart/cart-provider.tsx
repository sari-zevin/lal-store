'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export type CartItem = {
  productSlug: string
  variantId: string
  name: string
  variantName: string
  price: number
  image: string
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void
  removeItem: (productSlug: string, variantId: string) => void
  updateQuantity: (productSlug: string, variantId: string, quantity: number) => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextValue | null>(null)

function keyOf(slug: string, variantId: string) {
  return `${slug}__${variantId}`
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem: CartContextValue['addItem'] = (item, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => keyOf(i.productSlug, i.variantId) === keyOf(item.productSlug, item.variantId),
      )
      if (existing) {
        return prev.map((i) =>
          keyOf(i.productSlug, i.variantId) === keyOf(item.productSlug, item.variantId)
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        )
      }
      return [...prev, { ...item, quantity }]
    })
    setIsOpen(true)
  }

  const removeItem: CartContextValue['removeItem'] = (slug, variantId) => {
    setItems((prev) =>
      prev.filter((i) => keyOf(i.productSlug, i.variantId) !== keyOf(slug, variantId)),
    )
  }

  const updateQuantity: CartContextValue['updateQuantity'] = (slug, variantId, quantity) => {
    if (quantity <= 0) {
      removeItem(slug, variantId)
      return
    }
    setItems((prev) =>
      prev.map((i) =>
        keyOf(i.productSlug, i.variantId) === keyOf(slug, variantId) ? { ...i, quantity } : i,
      ),
    )
  }

  const { totalItems, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, i) => {
        acc.totalItems += i.quantity
        acc.subtotal += i.price * i.quantity
        return acc
      },
      { totalItems: 0, subtotal: 0 },
    )
  }, [items])

  const value: CartContextValue = {
    items,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    updateQuantity,
    totalItems,
    subtotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
