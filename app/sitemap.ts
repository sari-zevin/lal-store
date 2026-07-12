import type { MetadataRoute } from 'next'
import { products, categories } from '@/lib/products'

const BASE_URL = 'https://lal-store.onrender.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/shop', '/about'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }))

  const categoryPages = categories.map((c) => ({
    url: `${BASE_URL}/category/${c.slug}`,
    lastModified: new Date(),
  }))

  const productPages = products.map((p) => ({
    url: `${BASE_URL}/product/${p.slug}`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...categoryPages, ...productPages]
}