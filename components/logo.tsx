// import { cn } from '@/lib/utils'

// export function Logo({ className }: { className?: string }) {
//   return (
//     <span
//       className={cn(
//         'inline-flex select-none items-center gap-1 font-serif italic leading-none tracking-tight text-primary',
//         className,
//       )}
//       aria-label="lal"
//     >
//       <span aria-hidden className="opacity-60">
//         ~
//       </span>
//       <span>lal</span>
//       <span aria-hidden className="opacity-60">
//         ~
//       </span>
//     </span>
//   )
// }



import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex select-none items-center', className)}>
      <Image
        src="/logo.png"
        alt="lal"
        width={160}
        height={60}
        priority
        className="h-full w-auto object-contain"
      />
    </span>
  )
}