import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { categories, getCategory, getProductsByCategory } from '@/lib/products'

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return {}
  return {
    title: `${category.name} — lal`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  const items = getProductsByCategory(slug)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground" aria-label="נתיב ניווט">
        <Link href="/" className="transition hover:text-primary">
          בית
        </Link>
        <ChevronLeft className="size-4" />
        <span className="text-foreground">{category.name}</span>
      </nav>

      <header className="mb-10 text-center">
        <h1 className="font-serif text-4xl text-foreground">{category.name}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
      </header>

      {items.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="py-20 text-center text-muted-foreground">אין מוצרים בקטגוריה זו עדיין.</p>
      )}
    </div>
  )
}
