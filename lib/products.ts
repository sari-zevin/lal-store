// ─────────────────────────────────────────────────────────────
// מבנה הנתונים של החנות.
//
// כל מוצר מכיל מערך "variants" (וריאציות). מוצר עם צבע/גוון אחד
// בלבד מקבל וריאציה יחידה בשם "default". מוצרים עם מספר גוונים
// (כמו סבונים) מקבלים כמה וריאציות, כל אחת עם דגימת צבע (swatch)
// ותמונה משלה.
//
// תמונות מאוחסנות לפי המבנה:
//   public/products/<slug>/<variant-id>.png
// כדי להחליף לתמונות אמיתיות — פשוט החליפו את הקבצים בתיקייה
// המתאימה, מבלי לגעת בקוד.
//
// מארז/מתנה (bundle) הוא מוצר בודד עם isBundle: true — לא מפרקים
// אותו לפריטים נפרדים.
// ─────────────────────────────────────────────────────────────

export type Category = {
  slug: string
  name: string
  description: string
}

export type Variant = {
  id: string
  name: string
  /** צבע דגימה (swatch) שמוצג ככפתור בחירה */
  swatch: string
  image: string
}

export type Product = {
  slug: string
  name: string
  tagline: string
  categorySlug: string
  price: number
  /** מחיר לפני הנחה (אופציונלי) */
  compareAtPrice?: number
  description: string
  details: string[]
  badge?: string
  isBundle?: boolean
  variants: Variant[]
}

export const categories: Category[] = [
  {
    slug: 'towels',
    name: 'מגבות',
    description: 'מגבות ענן רכות במיוחד בגוונים פסטליים',
  },
  {
    slug: 'oils-creams',
    name: 'שמנים וקרמים',
    description: 'שמני גוף, חמאות ופילינג להזנה עמוקה',
  },
  {
    slug: 'soaps',
    name: 'סבונים',
    description: 'סבונים בעבודת יד וניחוחות עדינים',
  },
  {
    slug: 'accessories',
    name: 'אביזרי רחצה',
    description: 'הכל לפינוק שלם בחדר האמבטיה',
  },
  {
    slug: 'gifts',
    name: 'מארזי מתנה',
    description: 'קולקציות ארוזות במיוחד למתנה מושלמת',
  },
]

