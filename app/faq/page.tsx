'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'ממה עשויים המוצרים?',
    a: 'כל המוצרים שלנו מיוצרים ממרכיבים טבעיים ועדינים, ללא פרבנים וללא צבעי מאכל מלאכותיים. פרטי המרכיבים המלאים מופיעים בעמוד כל מוצר.',
  },
  {
    q: 'כמה זמן לוקח לקבל את ההזמנה?',
    a: 'משלוחים מגיעים תוך 3-7 ימי עסקים מרגע ביצוע ההזמנה. תקבלו מספר מעקב במייל ברגע שהחבילה יוצאת לדרך.',
  },
  {
    q: 'איך אני מחזירה או מחליפה מוצר?',
    a: 'ניתן להחזיר מוצר תוך 14 יום, באריזה המקורית וללא שימוש. פרטים מלאים בעמוד משלוחים והחזרות, או פשוט צרו קשר ונדריך אתכם.',
  },
  {
    q: 'אילו אמצעי תשלום מתקבלים?',
    a: 'ניתן לשלם בכרטיס אשראי, Bit ו-PayPal. כל התשלומים מאובטחים ומוצפנים.',
  },
  {
    q: 'האם ניתן לקבל עטיפת מתנה?',
    a: 'בהחלט! בעת ההזמנה ניתן לסמן "עטיפת מתנה" ואנחנו נדאג לאריזה מיוחדת עם כרטיס ברכה אישי.',
  },
  {
    q: 'המוצרים מתאימים לעור רגיש?',
    a: 'רוב המוצרים שלנו עדינים ומתאימים גם לעור רגיש, אך מומלץ לבדוק את רשימת המרכיבים בעמוד המוצר ולבצע בדיקת רגישות קטנה לפני שימוש מלא.',
  },
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-widest text-primary">עזרה</p>
        <h1 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">שאלות נפוצות</h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/70">
          לא מצאתן תשובה לשאלה שלכן? אתן מוזמנות{' '}
          <a href="/contact" className="text-primary underline-offset-4 hover:underline">
            ליצור קשר
          </a>{' '}
          ישירות.
        </p>
      </header>

      <div className="mt-12 space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-foreground">{item.q}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-foreground/70">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mx-auto mt-14 max-w-lg rounded-3xl border border-border bg-secondary/40 p-8 text-center">
        <p className="font-serif text-xl text-foreground">יש לכן שאלה אחרת?</p>
        <p className="mt-2 text-sm text-foreground/70">נשמח לענות לכל שאלה - אישית ובמהירות.</p>
        <a
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          שאלו אותנו
        </a>
      </div>
    </div>
  )
}