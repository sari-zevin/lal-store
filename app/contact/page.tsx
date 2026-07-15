'use client'

import { useState } from 'react'
import { Phone, Mail, Clock, MessageCircle, Send, Check } from 'lucide-react'

const PHONE_DISPLAY = '055-670-5845'
const PHONE_TEL = '0556705845'
const WHATSAPP_LINK = 'https://wa.me/972556705845'
const EMAIL = 'l0556705848@gmail.com'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-widest text-primary">צור קשר</p>
        <h1 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">נשמח לשמוע מכם</h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/70">
          יש לכם שאלה על מוצר, הזמנה, או פשוט רוצים להגיד שלום? אנחנו כאן בשבילכם.
        </p>
      </header>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5 transition hover:shadow-sm"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blush/25">
              <Phone className="size-5 text-foreground" />
            </span>
            <div>
              <p className="text-sm text-foreground/60">התקשרו אלינו</p>
              <p className="text-base font-medium text-foreground" dir="ltr">
                {PHONE_DISPLAY}
              </p>
            </div>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5 transition hover:shadow-sm"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage/25">
              <MessageCircle className="size-5 text-foreground" />
            </span>
            <div>
              <p className="text-sm text-foreground/60">כתבו לנו בוואטסאפ</p>
              <p className="text-base font-medium text-foreground" dir="ltr">
                {PHONE_DISPLAY}
              </p>
            </div>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5 transition hover:shadow-sm"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-lavender/25">
              <Mail className="size-5 text-foreground" />
            </span>
            <div>
              <p className="text-sm text-foreground/60">שלחו מייל</p>
              <p className="text-base font-medium text-foreground" dir="ltr">
                {EMAIL}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-aqua/25">
              <Clock className="size-5 text-foreground" />
            </span>
            <div>
              <p className="text-sm text-foreground/60">שעות פעילות</p>
              <p className="text-base font-medium text-foreground">א׳-ה׳ · 10:00-21:00</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-10">
          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/15">
                <Check className="size-7 text-primary" />
              </span>
              <p className="mt-5 font-serif text-2xl text-foreground">ההודעה נשלחה!</p>
              <p className="mt-2 text-base text-foreground/70">נחזור אליכם בהקדם האפשרי.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground/80">שם מלא</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus-visible:border-primary"
                  placeholder="השם שלכם"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground/80">אימייל</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus-visible:border-primary"
                  placeholder="example@mail.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground/80">הודעה</label>
                <textarea
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus-visible:border-primary"
                  placeholder="איך נוכל לעזור?"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
              >
                {status === 'sending' ? 'שולח...' : 'שליחת הודעה'}
                <Send className="size-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}