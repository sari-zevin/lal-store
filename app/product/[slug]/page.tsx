import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { ProductDetail } from '@/components/product-detail'
import { getCategory, getProduct, getProductsByCategory, products } from '@/lib/products'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: `${product.name} — lal`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const category = getCategory(product.categorySlug)
  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav
        className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
        aria-label="נתיב ניווט"
      >
        <Link href="/" className="transition hover:text-primary">
          בית
        </Link>
        <ChevronLeft className="size-4" />
        {category && (
          <>
            <Link href={`/category/${category.slug}`} className="transition hover:text-primary">
              {category.name}
            </Link>
            <ChevronLeft className="size-4" />
          </>
        )}
        <span className="text-foreground">{product.name}</span>
      </nav>

      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 font-serif text-2xl text-foreground sm:text-3xl">מוצרים נוספים שתאהבו</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