export const products: Product[] = [
  {
    slug: 'bath-towel',
    name: 'מגבת אמבט Whipped Cloud',
    tagline: 'מגבת פרימיום רכה כמו ענן',
    categorySlug: 'towels',
    price: 149,
    compareAtPrice: 179,
    badge: 'רב מכר',
    description:
      'מגבת אמבט יוקרתית מכותנה מסורקת בעלת ספיגות גבוהה ומגע קטיפתי. עוטפת אתכם בתחושת פינוק כבר מהרגע הראשון.',
    details: ['100% כותנה מסורקת', 'משקל 600 גרם למ״ר', 'מידה 70×140 ס״מ', 'ניתן לכביסה במכונה'],
    variants: [
      { id: 'cream', name: 'קרם', swatch: '#efe7d6', image: '/products/bath-towel/cream.png' },
      { id: 'blush', name: 'ורוד עדין', swatch: '#f0d3d3', image: '/products/bath-towel/blush.png' },
    ],
  },
  {
    slug: 'hand-towel-set',
    name: 'סט מגבות ידיים Whipped Cloud',
    tagline: 'זוג מגבות ידיים רכות',
    categorySlug: 'towels',
    price: 89,
    description:
      'סט של שתי מגבות ידיים רכות ומפנקות, מושלמות לחדר האמבטיה או המטבח. שילוב גוונים עדין שמשדרג כל חלל.',
    details: ['2 מגבות בכל סט', '100% כותנה מסורקת', 'מידה 40×70 ס״מ', 'ספיגות גבוהה'],
    variants: [
      { id: 'blush', name: 'קרם וורוד', swatch: '#f0d3d3', image: '/products/hand-towel-set/blush.png' },
      { id: 'lavender', name: 'לבנדר', swatch: '#d8cce8', image: '/products/hand-towel-set/lavender.png' },
    ],
  },
  {
    slug: 'luminizing-oil',
    name: 'שמן גוף מזהיר Whipped Cloud',
    tagline: 'הזנה קלילה עם זוהר עדין',
    categorySlug: 'oils-creams',
    price: 189,
    badge: 'חדש',
    description:
      'שמן גוף קליל שנספג במהירות ומעניק לעור לחות עמוקה וזוהר טבעי עדין. מותיר תחושה רכה ומשיית ללא שמנוניות.',
    details: ['נספג במהירות', 'עם שמן ג׳וג׳ובה וויטמין E', 'מתאים לכל סוגי העור', 'נפח 100 מ״ל'],
    variants: [
      { id: 'default', name: 'רגיל', swatch: '#f3ecd8', image: '/products/luminizing-oil/default.png' },
    ],
  },
  {
    slug: 'revitalizing-oil',
    name: 'שמן גוף מחדש Whipped Cloud',
    tagline: 'הזנה עשירה לעור יבש',
    categorySlug: 'oils-creams',
    price: 189,
    description:
      'שמן גוף מזין ועשיר שמחדש ומרכך את העור. אידיאלי לעור יבש הזקוק לטיפול אינטנסיבי ולתחושת נעימות לאורך כל היום.',
    details: ['הזנה עשירה', 'עם שמן שקדים וחמאת שיאה', 'לעור יבש ומחוספס', 'נפח 100 מ״ל'],
    variants: [
      { id: 'default', name: 'רגיל', swatch: '#f4dbdb', image: '/products/revitalizing-oil/default.png' },
    ],
  },
  {
    slug: 'body-butter',
    name: 'חמאת גוף Whipped',
    tagline: 'חמאה מוקצפת עשירה',
    categorySlug: 'oils-creams',
    price: 129,
    description:
      'חמאת גוף מוקצפת בטקסטורה עשירה ואוורירית שנמסה על העור. מעניקה לחות אינטנסיבית ותחושת רכות שנמשכת שעות.',
    details: ['טקסטורה מוקצפת', 'עם חמאת קקאו ושיאה', 'הזנה ל-24 שעות', 'נפח 200 מ״ל'],
    variants: [
      { id: 'default', name: 'רגיל', swatch: '#f1ead6', image: '/products/body-butter/default.png' },
    ],
  },
  {
    slug: 'body-scrub',
    name: 'פילינג גוף Whipped Cloud',
    tagline: 'פילינג עדין לעור זוהר',
    categorySlug: 'oils-creams',
    price: 119,
    description:
      'פילינג גוף עדין המסיר תאי עור מתים ומחליק את העור. משאיר תחושת רעננות וזוהר, עם ניחוח לבנדר מרגיע.',
    details: ['גרגרי סוכר טבעיים', 'ניחוח לבנדר', 'לעור חלק וזוהר', 'נפח 200 גרם'],
    variants: [
      { id: 'default', name: 'לבנדר', swatch: '#d8cce8', image: '/products/body-scrub/default.png' },
    ],
  },
  {
    slug: 'artisan-soap',
    name: 'סבון מוצק בעבודת יד',
    tagline: 'סבון עדין בארבעה ניחוחות',
    categorySlug: 'soaps',
    price: 39,
    badge: 'בחירת הצבע',
    description:
      'סבון מוצק בעבודת יד המנקה בעדינות ושומר על לחות העור. בחרו את הגוון והניחוח האהוב עליכם מתוך ארבע אפשרויות.',
    details: ['בעבודת יד', 'ללא פרבנים', 'עשיר בגליצרין', 'משקל 120 גרם'],
    variants: [
      { id: 'lavender', name: 'לבנדר', swatch: '#d8cce8', image: '/products/artisan-soap/lavender.png' },
      { id: 'aqua', name: 'רעננות מים', swatch: '#cddbe8', image: '/products/artisan-soap/aqua.png' },
      { id: 'rose', name: 'ורד', swatch: '#f2cdd6', image: '/products/artisan-soap/rose.png' },
      { id: 'fresh', name: 'קרם טבעי', swatch: '#ece4d2', image: '/products/artisan-soap/fresh.png' },
    ],
  },
  {
    slug: 'shaving-bar',
    name: 'סבון גילוח מוצק',
    tagline: 'גילוח חלק ומפנק',
    categorySlug: 'soaps',
    price: 49,
    description:
      'סבון גילוח מוצק היוצר קצף עשיר וקטיפתי לגילוח חלק וללא גירוי. מגיע עם צלחת עץ אלגנטית.',
    details: ['קצף עשיר', 'כולל צלחת עץ', 'מרכך את השיער', 'משקל 100 גרם'],
    variants: [
      { id: 'default', name: 'קרם', swatch: '#ece4d2', image: '/products/shaving-bar/default.png' },
    ],
  },
  {
    slug: 'bath-salts',
    name: 'מלח אמבט משיי',
    tagline: 'רגיעה מוחלטת באמבטיה',
    categorySlug: 'soaps',
    price: 79,
    description:
      'מלח אמבט משיי שממיס מתחים ומרכך את העור. הוסיפו כף לאמבטיה חמה והתמסרו לחוויית ספא ביתית מרגיעה.',
    details: ['מלח ים המלח', 'כולל כף מדידה', 'ניחוח עדין', 'נפח 300 גרם'],
    variants: [
      { id: 'default', name: 'רגיל', swatch: '#eee7d6', image: '/products/bath-salts/default.png' },
    ],
  },
  {
    slug: 'shower-pouf',
    name: 'כדור רחצה רשת',
    tagline: 'קצף עשיר במגע רך',
    categorySlug: 'accessories',
    price: 45,
    description:
      'כדור רחצה מרשת רכה שיוצר קצף עשיר וספוגי. עוזר לפילינג עדין של העור ומגיע עם חבל תלייה נוח.',
    details: ['רשת רכה', 'קצף עשיר', 'חבל תלייה', 'ניתן לכביסה'],
    variants: [
      { id: 'default', name: 'קרם', swatch: '#efe7d6', image: '/products/shower-pouf/default.png' },
    ],
  },
  {
    slug: 'body-brush',
    name: 'מברשת גוף',
    tagline: 'עיסוי ופילינג יבש',
    categorySlug: 'accessories',
    price: 89,
    description:
      'מברשת גוף עם ידית ארוכה וסיבים טבעיים לפילינג יבש ועיסוי מרענן. מעודדת זרימת דם ומשאירה עור חלק.',
    details: ['סיבים טבעיים', 'ידית ארוכה', 'לפילינג יבש', 'עיצוב זהב ורוד'],
    variants: [
      { id: 'default', name: 'זהב ורוד', swatch: '#e6c3ad', image: '/products/body-brush/default.png' },
    ],
  },
  {
    slug: 'hair-turban',
    name: 'מגבת שיער מיקרופייבר',
    tagline: 'ייבוש עדין ומהיר',
    categorySlug: 'accessories',
    price: 69,
    description:
      'מגבת שיער מבד מיקרופייבר סופג במיוחד שמייבש את השיער בעדינות ובמהירות. מפחית חיכוך ושומר על בריאות השיער.',
    details: ['מיקרופייבר סופג', 'ייבוש מהיר', 'סגירת כפתור נוחה', 'מתאים לכל אורכי השיער'],
    variants: [
      { id: 'default', name: 'קרם', swatch: '#efe7d6', image: '/products/hair-turban/default.png' },
    ],
  },
  {
    slug: 'spa-gift-set',
    name: 'מארז מתנה ספא',
    tagline: 'חוויית פינוק שלמה במארז אחד',
    categorySlug: 'gifts',
    price: 349,
    compareAtPrice: 419,
    badge: 'מארז מתנה',
    isBundle: true,
    description:
      'מארז מתנה יוקרתי הכולל שמן גוף, חמאת גוף, סבון בעבודת יד ומגבת רכה — הכל ארוז בקופסת מתנה אלגנטית. המתנה המושלמת לכל אירוע.',
    details: [
      'שמן גוף מזהיר 100 מ״ל',
      'חמאת גוף מוקצפת 200 מ״ל',
      'סבון בעבודת יד',
      'מגבת ידיים רכה',
      'ארוז בקופסת מתנה',
    ],
    variants: [
      { id: 'default', name: 'מארז קלאסי', swatch: '#efe7d6', image: '/products/spa-gift-set/default.png' },
    ],
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function formatPrice(price: number): string {
  return `₪${price.toLocaleString('he-IL')}`
}
