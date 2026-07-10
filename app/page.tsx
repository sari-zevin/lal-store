import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Leaf, Sparkles, Truck } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { categories, products } from '@/lib/products'

const categoryImages: Record<string, string> = {
  towels: '/lifestyle/towels.png',
  'oils-creams': '/lifestyle/oils.png',
  soaps: '/lifestyle/soaps.png',
  accessories: '/lifestyle/accessories.png',
  gifts: '/products/spa-gift-set/default.png',
}

export default function HomePage() {
  const featured = products.filter((p) => p.badge).slice(0, 4)
  const bestSellers = products.slice(0, 8)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-125 w-full">
          <Image
            src="/lifestyle/store-interior.png"
            alt="חנות lal — עיצוב יוקרתי בגוונים רכים"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background/80 via-background/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl">
                <p className="mb-3 text-sm font-medium tracking-widest text-primary">
                  קולקציית טיפוח יוקרתית
                </p>
                <h1 className="font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
                  פינוק יומיומי שמרגיש כמו ספא
                </h1>
                <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/75">
                  מגבות ענן רכות, שמני גוף מזינים, סבונים בעבודת יד ואביזרי רחצה — הכל בגוונים
                  פסטליים עדינים ובאיכות ללא פשרות.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    לקנייה עכשיו
                    <ArrowLeft className="size-4" />
                  </Link>
                  <Link
                    href="/category/gifts"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card"
                  >
                    מארזי מתנה
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: Truck, title: 'משלוח חינם', text: 'בהזמנה מעל ₪199' },
            { icon: Leaf, title: 'בעבודת יד', text: 'מרכיבים טבעיים ואיכותיים' },
            { icon: Sparkles, title: 'חוויית פינוק', text: 'ספא ביתי בכל יום' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-card text-primary">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">הקטגוריות שלנו</h2>
          <p className="mt-2 text-sm text-muted-foreground">בחרו את הפינוק המושלם עבורכם</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={categoryImages[category.slug] || '/placeholder.svg'}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                  <h3 className="font-serif text-lg text-background">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">מומלצים</h2>
            <p className="mt-2 text-sm text-muted-foreground">האהובים ביותר על הלקוחות שלנו</p>
          </div>
          <Link
            href="/shop"
            className="hidden items-center gap-1 text-sm font-medium text-primary transition hover:opacity-80 sm:inline-flex"
          >
            לכל המוצרים
            <ArrowLeft className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Lifestyle banner */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/10] sm:aspect-[21/9]">
            <Image
              src="/lifestyle/oils.png"
              alt="שמני גוף Whipped Cloud"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background/85 via-background/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-6 sm:px-12">
                <h2 className="max-w-sm font-serif text-2xl text-foreground text-balance sm:text-4xl">
                  קולקציית Whipped Cloud
                </h2>
                <p className="mt-3 max-w-xs text-sm text-foreground/75">
                  הזנה עמוקה, מגע קטיפתי וניחוח עדין שנשאר לאורך כל היום.
                </p>
                <Link
                  href="/category/oils-creams"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  לגילוי הקולקציה
                  <ArrowLeft className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best sellers grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">כל המוצרים</h2>
          <p className="mt-2 text-sm text-muted-foreground">הקולקציה המלאה של lal</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-secondary"
          >
            לצפייה בכל המוצרים
            <ArrowLeft className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
