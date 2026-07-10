// import { MapPin, Navigation, Droplet, Leaf, Flower2, Wind, Sparkles } from 'lucide-react'
// import { Logo } from '@/components/logo'

// const ADDRESS = "רח' מנחם פרוש 1, בית שמש"
// const MAPS_QUERY = encodeURIComponent(ADDRESS)

// const OFFERINGS = [
//   { label: 'סבונים', icon: Sparkles, tint: 'bg-blush/25 text-foreground' },
//   { label: 'קרמים', icon: Leaf, tint: 'bg-sage/25 text-foreground' },
//   { label: 'שמנים', icon: Droplet, tint: 'bg-aqua/25 text-foreground' },
//   { label: 'בישום', icon: Flower2, tint: 'bg-lavender/25 text-foreground' },
//   { label: 'מגבות', icon: Wind, tint: 'bg-rose-gold/15 text-foreground' },
// ]

// export default function AboutPage() {
//   return (
//     <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//       {/* Hero */}
//       <header className="mx-auto max-w-2xl text-center">
//         <p className="mb-5 text-sm font-medium tracking-widest text-primary">חנות קונספט</p>

//         <Logo className="mx-auto h-16 w-auto" />

//         <p className="mt-7 font-serif text-2xl leading-relaxed text-foreground text-balance sm:text-3xl">
//           הרמוניה מושלמת של מוצרי טיפוח פרימיום
//           <br />
//           בחלל עוטף ומרגיע
//         </p>
//       </header>

//       {/* Offerings */}
//       <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-5">
//         {OFFERINGS.map(({ label, icon: Icon, tint }) => (
//           <div
//             key={label}
//             className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 text-center transition hover:shadow-sm"
//           >
//             <span className={`flex size-11 items-center justify-center rounded-full ${tint}`}>
//               <Icon className="size-5" />
//             </span>
//             <span className="text-sm font-medium text-foreground/80">{label}</span>
//           </div>
//         ))}
//       </div>

//       {/* Experience card */}
//       <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border bg-secondary/40 p-10 text-center sm:p-14">
//         <p className="text-base leading-relaxed text-foreground/75">
//           כל מוצר נבחר ונוצר במחשבה על רגע של פינוק אמיתי — מגע רך, ניחוח עדין, ותחושה של רוגע
//           שנשארת גם אחרי שסוגרים את הדלת.
//         </p>
//         <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-3 text-primary/40">
//           <span className="h-px flex-1 bg-current" />
//           <span className="text-lg">~</span>
//           <span className="h-px flex-1 bg-current" />
//         </div>
//         <p className="mt-8 font-serif text-3xl text-foreground">
//           טיפוח <span className="text-primary">·</span> רוגע <span className="text-primary">·</span> חוויה
//         </p>
//       </div>

//       {/* Location */}
//       <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:gap-12">
//         <div className="flex flex-col justify-center">
//           <p className="text-sm font-medium tracking-widest text-primary">בקרו אותנו</p>
//           <h2 className="mt-3 flex items-center gap-2 font-serif text-3xl text-foreground">
//             הסטודיו של
//             <Logo className="h-7 w-auto" />
//           </h2>
//           <p className="mt-4 flex items-center gap-2 text-base text-foreground/75">
//             <MapPin className="size-5 text-primary" />
//             {ADDRESS}
//           </p>
//           <div className="mt-6 flex flex-wrap gap-3">
//             <a
//               href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
//             >
//               קבלת מסלול הגעה
//               <Navigation className="size-4" />
//             </a>
//             <a
//               href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card"
//             >
//               פתיחה בגוגל מפות
//             </a>
//           </div>
//         </div>
        
//         <div className="overflow-hidden rounded-3xl border border-border shadow-md">
//           <iframe
//             title="מיקום הסטודיו"
//             src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
//             width="100%"
//             height="100%"
//             style={{ border: 0, minHeight: 320 }}
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }


import { MapPin, Navigation, Droplet, Leaf, Flower2, Wind, Sparkles } from 'lucide-react'
import { Logo } from '@/components/logo'

