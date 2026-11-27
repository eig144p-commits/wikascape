'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Map, MessagesSquare, School } from 'lucide-react'
import { EMPTY_LIST, KEYS, useStoredState, type EarnedMagnet } from '@/lib/storage'

const NAV = [
  { href: '/', label: 'Map', icon: Map },
  { href: '/forum', label: 'Forum', icon: MessagesSquare },
  { href: '/educators', label: 'Educators', icon: School },
]

export function SiteHeader() {
  const [magnets] = useStoredState<EarnedMagnet[]>(KEYS.magnets, EMPTY_LIST)

  return (
    <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground">
            W
          </span>
          Wika Escape
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">{label}</span>
              <span className="sr-only sm:hidden">{label}</span>
            </Link>
          ))}
          <Link
            href="/magnets"
            aria-label={`My Ref Magnets: ${magnets.length} collected`}
            className="ml-1 flex items-center gap-1.5 rounded-full bg-accent py-1 pl-1.5 pr-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <span className="flex size-6 items-center justify-center rounded-full bg-white">
              <Image
                src="/images/ph-sun.png"
                alt=""
                width={20}
                height={20}
                className="size-5 object-contain"
              />
            </span>
            {magnets.length}
          </Link>
        </nav>
      </div>
    </header>
  )
}
