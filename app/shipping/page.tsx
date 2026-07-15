import { Truck, RotateCcw, PackageCheck, Clock } from 'lucide-react'

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-widest text-primary">מדיניות</p>
        <h1 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">משלוחים והחזרות</h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/70">
          כל מה שצריך לדעת על קבלת ההזמנה שלכם, ומה עושים אם משהו לא מתאים.
        </p>
      </header>

      <section className="mt-14">
        <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground">
          <Truck className="size-6 text-primary" />
          משלוחים
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-medium text-foreground/60">משלוח חינם</p>
            <p className="mt-1 text-base text-foreground">בהזמנה מעל ₪199</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-medium text-foreground/60">עלות משלוח</p>
            <p className="mt-1 text-base text-foreground">₪25 להזמנה מתחת ל-₪199</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-medium text-foreground/60">זמן אספקה</p>
            <p className="mt-1 text-base text-foreground">3-7 ימי עסקים</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-medium text-foreground/60">איזור חלוקה</p>
            <p className="mt-1 text-base text-foreground">כל רחבי הארץ</p>
          </div>
        </div>

        <p className="mt-6 text-base leading-relaxed text-foreground/70">
          לאחר שליחת ההזמנה תקבלו הודעת אישור עם מספר מעקב, ברגע שהחבילה יוצאת לדרך. משלוחים
          נשלחים בימי עסקים (א׳-ה׳), הזמנות שבוצעו בסוף השבוע ייצאו לדרך ביום העסקים הבא.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground">
          <RotateCcw className="size-6 text-primary" />
          החזרות והחלפות
        </h2>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-6">
            <Clock className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <p className="text-base font-medium text-foreground">14 יום להחזרה</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                ניתן להחזיר מוצר תוך 14 יום ממועד קבלת ההזמנה, בהתאם לחוק הגנת הצרכן.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-6">
            <PackageCheck className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <p className="text-base font-medium text-foreground">מצב המוצר</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                המוצר צריך להיות באריזתו המקורית, לא נעשה בו שימוש, ועם התווית המקורית.
                מטעמי היגיינה, לא ניתן להחזיר מוצרי טיפוח שנפתחו או נעשה בהם שימוש.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-base leading-relaxed text-foreground/70">
          לביצוע החזרה או החלפה, פשוט צרו איתנו קשר בעמוד{' '}
          <a href="/contact" className="text-primary underline-offset-4 hover:underline">
            יצירת קשר
          </a>{' '}
          עם מספר ההזמנה, ונדריך אתכם בתהליך. עלות המשלוח החוזר חלה על הלקוח, אלא אם ההחזרה נובעת
          מפגם במוצר או טעות בשליחה.
        </p>
        



        <p className="mt-6 text-base leading-relaxed text-foreground/70">
          לביצוע החזרה או החלפה, פשוט צרו איתנו קשר בעמוד{' '}
          <a href="/contact" className="text-primary underline-offset-4 hover:underline">
            יצירת קשר
          </a>{' '}
          עם מספר ההזמנה, ונדריך אתכם בתהליך. עלות המשלוח החוזר חלה על הלקוח, אלא אם ההחזרה נובעת
          מפגם במוצר או טעות בשליחה.
        </p>

        <div className="mt-8 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            לביצוע החזרה או משלוח
          </a>
        </div>
      </section>
    </div>
  )
}