const ADDRESS = "רח' מנחם פרוש 1, בית שמש"
const MAPS_QUERY = encodeURIComponent(ADDRESS)

const OFFERINGS = [
  { label: 'סבונים', icon: Sparkles, tint: 'bg-blush/25 text-foreground' },
  { label: 'קרמים', icon: Leaf, tint: 'bg-sage/25 text-foreground' },
  { label: 'שמנים', icon: Droplet, tint: 'bg-aqua/25 text-foreground' },
  { label: 'בישום', icon: Flower2, tint: 'bg-lavender/25 text-foreground' },
  { label: 'מגבות', icon: Wind, tint: 'bg-rose-gold/15 text-foreground' },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">הסיפור שלנו</h1>

        <p className="mt-9 text-lg leading-relaxed text-foreground">
          יש רגעים שבהם הכל עוצר לרגע - הדלת נסגרת מאחורייך, האור מתרכך, והנשימה מתארכת. בשביל
          הרגעים האלה נולד lal.
        </p>

        <p className="mt-5 text-base leading-relaxed text-foreground/70">
          לא סתם מוצרי טיפוח - טקסים קטנים של אהבה עצמית. סבון שמלטף, קרם שנספג כמו חיבוק, שמן
          שמזכיר לך להאט, ניחוח שנשאר איתך גם אחרי שיצאת מהדלת, ומגבת רכה שעוטפת אותך בסוף היום.
        </p>

        <p className="mt-4 text-base leading-relaxed text-foreground/70">
          כי לפעמים כל מה שצריך זה לעצור, לנשום, ולתת לעצמך כמה דקות שהן רק שלך. הרמוניה מושלמת
          של מוצרי טיפוח פרימיום, בחלל עוטף ומרגיע.
        </p>

        <p className="mt-5 text-lg font-semibold text-foreground">
          בואו להנות. מטיפוח. מרוגע. מחוויה שנשארת.
        </p>
      </header>

      <p className="mt-14 text-center text-sm font-medium tracking-widest text-primary">
        מה תמצאו אצלנו
      </p>
      <div className="mx-auto mt-4 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-5">
        {OFFERINGS.map(({ label, icon: Icon, tint }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 text-center transition hover:shadow-sm"
          >
            <span className={`flex size-11 items-center justify-center rounded-full ${tint}`}>
              <Icon className="size-5" />
            </span>
            <span className="text-sm font-medium text-foreground/80">{label}</span>
          </div>
        ))}
      </div>


        
      <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border bg-secondary/40 p-10 text-center sm:p-14">
        <p className="text-base leading-relaxed text-foreground/70">
          כי מגיע לכם רגע שהוא רק שלכם
        </p>

        <div className="mx-auto flex max-w-xs items-center justify-center gap-3 text-primary/40">
          <span className="h-px flex-1 bg-current" />
          <span className="text-lg">~</span>
          <span className="h-px flex-1 bg-current" />
        </div>
        <p className="mt-6 font-serif text-3xl text-foreground">
          טיפוח <span className="text-primary">·</span> רוגע <span className="text-primary">·</span> חוויה
        </p>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium tracking-widest text-primary">בקרו אותנו</p>
          <h2 className="mt-3 flex items-center gap-2 font-serif text-3xl text-foreground">
            הסטודיו של
            <Logo className="h-7 w-auto" />
          </h2>
          <p className="mt-4 text-base leading-loose text-foreground/70">
            נשמח לארח אתכם בסטודיו שלנו לחוויה אישית - להריח, לגעת ולהתרשם מהמוצרים מקרוב, ולקבל
            ליווי אישי בבחירת השגרה המושלמת עבורכם.
          </p>
          <p className="mt-4 flex items-center gap-2 text-base text-foreground/75">
            <MapPin className="size-5 text-primary" />
            {ADDRESS}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              קבלת מסלול הגעה
              <Navigation className="size-4" />
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card"
            >
              פתיחה בגוגל מפות
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-md">
          <iframe
            title="מיקום הסטודיו"
            src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}