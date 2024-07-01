'use client'

import { usePathname } from 'next/navigation'

export const PageTitle = () => {
  const pathname = usePathname()
  const pageTitle = pathname?.split('/')[1]
  return <div className="text-3xl font-bold capitalize">{pageTitle}</div>
}
